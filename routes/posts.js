var router = require('express').Router(),
	multer = require('multer'),
	upload = multer({dest : './uploads/'}),
	mongoose = require('mongoose');

router.route('/posts')
	  .post(function(req, res){
		res.send({message: 'post something'});
	  });

module.exports = router;