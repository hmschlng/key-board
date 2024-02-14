FROM node:18.17.0

EXPOSE 5000

RUN mkdir app && cd app

WORKDIR /app

COPY package*.json .

RUN npm install --legacy-peer-deps

COPY . .

RUN npm run build

ENTRYPOINT ["npm", "start"]