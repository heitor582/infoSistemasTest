FROM node:latest

RUN mkdir -p /home/backend
WORKDIR /home/backend
COPY package.json ./
COPY yarn.lock ./
RUN npm config set cache /home/node/app/.npm-cache --global
RUN npm i -g @nestjs/cli
RUN yarn
EXPOSE 3000
