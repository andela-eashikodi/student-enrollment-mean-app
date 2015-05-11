'use strict';

require('../app/models/student.model');
require('../app/models/user.model');
var request = require("supertest"),
req = require("request");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase');

var studentModel = mongoose.model('Student');
var userModel = mongoose.model('User');
var student, user;

describe('Student Model', function() {

  beforeEach(function(done) {
    student = new studentModel();
    done();
  });

  it('should throw an error if any field empty', function(done){
    student.regnumber = '';
    student.save(function(err){
      expect(err).not.toBe(null);
      done();
    });
  });

  it('should succesful accept entry', function(done){
    student.regnumber = '0002';
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

describe('User Model', function(done){
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

  it('should accept valid entry', function(done){
    user.firstname = 'adam';
    user.lastname = 'johnson';
    user.email = 'adj@yahoo.com';
    user.username = 'adam';
    user.password = 'passcode';
    user.save(function(err){
      expect(err).toBe(null);
      done();
    });
  });

});


