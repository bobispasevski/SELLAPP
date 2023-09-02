const mongoose = require('mongoose');
const bcrypt=require ('bcryptjs');


const userSchema = mongoose.Schema({
  username: { type: String, require: true},
  password: { type: String, require: true},
  email: { type: String, require: true},
  
},{timestamps:true});

const User = mongoose.model('User', userSchema);

module.exports = User;
