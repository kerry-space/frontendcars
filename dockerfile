# Stage 1: Build the React app
FROM node:14 AS build

# Set the working directory
WORKDIR /app

# Add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# Install app dependencies by copying
# package.json and package-lock.json
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install --silent

# Add app source code
COPY src ./src
# Copy public directory
COPY public ./public

# Run tests (consider moving this to a separate stage if required)
RUN npm test

# Generate the build of the application
RUN npm run build

# Stage 2: Serve the React app using a lightweight server (e.g., nginx)
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
# Copy and setup server configuration if necessary
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

