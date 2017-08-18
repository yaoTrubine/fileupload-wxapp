var router = require('express').Router(),
	fs = require('fs'),
	multer = require('multer'),
	upload = multer({dest : './uploads/'}),
	mongoose = require('mongoose'),
	Company = mongoose.model('Company');


router.route('/')
	  .get(function(req, res){
			Company.find().exec(function(err,result){
				res.json(result);
			});
	  });

router.route('/create')
	  .post(upload.any(),function(req, res, next){
		  	
			req.files.forEach(function(file){
				var filename = file.originalname;	
				// console.log(filename);
				fs.rename(file.path, 'public/images/' + filename, function(err){
					if(err) throw err;
					var newCompany = new Company({
						_id : req.body._id,
						title : req.body.title,
						description : req.body.description,
						images : filename
					});

					newCompany.save(function(err,data){
						if(err) throw err;
						res.json(data);
					});
				})
			});

			
	  });

router.route('/:id')
	  .get(function(req, res){
			Company.findById({'_id':req.params.id}, function(err, result){
				if(err) throw err;
				res.json(result);
			})
			// Company.findById({'_id':req.params.id}).populate('products').exec(function(err, result){
			// 	if(err) throw err;
			// 	res.send(result);
			// })
	  });


module.exports = router;
