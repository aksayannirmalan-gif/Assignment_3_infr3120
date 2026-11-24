const {default: mongoose} = require("mongoose");
let itemModel = mongoose.Schema({
    item:String,
    location:String,
    price:Number
},
{
    Collection:"items"
});
module.exports=mongoose.model('Item',itemModel);