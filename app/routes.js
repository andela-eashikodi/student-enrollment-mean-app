module.exports = function(app){
  var controller = require('../controllers/controller');
  //routes
  app.get('/api/v1/students', controller.getStudents);
  app.post('/api/v1/student/new', controller.createStudent);
  app.delete('/api/v1/student/:student_id', controller.deleteStudent);
  app.put('/api/v1/student/:student_id', controller.updateStudent);
};