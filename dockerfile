# Stage 1: Build the React application with Vite
FROM node:16 AS build

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy all files from the current directory to the container
COPY . .

# Build the React application for production
RUN npm run build

# Stage 2: Serve the application with nginx
FROM nginx:alpine

# Copy the built files from the build stage to the nginx html folder
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]