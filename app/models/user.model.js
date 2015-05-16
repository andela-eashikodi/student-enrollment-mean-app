'use strict';

var mongoose = require('mongoose');
var bcrypt = require('bcrypt-nodejs');

var userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required : 'Enter firstname'
  },
  lastname: {
    type: String,
    required: 'Enter Lastname'
  },
  email: {
    type: String,
    required: 'enter e-mail address'
  },
  username:{
    type: String,
    required: 'enter username',
    unique: 'username taken'
  },
  password: {
    type: String,
    required : 'enter password'
  },

  created_at: Date,

  updated_at: Date
  
}, { versionKey: false });

userSchema.pre('save', function(next){
  var user = this;

  var currentDate = new Date();
  
  user.updated_at = currentDate;

  if (!user.created_at){
    user.created_at = currentDate;
  }

  if(!user.isModified('password')){
    return next();
  }
  bcrypt.hash(user.password, null, null, function(err, hash){
    if (err){
      return next(err);
    }
    user.password = hash;
    next();
  });
});

userSchema.methods.comparePassword = function(password){
  var user = this;
  return bcrypt.compareSync(password, user.password);
};

mongoose.model('User', userSchema);