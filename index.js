const express = require('express');
const mongoose = require('mongoose');
const todoHandler = require('./routeHandler/todoHandler');

// express app initialization
const app = express();
app.use(express.json());

// database connection with mongoose
mongoose
  .connect('mongodb://localhost/todos')
  .then(() => console.log('Database connection successful'))
  .catch((err) => console.log(err));

//application routes
app.use('/todo', todoHandler);

// Default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(3000, () => console.log('App listening at port 3000'));
