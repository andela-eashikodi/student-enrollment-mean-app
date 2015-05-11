'use strict';
var express = require('express');
var router = express.Router();

module.exports = function(app){
  var ctrl = require('../controllers/reg.controller');
  var user = require('../controllers/user.controller');

  router.route('/students')
    .get(user.verifyToken, ctrl.getStudents)
    .post(user.verifyToken, ctrl.createStudent)
    .delete(user.verifyToken, ctrl.deleteAll);

  router.route('/student/:student_id')
    .get(user.verifyToken, ctrl.findStudent)
    .put(user.verifyToken, ctrl.updateStudent)
    .delete(user.verifyToken, ctrl.deleteStudent);

  app.use('/api/v1', router);
};