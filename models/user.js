const {Schema, model} = require('mongoose');
const menu = require('./menu');

const userSchema = new Schema({
        company_name:{type: String, required: true},
        email:{type: String, required: true},
        password:{type: String, required: true},
        menu: [{type: menu.schema, required:false}]
})

module.exports = model('User',userSchema);