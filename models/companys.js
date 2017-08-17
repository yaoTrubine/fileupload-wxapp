var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
var companySchema = new Schema({
  _id : Number,
  title : String,
  description : String, //公司简介
  images : String,
  products : [{type: Schema.Types.ObjectId, ref: 'Product'}]
});


var productSchema = new Schema({
  _creator : {type: Number, ref: 'Company'},
  description : String,
});

var Product = mongoose.model('Product', companySchema);
var Company = mongoose.model('Company', productSchema);
