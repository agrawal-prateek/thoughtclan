require('dotenv').config({path: '../../.env'});

module.exports = {
  development: {
    username: process.env.DOCKER_PG_USER,
    password: process.env.PGPASS || null,
    database: process.env.DOCKER_DB_NAME,
    port: process.env.DOCKER_PG_PORT,
    host: process.env.DOCKER_PG_HOST,
    dialect: 'postgres'
  },
  test: {
    username: process.env.DOCKER_PG_USER,
    password: process.env.PGPASS || null,
    database: process.env.DOCKER_DB_NAME,
    port: process.env.DOCKER_PG_PORT,
    host: process.env.DOCKER_PG_HOST,
    dialect: 'postgres'
  },
  production: {
    username: process.env.DOCKER_PG_USER,
    password: process.env.PGPASS || null,
    database: process.env.DOCKER_DB_NAME,
    port: process.env.DOCKER_PG_PORT,
    host: process.env.DOCKER_PG_HOST,
    dialect: 'postgres'
  }
};
