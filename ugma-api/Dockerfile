FROM node:25

WORKDIR /ugma-api
COPY package*.json .
RUN npm install

EXPOSE 3000
COPY . .
CMD npm run build
