const mongoose = require('mongoose');

const vehicleSchema = mongoose.Schema({
  category: { type: String, require: true},
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  image: { type: String, required: true },
  year: {type: Number, required: true},
  engine: { type: Number, required: true },
  power: { type: Number, required: true },
  type: { type: String, required: true },
  colour: { type: String, required: true },
  review: { type: String, required: true },
  views:{
    type:Number,
    default: 0,
    required: false
},
  user:{
    type:mongoose.Types.ObjectId,
    ref: 'user'
    },
    user:{
      type:mongoose.Types.ObjectId,
      ref: 'user'
      },
  image:{
      type:String
  }
},{timestamps:true});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
