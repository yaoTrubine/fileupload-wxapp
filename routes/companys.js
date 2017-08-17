var router = require('express').Router(),
		fs = require('fs'),
		multer = require('multer'),
		upload = multer({dest : './uploads/'}),
		mongoose = require('mongoose');


router.route('/')
	  .get(function(req, res){
		  res.send({message: 'company'});
	  });

router.route('/create')
	  .post(upload.array('images'),function(req, res){
			// console.log(req.files);
			var filename = [];
			for(var i=0;i<req.files.length;i++){
				filename.push(req.files[i].originalname);
			}
			req.files.forEach(function(file){
				fs.rename(file.path, 'public/images/' + file.originalname, function(err){
					if(err) throw err;
					
				})
			});

			var newCompany = new Company({
						title : req.body.title,
						description : req.body.description,
						images : filename
					});

			newCompany.save(function(err,data){
					if(err) throw err;
					res.json(data);
				});
	  });

router.route('/:id')
	  .get(function(req, res){
		  res.send(req.params.id);
	  });


module.exports = router;
