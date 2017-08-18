var router = require('express').Router(),
    mongoose = require('mongoose'),
    fs = require('fs'),
    multer = require('multer'),
    upload = multer({dest : './uploads/'}),
    Product = mongoose.model('Product');


router.route('/')
      .get(function(req, res){
            res.send({message:'hello'});
          });

router.route('/create')
      .get(function(req, res){
          res.send({message:'hello'});
      })
      .post(upload.any(),function(req, res, next){
         console.log(req.body);
         console.log(req.files);
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