const express = require('express');
const knex = require('./knex');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('aok');
});

app.get('/users', (req, res) => {
  knex('users').select()
    .then((users) => {
      res.json(users);
    });
});

app.post('/users', (req, res) => {
  const name = req.body.name;
  knex('users').insert({ name }, '*')
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      res.status(500).send(`There was an error adding the user: ${err}`);
    });
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  /* eslint-disable no-console */
  console.log(`Express server listening on port ${PORT}`);
});
