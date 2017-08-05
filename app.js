var express = require('express'),
	path = require('path'),
	routes = require('./routes'),
	app = express();


app.set('views', path.join(__dirname, '/angular'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, '/public')));

routes(app);
app.listen(3000, function(){
	console.log('Listening at 3000');
});
