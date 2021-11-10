FROM node:12-alpine
RUN apk add

# Create work directory
WORKDIR /usr/src/app

COPY package*.json ./

# Install runtime dependencies
RUN yarn global add typescript

# Copy app source to work directory
COPY . /usr/src/app

# Install app dependencies
RUN yarn install

# Build
RUN yarn build

EXPOSE 3000
CMD node dist/main.js