var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var vendorSchema = new Schema({
    name : String,
    category : String,
    description : String,
    image : Array,
});

var vendorProductPicSchema = new Schema({
    field : String,
    productBy: {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Vendor'
    },
    images : [{
        pic : Array,
        productBy: {
            type : mongoose.Schema.Types.ObjectId,
            ref : 'Vendor'
        }
    }]
});

mongoose.model('Vendor', vendorSchema);
mongoose.model('VendorProductPic', vendorProductPicSchema);