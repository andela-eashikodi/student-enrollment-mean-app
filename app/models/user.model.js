var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
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