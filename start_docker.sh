#!/bin/bash

# Retrieve the latest version of the code
#git pull

# Remove the existing container
docker compose down --rmi local

# Build the new container
docker compose up --build -d