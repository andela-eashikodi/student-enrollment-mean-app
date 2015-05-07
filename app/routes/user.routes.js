module.exports = function(app){
  var controller = require('../controllers/user.controller');
  //routes
  app.get('/api/v1/users', controller.getUsers);
  app.get('/api/v1/user/:user_id', controller.findUser);
  app.post('/api/v1/user', controller.createUser);
  app.delete('/api/v1/user/:user_id', controller.deleteUser);
  app.put('/api/v1/user/:user_id', controller.updateUser);
};