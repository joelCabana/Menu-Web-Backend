const {Schema, model} = require('mongoose');

const productSchema = new Schema({
    image: {type:String, require:false },
    name:{type:String, require: true},
    detail:{type:String, require: false},
    price:{type: Number, require:true} ,
    available:{type: Boolean, require: false}
})

module.exports = model('Product', productSchema);