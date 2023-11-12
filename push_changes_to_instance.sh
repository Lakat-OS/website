#! /bin/bash

# IP="18-197-68-234"
IP="3-79-79-252"
HOST="ec2-${IP}.eu-central-1.compute.amazonaws.com"

echo ">>> Stopping the service and removing all unused containers and images"
# call the stop script (./stop.sh) in the website folder of the instance
ssh -i "lakat_science_website.pem" ubuntu@${HOST} "cd website && ./stop.sh && docker system prune -a --force"

echo ">>> Pulling most recent changes from the development branch"

# pull the changes remotely
ssh -i "lakat_science_website.pem" ubuntu@${HOST} "cd website && git checkout development && git pull"

echo ">>> Building the frontend service for production"

# start the service again
ssh -i "lakat_science_website.pem" ubuntu@${HOST} "cd website && ./start.sh --only-frontend --production"
