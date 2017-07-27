FROM node:8.1.2-alpine

RUN npm install -gq knex

RUN mkdir app
WORKDIR app

ADD . .

EXPOSE 8000

CMD ["npm", "run", "dev"]
