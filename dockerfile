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
COPY . ./

# Generate the build of the application
RUN npm run build

# Run tests
RUN npm test

# Stage 2: Production build
# You can include the production build stage here if needed
# ...

# Stage 3: Final image
# You can include the final image stage here if needed
# ...
