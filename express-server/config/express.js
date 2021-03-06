(function() {
  'use strict';

  const express = require('express');
  const bodyParser = require('body-parser');

  const todoRoutes = require('../todo-list/todo-route');

  const mongoConnection = require('./connection');
  mongoConnection.connect();

  let app = express();

  app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });
  
  app.use(
    bodyParser.urlencoded({
      extended: false
    })
  );

  app.use(bodyParser.json());

  app.use('/todos', todoRoutes);

  module.exports = app;
})();
