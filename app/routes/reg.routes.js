'use strict';
var express = require('express');
var router = express.Router();

module.exports = function(app){
  var ctrl = require('../controllers/reg.controller');

  router.route('/students')
    .get(ctrl.getStudents)
    .post(ctrl.createStudent);

  router.route('/student/:student_id')
    .get(ctrl.findStudent)
    .put(ctrl.updateStudent)
    .delete(ctrl.deleteStudent);

  app.use('/api/v1', router);
};