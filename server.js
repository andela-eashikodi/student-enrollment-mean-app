'use strict';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express');
var app = express();

var morgan = require('morgan');

var database = require('./config/database');
var bodyParser = require('body-parser');

var jwt = require('jsonwebtoken');
app.use(morgan('dev'));

var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
  clientID: '425963866860-mgn5kufk9k0g8dom53si5igeqsnkr8cc.apps.googleusercontent.com',
  clientSecret: 'JS0S5sBz4hjzhDz-oHB2TLtg',
  callbackURL: 'http://localhost:3030/users',
  passReqToCallback: true
},
function(req, accessToken, refreshToken, profile, done){
  User.findOrCreate({googleId: profile.id}, function(err, user){
    return done(err, user);
  });
}
));

var mongoose = require('mongoose');
mongoose.connect(process.env.MONGOLAB_URI || database.url);

app.use(bodyParser.urlencoded({extended: false}));

app.get('/', function(req, res){
  res.send('welcome to student enrollment system');
});

app.get('/auth/google', passport.authenticate('google', {
  scope: [
  'https://www.googleapis.com/auth/userinfo.profile'
  ]
}));

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