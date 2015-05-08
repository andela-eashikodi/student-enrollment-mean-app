'use strict';

module.exports = function(app){
  var ctrl = require('../controllers/user.controller');
  
  app.get('/api/v1/users', ctrl.getUsers);
  app.get('/api/v1/user/:user_id', ctrl.findUser);
  app.post('/api/v1/user', ctrl.createUser);
  app.delete('/api/v1/user/:user_id', ctrl.deleteUser);
  app.put('/api/v1/user/:user_id', ctrl.updateUser);
};