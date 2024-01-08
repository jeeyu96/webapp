# Use a more recent Node.js image as the base imag
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Set npm configuration
RUN npm config set fetch-retry-maxtimeout 60000
RUN npm config set registry https://registry.npmjs.org/

# Copy the rest of the application code to the working directory
COPY . .

# Install dependencies
RUN npm install

RUN npx prisma generate

# Expose the port that Next.js will run on
EXPOSE 3000

# Run the application when the container starts
CMD ["npm", "run", "dev"]

