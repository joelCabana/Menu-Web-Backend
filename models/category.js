const {Schema, model} = require('mongoose');
const product = require('./product');

const categorySchema = new Schema({
    name:{type:String, require: true},
    available: {type: Boolean, require: false},
    product: [{type: product.Schema, require: false}]
})

module.exports = model('Category',categorySchema);