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