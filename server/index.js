const express = require('express');
const app = express();
const compression = require('compression');

// const db = require('../database/index')

app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(__dirname + '/../client/build'));

const path = require('path');
const dotenv = require('dotenv');
dotenv.config();



// const mongoose = require ('mongoose');

// mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
//   .catch(error => console.log('MongoDB connection error'));

const router = require('../routes/router.js');
app.use('/', router)

if(process.env.MODE === 'production') {
  app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'build', 'index.html'))
  });

}


app.listen(process.env.PORT, () => {
// app.listen(3030, () => {
  console.log(`App listening on Port ${process.env.PORT}!`);
})
