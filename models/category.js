const {Schema, model} = require('mongoose');
const product = require('./product');

const categorySchema = new Schema({
    name:{type:String, required: true},
    available: {type: Boolean, required: false},
    product: [{type: product.schema, required: false}]
})

module.exports = model('Category',categorySchema);