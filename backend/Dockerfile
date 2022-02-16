# Dockerfile backend
FROM node:17-alpine

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package*.json ./

RUN npm install nodemon -g
RUN npm install --silent

RUN pwd



COPY . .

EXPOSE 8086

CMD ["npm", "start"]
