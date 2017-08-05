var router = require('express').Router(),
	multer = require('multer'),
	fs = require('fs'),
	upload = multer({dest : './uploads/'}),
	mongoose = require('mongoose'),
	Post = mongoose.model('Post',require('../models/posts'));

router.route('/')
	  .post(upload.any(),function(req, res){
		if(req.files){
			req.files.forEach(function(file){
				var filename = (new Date).valueOf() + '-' + file.originalname;
				fs.rename(file.path, 'public/images/'+filename, function(err){
					if(err) throw err;
					var newPost = new Post({
						name : req.body.name,
						image : filename
					});
					newPost.save(function(err, data){
						if(err) throw err;
						res.json(data);
					})
				})
			})
		}
	  });

module.exports = router;