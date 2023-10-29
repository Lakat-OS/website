#! /bin/bash

scp -i "lakat_science_website.pem" ./.env ubuntu@ec2-3-79-79-252.eu-central-1.compute.amazonaws.com:/home/ubuntu/website
