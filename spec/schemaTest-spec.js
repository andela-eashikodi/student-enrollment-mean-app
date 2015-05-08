'use strict';

require('../app/models/student.model');
require('../app/models/user.model');
var request = require("supertest"),
req = require("request");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase');

var studentModel = mongoose.model('Student'), student;
var userModel = mongoose.model('User'), student;

describe('Student Model', function() {

  beforeEach(function(done) {
    student = new studentModel();
    done();
  });

  it('should throw an error if any field empty', function(done){
    student.title = '';
    student.save(function(err){
      expect(err).not.toBe(null);
      done();
    });
  });

  it('should succesful accept entry', function(done){
    student.title = 'mr';
    student.firstname = 'evan';
    student.lastname = 'appeal';
    student.gender = 'female';
    student.state = 'delta';
    student.dob = '02/12/1922';
    student.save(function(err){
      expect(err).toBe(null);
      done();
    });
  });
});

describe('User Model', function(){
  beforeEach(function(done){
    user = new userModel();
    done();
  });

  it('should not register invalid entry', function(done){
    user.username = '';
    user.save(function(err){
      expect(err).not.toBe(null);
      done();
    });
  });

  it('should accept valid entry', function(){
    user.username = 'adam';
    user.password = 'passcode';
    user.save(function(err){
      expect(err).toBe(null);
      done();
    });
  });

});


