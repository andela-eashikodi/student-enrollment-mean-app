'use strict';

var mongoose = require('mongoose');

var regSchema = new mongoose.Schema({
  firstname:String,
  lastname:String,
  gender: String,
  state:String,
  dob:Date
});
mongoose.model('Student', regSchema);