'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();

var morgan = require('morgan');

var config = require('./config/config');
var bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');
app.use(morgan('dev'));

var mongoose = require('mongoose');
mongoose.connect(config[process.env.NODE_ENV]['url']);

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.send('welcome to student enrollment system');
});

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