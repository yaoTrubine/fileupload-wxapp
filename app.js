var express = require('express'),
	path = require('path'),
	routes = require('./routes'),
	mongoose =require('mongoose'),
	app = express();
	mongoose.connect('mongodb://localhost/wxapp');

app.use(function(req, res, next) { //allow cross origin requests
    res.setHeader("Access-Control-Allow-Methods", "POST, PUT, OPTIONS, DELETE, GET");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
});

app.set('views', path.join(__dirname, '/angular'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/public')));


routes(app);
app.listen(3000, function(){
	console.log('Listening at 3000');
});
