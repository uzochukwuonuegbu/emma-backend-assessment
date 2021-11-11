FROM node:17

# Create work directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

COPY package*.json /usr/src/app/

# Install runtime dependencies
RUN yarn global add typescript

# Install app dependencies
RUN yarn install

# Copy app source to work directory
COPY . /usr/src/app

EXPOSE 3000
CMD ["npm", "run", "start"]