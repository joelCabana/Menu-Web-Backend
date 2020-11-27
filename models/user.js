const {Schema, model} = require('mongoose');

const userSchema = new Schema({
        company_name:{type: String, require: true},
        email:{type:String, require: true},
        password:{type:String, require: true}    
})

module.exports = model('UserSchema',userSchema);