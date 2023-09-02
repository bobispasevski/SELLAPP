const mongoose = require('mongoose');

const dbURI = 'mongodb+srv://BobiS:whoneedpass@cluster0.f4uhoos.mongodb.net/sellapp?retryWrites=true&w=majority';

const connectToDB = mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

  module.exports = connectToDB; 