#!/bin/bash

# Stop script execution if an error occurs
set -e

echo "Building the application..."

# Install dependencies and build the project
npm install
npm run build

echo "Build completed successfully!"
