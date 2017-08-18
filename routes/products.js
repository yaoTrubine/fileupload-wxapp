var router = require('express').Router(),
    mongoose = require('mongoose'),
    fs = require('fs'),
    multer = require('multer'),
    upload = multer({dest : './uploads/'}),
    Product = mongoose.model('Product'),
    Company = mongoose.model('Company');


router.route('/')
      .get(function(req, res){
        //   Product.findOne({title: 'asd'}).populate('_creator').exec(function(err, result){
        //     res.send(result._creator.title);
        //   })
        });

// 创建商品
router.route('/create')
      .get(function(req, res){
          res.send({message:'rua'});
      })
      .post(upload.array('images'),function(req, res, next){
        //  console.log(req.body);
        var filename = [];
        for (var i = 0; i < req.files.length; i++) {
            filename.push(req.files[i].originalname);
        }
        // console.log(filename);
         req.files.forEach(function(file){
             fs.rename(file.path, 'public/images/products/'+file.originalname,function(err){
                 if(err) throw err;
             })
         });
         var newProduct = new Product({
            _creator : req.body._creator,
            title : req.body.title,
            description : req.body.description,
            images : filename
        });
        newProduct.save(function(err, data){
            if(err) throw err;
            res.json(data);
        });
      });

//单个商品查找
router.route('/:_creator')
      .get(function(req, res){
          Product.find({'_creator':req.params._creator},function(err,data){
              if(err) throw err;
              res.json(data);
          })
      });
router.route('/:_creator/:id')
      .get(function(req, res){
          Product.find({'_creator':req.params._creator,'_id':req.params.id},function(err, data){
              if(err) throw err;
              res.json(data);
          })
      })
      .delete(function(req, res){
          Product.findByIdAndRemove(req.params.name,function(err){
              if(err) throw err;
          })
      });



module.exports = router;
