#! /bin/bash

# if the argument provided is --local, then start the docker-compose-only-db.yml file, if the argument provided is --development, then start the docker compose with the docker-compose.yml file, if the argument provided is --production, then start the docker compose with the docker-compose-production.yml

if [ "$1" == "--local" ]; then
    echo "--> Starting local development environment"
    docker-compose -f docker-compose-only-db.yml up -d
    sleep 3
    ## start backend
    echo "--> Starting backend flask server"
    cd backend
    .venv/bin/python app.py &
    sleep 3
    ## start frontend
    echo "--> Starting frontend react server"
    cd ../frontend
    # yarn start:dev-open 
    yarn start:next:dev:port
    # done  
    echo "--> Done"
    exit 0
elif [ "$1" == "--development" ]; then
    ## if the second argument is --build then echo hello, else say hi
    if [ "$2" == "--build" ]; then
        echo "--> Starting development environment with build"
        docker-compose up --build
    else
        echo "--> Starting development environment without build"
        docker-compose up
    fi
    echo "--> Done"
elif [ "$1" == "--only-frontend" ]; then
    ## if the second argument is --build then echo hello, else say hi
    if [ "$2" == "--development" ]; then
        echo "--> Starting development environment with build"
        docker-compose -f docker-compose-only-frontend.yml up --build
    elif [ "$2" == "--production" ]; then 
        echo "--> Starting production environment with build"
        docker-compose -f docker-compose-production-only-frontend.yml up --build -d
    else
        echo "--> Can only be used with --development or --production"
    fi
    echo "--> Done"
    exit 0
elif [ "$1" == "--production" ]; then
    echo "--> Starting production environment"
    docker-compose -f docker-compose-production.yml up --build -d
    echo "--> Done"
    exit 0
else
    echo "Please provide an argument: --local, --development or --production"
fi