const {Schema, model} = require('mongoose');
const category = require('./category');

const menuSchema = new Schema({
     name:{type: String, required: false},
     description:{type:String, required:false},
     category:[{type: category.schema, required: false }]
})

module.exports = model('Menu', menuSchema);


