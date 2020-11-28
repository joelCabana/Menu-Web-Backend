const userCtrl = {};
const User = require('../models/user');


userCtrl.getUsers = async(req,res)=>{
    const users = await User.find();
    res.json(users);
}

userCtrl.getUser = async (req,res)=>{
    const user = await User.findById(req.params.id);
    res.send(user);
}

userCtrl.createUser = async (req,res)=>{
 const newUser = new User(req.body);
 await newUser.save();
 res.send({message: 'User Created'});
}

userCtrl.deleteUser = async (req,res)=>{
const user = await User.findByIdAndDelete(req.params.id);
res.send({message:'User Deleted'});
}

userCtrl.updateUser = async(req,res)=>{
  await User.findByIdAndUpdate(req.params.id, req.body);
  res.send({message : 'User Update'});
}

module.exports = userCtrl;