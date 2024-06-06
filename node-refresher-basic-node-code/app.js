const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));

app.post('/user', (req, res, next) => {
  if (req.body) {
    return res.send('<h1>User: ' + req.body.username + '</h1>');
  }
});

app.get('/', (req, res, next) => {

  res.send(
    `<form action="/user" method="Post">
      <input type="text" name="username">
      <button type="submit">Create User</button>
      </input>
      </form>`
  );
});

app.listen(5000);