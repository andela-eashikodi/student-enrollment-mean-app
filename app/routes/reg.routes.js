'use strict';

module.exports = function(app){
  var controller = require('../controllers/reg.controller');

  app.get('/api/v1/students', controller.getStudents);
  app.get('/api/v1/student/:student_id', controller.findStudent);
  app.post('/api/v1/student', controller.createStudent);
  app.delete('/api/v1/student/:student_id', controller.deleteStudent);
  app.put('/api/v1/student/:student_id', controller.updateStudent);
};