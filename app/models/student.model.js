'use strict';

var mongoose = require('mongoose');

var regSchema = new mongoose.Schema({
  title:{
    type: String,
    required: 'title must be present'
  },
  firstname: {
    type: String,
    required : 'enter firstname'
  },
  lastname: {
    type: String,
    required : 'enter lastname'
  },
  gender: {
    type: String,
    required: 'Enter Gender'
  },
  state: {
    type: String,
    required : 'enter state of origin'
  },
  dob: {
    type: Date,
    required : 'enter date of birth'
  }
});
module.exports = mongoose.model('Student', regSchema);