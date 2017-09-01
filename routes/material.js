var router = require('express').Router();
var multer = require('multer'),
    upload = multer({dest : './uploads/'}),
    mongoose = require('mongoose'),
    Vendor = mongoose.model('Vendor'),
    fs = require('fs');


router.route('/create')
      .post(upload.any(),function(req,res){
          console.log(req.files);
          console.log(req.body);
          if(req.files){
              req.files.forEach(function(file){
                fs.rename(file.path, 'public/images/vendors/'+file.originalname, function(err){
                    if(err) throw err;
                });
              });
              let fileName = [];
              req.files.map(function(file){
                  fileName.push(file.originalname);
                  return fileName;
              });
              var newVendor = new Vendor({
                name : req.body.title,
                category : req.body.category,
                description : req.body.description,
                image : fileName
              });
              newVendor.save(function(err, data){
                    if(err) throw err;
                    res.status(200).json(data);
                })
          }
      });

router.route('/')
      .get(function(req, res){
        Vendor.find({}).exec(function(err,result){
            if(err) throw err;
            res.json(result);
        })
      });

router.route('/:id')
      .get(function(req,res){
          Vendor.findById(req.params.id).exec(function(err, result){
              if(err) throw err;
              res.json(result);
          })
      })

module.exports = router;