'use strict';

var express = require('express');
var app = express();

var database = require('./config/database');
var bodyParser = require('body-parser');

var mongoose = require('mongoose');
mongoose.connect(database.url);

app.use(bodyParser.urlencoded({extended: false}));

require('./app/routes/user.routes')(app);
require('./app/routes/reg.routes')(app);

var port = process.env.PORT || 8080;

app.listen(port, function(err){
  if(err){
    console.log(err);
  }
  console.log('Server started on port: ' + port);
});

module.exports = app;