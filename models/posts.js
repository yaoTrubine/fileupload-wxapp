var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var postSchema = new Schema({
	title : String,
	image : String
});

module.exports = postSchema;
