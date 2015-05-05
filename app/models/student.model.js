// var Blog = mongoose.model('Blog');
var mongoose = require('mongoose');

var regSchema = new mongoose.Schema({
  title:{
    type: String,
    required: 'title must be present'
  },
  firstname: {
    type: String,
    required : 'enter content'
  },
  lastname: {
    type: String,
    required : 'enter content'
  },
  state: {
    type: String,
    required : 'enter state of origin'
  },
  dob: {
    type: String,
    required : 'enter date of birth'
  }
});
module.exports = mongoose.model('Student', regSchema);

/*
var blogSchema = new mongoose.Schema({
  title:{
    type: String,
    required: 'title must be present'
  },
  content: {
    type: String,
    required : 'enter content'
  },
  created: {
    type: Date,
    default: Date.now()
  }
});
*/