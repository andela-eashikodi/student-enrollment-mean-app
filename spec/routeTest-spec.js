'use strict';

var app = require('../server.js'), 
request = require('supertest')(app),
req = require('request');

describe("STUDENT_REG route test", function() {
  it("should return error http status when route not found", function(done) {
   request.get('/wrong-route')
   .expect(404)
   .end(function(err, res){
     expect(res.error).not.toBe(null);
     done();
   });

  });

  it('should make a GET request and return created http status', function(done){
    request.get('/api/v1/students')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
      expect(err).toBe(null);
      done();
    });
    
  });

  it('should make a POST request and successfully create new STUDENT profile', function(done){
    var stdnt = {firstname: 'tee',lastname:'evan',gender:'male',state:'delta',dob:'10-11-1919'};
    request.post('/api/v1/students')
    .send(stdnt)
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err, res){
      expect({success:true});
      expect(err).toBe(null);
      done();
    });
     
  });

  it('should not POST incomplete STUDENT registration', function(done){
    var stdnt = {firstname: 'bee'};
    request.post('/api/v1/students')
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
   request.get('/')
   .expect(404)
   .end(function(err, res){
     expect(res.error).not.toBe(null);
     done();
   });
     
  });

  it('should make a GET request and return created http status', function(done){
    request.get('/api/v1/users')
    .expect(200)
    .expect('Content-Type', /json/)
    .end(function(err,res){
      expect(err).toBe(null);
      done();
    });
    
  });

  it('should make a POST request and successfully create new USER profile', function(done){
    var usr = {firstname: 'ted',lastname:'evan',email: 'aet@gmail.com',username:'ashikodi',password:'andela'};
    request.post('/api/v1/users')
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
    request.post('/api/v1/users')
    .send(usr)
    .expect(401)
    .end(function(err, res){
      expect(err).not.toBe(null);
      done();
    });
  });

});