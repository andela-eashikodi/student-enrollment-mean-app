'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var database = require('./config/database');
var bodyParser = require('body-parser');
var port = process.env.PORT || 8080;
mongoose.connect(database.url);

app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded

require('./app/routes')(app);

app.listen(port, function(err){
  if(err){
    console.log(err);
  }
  console.log('Server started on port: ' + port);
});
