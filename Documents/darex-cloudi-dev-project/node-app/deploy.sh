#!/bin/bash

# Build the Docker image
docker build -t node-app .

# Stop and remove any old container
docker stop node-app-container || true
docker rm node-app-container || true

# Run the new container in the background
docker run -d -p 3000:3000 --name node-app-container node-app