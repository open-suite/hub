# Use an existing image as a base
FROM node:20

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json to the working directory
COPY dist/package*.json ./

# Install dependencies
RUN npm install --production

# Copy the rest of the application files
COPY dist .

# Expose the port specified in the .env file
EXPOSE 8008

# Command to start the application
CMD ["node", "index.js"]