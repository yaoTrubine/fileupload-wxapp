var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var companySchema = new Schema({
  title : String,
  description : String,
  images : Array,
});

module.exports = companySchema;