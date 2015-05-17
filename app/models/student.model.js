'use strict';

var mongoose = require('mongoose');

var regSchema = new mongoose.Schema({
  regnumber: {
    type: Number,
    required: 'enter student registration number',
    index: {unique: true}
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
  phone: {
    type: Number,
    required: true
  },
  email: {
    type: String,
    default: 'no email'
  },
  address : {
    type: String
  },
  state: {
    type: String,
    required : 'enter state of origin'
  },
  dob: {
    type: Date,
    required : 'enter date of birth'
  },
  created_at: Date,

  updated_at: Date

}, { versionKey: false });

regSchema.pre('save', function(next) {
  
  var currentDate = new Date();
  
  this.updated_at = currentDate;

  if (!this.created_at){
    this.created_at = currentDate;
  }

  next();
});


mongoose.model('Student', regSchema);