'use strict';
var express = require('express');
var router = express.Router();

module.exports = function(app){
  var ctrl = require('../controllers/user.controller');

  router.route('/authenticate')
    .post(ctrl.auth);

  router.route('/users')
    .get(ctrl.verifyToken, ctrl.getUsers)
    .post(ctrl.createUser)
    .delete(ctrl.verifyToken, ctrl.deleteAll);

  router.route('/user/:username')
    .get(ctrl.verifyToken, ctrl.findUser)
    .put(ctrl.verifyToken, ctrl.updateUser)
    .delete(ctrl.verifyToken, ctrl.deleteUser);

  app.use('/api/v1', router);
};