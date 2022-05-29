# syntax=docker/dockerfile:1
FROM node:16-alpine3.11
WORKDIR /app
EXPOSE 8001/tcp
# install dependencies of dependencies and other utils
RUN apk update
RUN apk add --no-cache npm python3 make g++
# copy package.json and package-lock.json to allow installing dependencies
COPY package* .
# install dependencies
RUN npm ci
# copy rest of files
COPY . .
CMD node .
