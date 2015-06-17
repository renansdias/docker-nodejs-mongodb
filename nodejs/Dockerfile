# Download Ubuntu image
FROM ubuntu:14.04

# Install Node.js, NPM and git
RUN apt-get update; apt-get install nodejs npm git git-core -y

# Create folder to hold the project 
RUN mkdir /src

# Install project in the created folder
run cd /src; git clone https://github.com/renansdias/docker-nodejs-mongodb.git

# Cd into the project folder and install node modules dependencies
RUN cd /src/docker-nodejs-mongodb; npm install

# Expose port 8080
EXPOSE 8080