#! /bin/bash

IP="3-79-79-252"
HOST="ec2-${IP}.eu-central-1.compute.amazonaws.com"

scp -i "lakat_science_website.pem" ./.env ubuntu@${HOST}:/home/ubuntu/website
