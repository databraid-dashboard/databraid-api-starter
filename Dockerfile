FROM node:8.1.2-alpine

RUN npm install -gq knex

RUN mkdir app
WORKDIR app

ADD package.json .
RUN npm install -q

ADD . .

EXPOSE 8000

CMD ["npm", "start"]
