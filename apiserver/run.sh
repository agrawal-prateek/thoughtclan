#!/usr/bin/env bash

import_env() {
  # All subsequent variables
  # that are defined are automatically
  # exported.
  set -o allexport
  source $1
  set +o allexport
}

# Exit immediately if a command exits with a non-zero exit status.
set -e

# Colors
GREEN='\033[0;32m'
NO_COLOR='\033[0m'

esc=$(printf '\033')

current_dir=$(dirname "${BASH_SOURCE[0]}")

(cd "${current_dir}" && {

  import_env '.env'

  ({
    # Create or start the Docker
    # shellcheck disable=SC2091
    if [ "$(docker ps -a | grep ${DOCKER_NAME})" ] ; then
      echo "Postgres Docker container already exists. Starting ${DOCKER_NAME}..."
      docker_cmd="docker start -a ${DOCKER_NAME}"
    else
      echo "Postgres Docker container doesn't exist. Creating Docker ${DOCKER_NAME}..."
      docker_cmd="docker run -e POSTGRES_USER=${DOCKER_PG_USER} -v $(pwd)/data:/var/lib/postgresql/data --name ${DOCKER_NAME} -p ${DOCKER_PG_PORT}:5432 postgres"
    fi
    eval "${docker_cmd}" 2>&1
    echo -e "${GREEN}Docker started${NO_COLOR}"
  }) | sed "s/^/${esc}[36m[database]${esc}[0m /" &

  ({
    echo "Installing npm packages..."
    npm install
    echo -e "${GREEN}Installed npm packages${NO_COLOR}"

    # Check repedately if database server is ready
    until psql -h ${DOCKER_PG_HOST} -p ${DOCKER_PG_PORT} -U ${DOCKER_PG_USER} -c "" 2>/dev/null; do
      echo "Postgres connection not ready. Trying again in 3 seconds..."
      sleep 3
    done

    echo "Postgres connection is ready..."
    cd migrate
    set +e

    # Create database
    echo "Initializing database..."
    npx sequelize db:create
    echo -e "${GREEN}Database is ready${NO_COLOR}"

    # Start Migration
    echo "Starting migration..."
    npx sequelize db:migrate
    npx sequelize-cli db:seed:all
    echo -e "${GREEN}All schemas are ready${NO_COLOR}"

    cd -
    set -e

    # Start App
    mvn spring-boot:run
    set +e
  }) | sed "s/^/${esc}[34m[init]${esc}[0m /"
  wait
})
