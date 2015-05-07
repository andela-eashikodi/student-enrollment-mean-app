var User = require('../models/user.model');

exports.getUsers = function(req, res){
  User.find({}).exec(function(err, Users){
    if(err){
      return res.json(err);
    }
    return res.status(201).json(Users);
  });
};

exports.findUser = function(req, res){
  User.find({_id : req.params.User_id}, function(err, User){
    if(err){
      return res.json(err);
    }
    return res.json(User);
  });
};

exports.createUser = function(req, res){
  User.create(req.body, function(err, User){
    if(err){
      return res.json(err);
    }
    return res.json(User);
  });
};

exports.deleteUser = function(req, res){
  User.remove({_id : req.params.User_id}, function(err, User){
    if(err){
      return res.json(err);
    }
    exports.getUsers(req, res);
  });
};

exports.updateUser = function(req, res){
  User.update({_id : req.params.User_id}, req.body, function(err, User){
    if(err){
      return res.json(err);
    }
    return res.json(User);
  });
};