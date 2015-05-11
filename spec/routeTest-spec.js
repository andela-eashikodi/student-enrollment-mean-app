'use strict';

var app = require('../server.js'), 
request = require('supertest')(app),
req = require('request');
var token = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJfaWQiOiI1NTRjYWVhMWQ5ZjUwYmEwMTVhZTg4MWMiLCJmaXJzdG5hbWUiOiJvbnllIiwibGFzdG5hbWUiOiJhc2hpa29kaSIsImVtYWlsIjoiZW1la2EuYXNoaWtvZGlAYW5kZWxhLmNvIiwidXNlcm5hbWUiOiJhc2hpa29kaSIsInBhc3N3b3JkIjoiYXNoaWtvZGkiLCJfX3YiOjB9.sL_rPab9RdaQX_ULMbxiI49DR8oY0e7r3aRk7utJ_yo';

describe("STUDENT_REG route test", function() {
  it("should return error http status when route not found", function(done) {
   request.get('/wrong-route?token='+token)
   .expect(404)
   .end(function(err, res){
     expect(res.error).not.toBe(null);
     done();
   });

  });

  it('should make a GET request and return created http status', function(done){
    request.get('/api/v1/students?token='+token)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
      expect(err).toBe(null);
      done();
    });
    
  });

  it('should make a POST request and successfully create new STUDENT profile', function(done){
    var stdnt = {firstname: 'tee',lastname:'evan',gender:'male',state:'delta',dob:'10-11-1919'};
    request.post('/api/v1/students?token='+token)
    .send(stdnt)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res){
      expect(err).toBe(null);
      done();
    });
     
  });

  it('should not POST incomplete STUDENT registration', function(done){
    var stdnt = {firstname: 'bee'};
    request.post('/api/v1/students?token='+token)
    .send(stdnt)
    .expect(401)
    .end(function(err, res){
      expect(err).not.toBe(null);
      done();
    });
  });
});

describe("USER route test", function() {
  it("should return error http status when route not found", function(done) {
   request.get('/?token='+token)
   .expect(404)
   .end(function(err, res){
     expect(res.error).not.toBe(null);
     done();
   });
     
  });

  it('should make a GET request and return created http status', function(done){
    request.get('/api/v1/users?token='+token)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
      expect(err).toBe(null);
      done();
    });
    
  });

  it('should make a POST request and successfully create new USER profile', function(done){
    var usr = {firstname: 'ted',lastname:'evan',email: 'aet@gmail.com',username:'ashikodi',password:'andela'};
    request.post('/api/v1/users?token='+token)
    .send(usr)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res){
      expect(err).toBe(null);
      done();
    });
     
  });

  it('should not POST incomplete USER registration', function(done){
    var usr = {firstname: 'ted'};
    request.post('/api/v1/users?token='+token)
    .send(usr)
    .expect(401)
    .end(function(err, res){
      expect(err).not.toBe(null);
      done();
    });
  });

});