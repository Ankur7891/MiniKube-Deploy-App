# Use Node.js LTS (Alpine)
FROM node:18-alpine

# Set Working Directory
WORKDIR /app

# Copy Package Files and Install Dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy App Files
COPY . .

# Expose Port
EXPOSE 5000

# Start the App
CMD ["npm", "start"]