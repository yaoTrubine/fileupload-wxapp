module.exports = function(app){
	app.get('/',function(req, res){
		res.render('index');
	});
	app.use('/posts', require('./posts'));
	app.use('/products', require('./products'));
	app.use('/companys', require('./companys'));
	app.use('/material', require('./material'));
};
