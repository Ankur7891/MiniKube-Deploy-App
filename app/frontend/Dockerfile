# Use Node.js LTS (Alpine)
FROM node:18-alpine 

# Set Working Directory
WORKDIR /app

# Copy Package Files and Install Dependencies
COPY package.json package-lock.json ./
RUN npm install --frozen-lockfile

# Copy App Files
COPY . .

# Build App for Production
RUN npm run build

# Use Nginx to Serve the Built Frontend
FROM nginx:alpine

# Copy the Built Files to Nginx's Folder
COPY --from=0 /app/dist /usr/share/nginx/html

# Expose Port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
