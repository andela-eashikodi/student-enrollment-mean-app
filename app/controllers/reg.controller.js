'use strict';

require('../models/student.model');
var mongoose = require('mongoose');
var Student = mongoose.model('Student');

exports.getStudents = function(req, res){
  Student.find({}).exec(function(err, students){
    if(err){
      return res.json(err);
    }
    return res.json(students);
  });
};

exports.findStudent = function(req, res){
  Student.find({regnumber : req.params.regnumber}, function(err, student){
    if(err){
      return res.json(err);
    }
    return res.json(student);
  });
};

exports.createStudent = function(req, res){
  Student.findOne({regnumber: req.params.regnumber}, function(err, student){
    if(student){
      res.json({
        success: false,
        message: "reg number taken"
      });
    }
    else {
      Student.create(req.body, function(err, student){
        if(err){
          return res.json(err);
        }
        return res.json(student);
      });
    }
  });
};

exports.deleteAll = function(req, res){
  Student.remove(function(err, student){
    if(err){
      return res.json(err);
    }
    exports.getStudents(req, res);
  });
};

exports.deleteStudent = function(req, res){
  Student.remove({regnumber : req.params.regnumber}, function(err, student){
    if(err){
      return res.json(err);
    }
    res.json({
      success: true,
      message: 'student deleted'
    });
  });
};

exports.updateStudent = function(req, res){
  Student.update({regnumber : req.params.regnumber}, req.body, function(err, student){
    if(err){
      return res.json(err);
    }
    exports.findStudent(req, res);
  });
};