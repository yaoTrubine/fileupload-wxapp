var router = require('express').Router();
var multer = require('multer'),
    upload = multer({dest : './uploads/'}),
    mongoose = require('mongoose'),
    Vendor = mongoose.model('Vendor'),
    fs = require('fs'),
    VendorProductPic = mongoose.model('VendorProductPic');


router.route('/create')
      .post(upload.any(),function(req,res){
         let logoFile = [];
          req.files.forEach(function(file){
            if(file.fieldname === 'vendor'){
              logoFile.push(file.originalname);    
             }
          })
              
          
            var newVendor = new Vendor({
                name : req.body.title,
                category : req.body.category,
                description : req.body.description,
                image : logoFile
            });
            newVendor.save();

          if(req.files){
                
              req.files.forEach(function(file){
                fs.rename(file.path, 'public/images/vendors/'+file.originalname, function(err){
                    if(err) throw err;
                });
                if(file.fieldname === 'vendor'){
                    logoFile.push(file.originalname);
                }
                switch (file.fieldname) {
                    case 'firstCategory':
                          var newVendorProductPic_1 = new VendorProductPic({
                              field : file.fieldname,
                              productBy : newVendor._id,
                              images : [{
                                  pic: file.originalname,
                                  productBy: newVendor._id
                              }]
                          });
                          newVendorProductPic_1.save();
                        break;
                    case 'secondCategory':
                          var newVendorProductPic_2 = new VendorProductPic({
                              field : file.fieldname,
                              productBy : newVendor._id,
                              images : [{
                                  pic: file.originalname,
                                  productBy: newVendor._id
                              }]
                          });
                          newVendorProductPic_2.save();
                        break;
                    case 'thirdCategory':
                          var newVendorProductPic_3 = new VendorProductPic({
                              field : file.fieldname,
                              productBy : newVendor._id,
                              images : [{
                                  pic: file.originalname,
                                  productBy: newVendor._id
                                  }]
                              });
                              newVendorProductPic_3.save();
                          break;
                    case 'fourthCategory':
                          var newVendorProductPic_4 = new VendorProductPic({
                              field : file.fieldname,
                              productBy : newVendor._id,
                              images : [{
                                  pic: file.originalname,
                                  productBy: newVendor._id
                                  }]
                              });
                              newVendorProductPic_4.save();
                          break;
                    case 'fifthCategory':
                          var newVendorProductPic_5 = new VendorProductPic({
                              field : file.fieldname,
                              productBy : newVendor._id,
                              images : [{
                                  pic: file.originalname,
                                  productBy: newVendor._id
                                  }]
                              });
                              newVendorProductPic_5.save();
                          break;
                    case 'sixthCategory':
                          var newVendorProductPic_6 = new VendorProductPic({
                              field : file.fieldname,
                              productBy : newVendor._id,
                              images : [{
                                  pic: file.originalname,
                                  productBy: newVendor._id
                                  }]
                              });
                              newVendorProductPic_6.save();
                          break;
                    default:
                        break;
                }
              });
              
          }
      });


router.route('/')
      .get(function(req, res){
        Vendor.find({}).exec(function(err,result){
            if(err) throw err;
            res.json(result);
        })
      });

router.route('/:name')
      .get(function(req, res){
          Vendor.find({name:req.params.name}).exec(function(err, result){
              res.json(result);
          })
      })
      .delete(function(req, res){
        Vendor.findByIdAndRemove(req.params.name,function(err){
            if(err) throw err;
        })
      });
router.route('/:name/:productby')
      .get(function(req,res){
        VendorProductPic.find({productBy:req.params.productby}).exec(function(err, result){
              if(err) throw err;
              res.json(result);
          })
      })
router.route('/:name/:productby/:field')
      .get(function(req, res){
          VendorProductPic.find({productBy:req.params.productby, field:req.params.field}).select('-_id -field -productBy').exec(function(err, result){
            if(err) throw err;
            res.json(result);
          })
      })
module.exports = router;