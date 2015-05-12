'use strict';

var mongoose = require('mongoose');

var regSchema = new mongoose.Schema({
  regnumber: {
    type: Number,
    required: 'enter student registration number',
    unique: 'reg num in use'
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
}, { versionKey: false });
mongoose.model('Student', regSchema);