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
  title : String,
  description : String,
  images : Array
});

mongoose.model('Product', companySchema);
mongoose.model('Company', productSchema);
