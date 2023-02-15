FROM node:latest AS build
WORKDIR /server
ADD . /server
RUN npm install
RUN npm install pm2 -g
EXPOSE 9091
CMD [ "pm2-runtime", "npm", "--", "start" ]

