# Thoughtclan

This project contains two sub-projects **Frontend** and **Backend** in two folders 
[frontend](/frontend) and [apiserver](/apiserver) respectively.

This project has **automated scripts** which can be used for setup and won't need to install dependencies manually.

Below is the description of both [apiserver](#apiserver) and [frontend](#frontend) the projects.


#### Details (for server):

Backend is written in Java and uses `spring-boot` framework.

While running the project, `postgresql` is installed on `docker` and by using
 `sequilize` (A node framework), databases, tables and **seeders** are migrated to **docker**. 
 A user for database is created. All the dependencies given in `package.json` is installed.
 And finally maven starts the sever. All these processes (DB, installation, and maven) runs 
 in background within same console.
 All these code is written in `run.sh`

Server uses the following Tech-stacks:

    maven v4.0.0
    sping-boot v2.2.2
    postgres 9 or later
    node v13.2.0

#### Details (for frontend):

Frontend is written in `React`. It connects to backend and uses the required services. 

The communication between frontend and backend is done in `JSON` format via `REST` APIs.

**I've implemented additional feature to show hotel location on a map and used google-map APIs for that** 

There is an option on Hotel's card which will open a model and show a map on it with corresponding
location of hotel marked on the map. The location of the hotel is fetched using **latitude** 
and **longitude** given in hotel's data.

#### Features

- Listing all the hotels on frontend
- Search, filter and sorting feature
- Show hotel on a map on modal

Frontend uses the following Libraries:

    react 16
    react-redux
    axios (for communication with Backend)
    react-router
    material-ui (Google's library for material components)
    react-google-maps
    redux-thunk
    dotenv
    
    
# APIServer

This server has APIs which will be consumed by the frontend.

#### Prerequisite

    Docker
    java v1.8
    maven v4.0.0
    node v13.2.0
    npm v6.13.1
    
##### Steps to run:

-  Go to **apiserver** directory and open console
-  Run `./clean.sh` to clean project (No need for fresh project)
-  Run `./run.sh`

It will automatically install all the dependencies and start the server.

# Frontend

This is the UI of the application.

#### Prerequisite

    node v13.2.0
    npm v6.13.1
    
##### Steps to run:

-  Go to **frontend** directory and open console
-  Run `./clean.sh` to clean project (No need for fresh project)
-  Run `./install.sh` to install dependencies
-  Run `./run.sh` to start the project
-  Run `./build.sh` to build the project

# Features

- Listing all the hotels on frontend
- Search, filter and sorting feature
- Show hotel on a map on modal

For more info, see on: http://github.com/agrawal-prateek/thoughtclan 