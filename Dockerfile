FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm ci

RUN npm install nodemon

COPY . .

ENV PORT=8080

EXPOSE 8080

CMD ["npm", "start"]