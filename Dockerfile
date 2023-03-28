# pull base image
FROM node:18
# definr working directory
WORKDIR /usr/src/app

COPY package*.json ./
# install npm package
RUN npm ci

RUN npm install nodemon
# copy everything in working directory
COPY . .
# set environment variables
ENV PORT=8080

EXPOSE 8080
# define default command
CMD ["npm", "start"]