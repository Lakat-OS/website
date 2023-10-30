#! /bin/bash

IP="3-79-79-252"
HOST="ec2-${IP}.eu-central-1.compute.amazonaws.com"

ssh -i "lakat_science_website.pem" ubuntu@${HOST}