# pull base image
FROM node:18
# define working directory
WORKDIR /usr/src/app

COPY package*.json ./
# install npm package
RUN npm ci

RUN npm install nodemon
# copy everything in current dir
COPY . .
# set environment variables
ENV PORT=5000

EXPOSE 5000
# define default command
CMD ["npm", "start"]