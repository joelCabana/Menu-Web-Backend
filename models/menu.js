const {Schema, model} = require('mongoose');
const category = require('./category');

const menuSchema =  new Schema({
     name:{type: String, require: false},
     description:{type:String, require:false},
     category:[{type: category.Schema, require: false}]
})

module.exports = model('MenuSchema', menuSchema);


