var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var postSchema = new Schema({
	name : String,
	image : String
});

module.exports = postSchema;
