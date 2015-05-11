'use strict';

require('../../server');
var express = require('express');
var app = express();
var jwt = require('jsonwebtoken');
var config = require('../../config/database');

require('../models/user.model');
var mongoose = require('mongoose');
var User = mongoose.model('User');

exports.auth = function(req, res) {
  User.findOne({username: req.body.username}, function(err, user){
    if(err) {
      res.json(err);
    }

    if(!user) {
      res.json({success: false, message: 'auth failed'});
    }
    else if (user) {
      if (user.password != req.body.password) {
        res.json ({success:false, message: 'Auth failed. wrong password'});
      }
      else {
        var token = jwt.sign(user, config.secret,{
          expiresInMinutes:1440
        });

        res.json({
          success:true,
          message: 'token Created',
          token:token
        });


      }
    }
  })
}

exports.verifyToken = function(req, res, next){
  var token = req.body.token || req.query.token || req.headers['x-access-token'];

  if(token) {
    jwt.verify(token, config.secret, function(err, decoded) {
      if(err) {
        return res.json({success: false, message: 'Failed to auth token'})
      }
      else {
        req.decoded = decoded;
        next();
      }
    });
  }
  else {
    return res.status(403).send({
      success: false,
      message: 'No token provided'
    });
  }
};

exports.getUsers = function(req, res){
  User.find({}).exec(function(err, users){
    if(err){
      return res.json(err);
    }
    return res.json(users);
  });
};

exports.findUser = function(req, res){
  User.find({username : req.params.username}, function(err, user){
    if(err){
      return res.json(err);
    }
    return res.json(user);
  });
};

exports.createUser = function(req, res){
  User.findOne({username: req.body.username}, function(err, user){
    if(user) {
      res.json({
        sucess:false,
        message: 'username taken'
      });
    }
    else {
      User.create(req.body, function(err, user){
        if(err){
          return res.json(err);
        }
        return res.json(user);
      });
    }
  });
};

exports.deleteAll = function(req, res){
  User.remove(function(err, users){
    if(err){
      return res.json(err);
    }
    exports.getUsers(req, res);
  });
};

exports.deleteUser = function(req, res){
  User.remove({username : req.params.username}, function(err, user){
    if(err){
      return res.json(err);
    }
    exports.getUsers(req, res);
  });
};

exports.updateUser = function(req, res){
  User.update({username : req.params.username}, req.body, function(err, user){
    if(err){
      return res.json(err);
    }
    return res.json(user);
  });
};