const express = require('express');

// express app initialization
const app = express();
app.use(express.json());

//application routes

// Default error handler
function errorHandler(err, req, res, next) {
  if (res.headersSent) {
    return next(err);
  }
  res.status(500).json({ error: err });
}

app.listen(3000, () => console.log('App listening at port 3000'));
