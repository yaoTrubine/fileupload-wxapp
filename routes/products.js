var router = require('express').Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post',require('../models/posts'));


router.route('/')
      .get(function(req, res){
          Post.find({},['name'],function(err, data){
              if(err) throw err;
              res.json(data);
          })
      });
router.route('/:name')
      .get(function(req, res){
          Post.find({'name':req.params.name},[],function(err, data){
              if(err) throw err;
              res.json(data);
              
          })
      });


module.exports = router;