FROM node:20-bullseye-slim

# Create app directory
WORKDIR /usr/app/

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

# If you are building your code for dev
RUN npm install

# If you are building your code for production
# RUN npm ci --omit=dev

# Bundle app source
COPY . .

# Running the app in dev
CMD [ "npm", "run","start" ]

# Running the app in prod
# CMD [ "npm", "run","start" ]

# To build Image
# docker build -t meet2meat/m2mAPI:1.0.0 .

# To use the docker
# docker run -p 127.0.0.1:6969:6969 -t meet2meat/m2mAPI:1.0.0