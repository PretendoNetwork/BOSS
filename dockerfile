# syntax=docker/dockerfile:1
FROM node:current-alpine3.11
EXPOSE 8080/tcp
RUN apk update
RUN apk add --no-cache npm python3 make g++
WORKDIR /app
COPY . .
RUN mkdir /config
VOLUME /config
RUN mv example.config.json /config/config.json
RUN npm install
WORKDIR /app
RUN echo "cp /config/config.json /app/config.json &&  npm start" > startup.sh
RUN chmod +x startup.sh
ENTRYPOINT "/app/startup.sh"