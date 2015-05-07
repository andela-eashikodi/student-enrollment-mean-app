require('../app/models/student.model');
var request = require("supertest"),
req = require("request");
// app = require("../server");

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/mydatabase');

var studentModel = mongoose.model('Student'), student;

describe('Student Model', function() {

  beforeEach(function(done) {
    student = new studentModel();
    done();
  });

  afterEach(function(done){
    mongoose.connection.close();
    done();
  });

  it('should throw an error if any field empty', function(done){
    student.title = '';
    student.save(function(err){
      expect(err).not.toBe(null);
      done();
    });
  });

  it('should succesful accept entry', function(){
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

/*
var app = require("../../server"),
    request = require("supertest"),
    jwt = require("jsonwebtoken"),
    config = require("../../config/config"),
    req = require("request");

*/