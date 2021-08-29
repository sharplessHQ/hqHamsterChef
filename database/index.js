const dotenv = require('dotenv');
dotenv.config();

const mongoose = require ('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => console.log('MongoDB connection error'));

const db = mongoose.connection;

// db.on('error', () => {
//   console.log('mongoose connection error');
// });

db.once('open', () => {
  console.log('mongoose connected successfully');
});

module.exports = db;