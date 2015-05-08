'use strict';

var mongoose = require('mongoose');

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
    required: 'enter username'
  },
  password: {
    type: String,
    required : 'enter password'
  }
});
module.exports = mongoose.model('User', userSchema);