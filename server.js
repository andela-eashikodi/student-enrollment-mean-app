'use strict';

var express = require('express');
var app = express();
var mongoose = require('mongoose');
var database = require('./config/database');
var bodyParser = require('body-parser');

//databsae conn
mongoose.connect(database.url);

app.use(bodyParser.urlencoded({extended: false})); // parse application/x-www-form-urlencoded
// app.use(bodyParser.json()); parse application/json

require('./app/routes')(app);

app.listen(3000, function(err){
  if(err){
    console.log(err);
  }
  console.log('Server started on port 3000');
});
