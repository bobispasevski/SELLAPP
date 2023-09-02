const express = require('express');
require('dotenv').config();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const vehiclesRouter = require('./routes/vehicles');
const cors= require("cors");

const DBConnection = require('./Data');
DBConnection;


var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/vehicles', vehiclesRouter);

app.use((err, req, res, next) => {
    if (err.name === 'UnauthorizedError') {
      res.status(401).send("Please Login, sesion expired");
    }
  });

module.exports = app;





