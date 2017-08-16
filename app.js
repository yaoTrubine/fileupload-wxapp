var express = require('express'),
	path = require('path'),
	routes = require('./routes'),
	mongoose =require('mongoose'),
	app = express(),
	admin = express();
	mongoose.connect('mongodb://localhost/wxapp');

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});



app.set('views', path.join(__dirname, '/angular'));
app.use(express.static(path.join(__dirname, '/public')));
app.use(express.static(path.join(__dirname, '/angular')));

app.get('/admin', function(req, res){
	res.render('admin/index');
});

app.use('/admin',admin);
routes(app);
app.listen(3000, function(){
	console.log('Listening at 3000');
});
