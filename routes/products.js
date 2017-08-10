var router = require('express').Router(),
    mongoose = require('mongoose'),
    Post = mongoose.model('Post',require('../models/posts'));


router.route('/')
      .get(function(req, res){
          Post.find({},['name','image'],function(err, data){
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
      })
      .delete(function(req, res){
          Post.findByIdAndRemove(req.params.name,function(err){
              if(err) throw err;
          })
      });


module.exports = router;