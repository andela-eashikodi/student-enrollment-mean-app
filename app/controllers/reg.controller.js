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
  Student.find({_id : req.params.student_id}, function(err, student){
    if(err){
      return res.json(err);
    }
    return res.json(student);
  });
};

exports.createStudent = function(req, res){
  Student.findOne({regnumber: req.body.regnumber}, function(err, student){
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
  Student.remove({_id : req.params.student_id}, function(err, student){
    if(err){
      return res.json(err);
    }
    exports.getStudents(req, res);
  });
};

exports.updateStudent = function(req, res){
  Student.update({_id : req.params.student_id}, req.body, function(err, student){
    if(err){
      return res.json(err);
    }
    exports.getStudents(req, res);
  });
};