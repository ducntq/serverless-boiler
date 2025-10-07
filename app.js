const express = require('express');
const bodyParser = require('body-parser');
const usersRoutes = require('./routes/users');

const app = express();

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.use('/users', usersRoutes);

module.exports = app;
