FROM node:lts-alpine
RUN npm install -g http-server

WORKDIR /app

COPY . .

WORKDIR /app/carpark_lots

RUN npm install

RUN npm run build

CMD ["npm", "run", "serve"]