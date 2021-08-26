const express = require('express');
const app = express();
const compression = require('compression');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, 'build')))
app.use(express.static(__dirname + '/../client/build'));

const dotenv = require('dotenv');
dotenv.config();



const mongoose = require ('mongoose');

mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .catch(error => console.log('MongoDB connection error'));

const router = require('../routes/router.js');
app.use('/', router)


app.listen(process.env.PORT, () => {
// app.listen(3030, () => {
  console.log(`App listening on Port ${process.env.PORT}!`);
})
