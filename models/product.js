const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    image: {type:String, required:false },
    name:{type:String, required: true},
    detail:{type:String, required: false},
    price:{type: Number, required:true} ,
    available:{type: Boolean, required: false}
})

module.exports = model('Product', productSchema);