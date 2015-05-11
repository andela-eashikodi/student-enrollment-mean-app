'use strict';
var express = require('express');
var router = express.Router();

module.exports = function(app){
  var ctrl = require('../controllers/user.controller');

  router.route('/authenticate')
    .post(ctrl.auth);

  router.route('/users')
    .get(ctrl.getUsers)
    .post(ctrl.createUser)
    .delete(ctrl.deleteAll);

  router.route('/user/:user_id')
    .get(ctrl.findUser)
    .put(ctrl.updateUser)
    .delete(ctrl.deleteUser);

  app.use('/api/v1', router);
};