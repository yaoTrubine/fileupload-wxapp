var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var vendorSchema = new Schema({
    name : String,
    category : String,
    description : String,
    image : Array,
});

var venderProductSchema = new Schema({
    name : String,
    images : Object
});

mongoose.model('Vendor', vendorSchema);