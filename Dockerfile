FROM node:latest

RUN mkdir -p /home/backend
WORKDIR /home/backend
COPY package.json ./
COPY package-lock.json ./
RUN npm config set cache /home/node/app/.npm-cache --global
RUN npm i -g @nestjs/cli
RUN npm i
EXPOSE 3000
