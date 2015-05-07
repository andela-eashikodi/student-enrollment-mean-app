var app = require('../server.js'), 
request = require('supertest')(app),
req = require('request');

describe("reg route test", function() {
  it("should return error http status when route not found", function(done) {
   request.get('/')
   .expect(404)
   .end(function(err, res){
     if(err){
       return done(err);
     }
     done();
   });  
  });

  it('should make a GET request and return created http status', function(done){
    request.get('/api/v1/students')
    .expect(201)
    .end(function(err,res){
      if(err){
        return done(err);
      }
      done();
    });
    done();
  });
});

describe("user route test", function() {
  it("should return error http status when route not found", function(done) {
   request.get('/')
   .expect(404)
   .end(function(err, res){
     if(err){
       return done(err);
     }
     done();
   });  
  });

  it('should make a GET request and return created http status', function(done){
    request.get('/api/v1/users')
    .expect(201)
    .end(function(err,res){
      if(err){
        return done(err);
      }
      done();
    });
    done();
  });
});