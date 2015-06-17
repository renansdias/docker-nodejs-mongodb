# Download ubuntu image
FROM ubuntu:14.04

# Create directory to hold mongodb installer
RUN mkdir /src

# Add the install_mongodb script to our container
ADD install_mongodb /src/install_mongodb

# Change permissions of the script
RUN chmod +x /src/install_mongodb

# Run the script
RUN /src/install_mongodb

# Create folder to hold database files
RUN mkdir -p /data/db

# Expose port 27017 from the container to the host
EXPOSE 27017

# Set /usr/bin/mongod as the dockerized entry-point appplication
ENTRYPOINT /usr/bin/mongod