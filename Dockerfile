# pull base image
FROM node:18-alpine
# define working directory
WORKDIR /usr/src/app

COPY package*.json ./
# install npm package
RUN npm ci

# copy everything in current dir
COPY . .

EXPOSE 5000
# define default command
CMD ["npm", "run", "dev"]