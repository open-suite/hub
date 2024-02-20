#!/bin/bash

# Check if Git is installed
if ! command -v git &> /dev/null; then
    echo "Git is not installed. Please install Git and try again."
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Please install Docker and try again."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "Docker Compose is not installed. Please install Docker Compose and try again."
    exit 1
fi

# Proceed with the script if Git, Docker, and Docker Compose are installed
timestamp="$(date +%s)"
first_three_digits="$(echo "$timestamp" | cut -c 7-11)"

git clone https://github.com/open-suite/hub "$first_three_digits-OpenSuite"
cd "$first_three_digits-OpenSuite/docker"
docker-compose up