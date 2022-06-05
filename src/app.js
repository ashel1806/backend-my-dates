const express = require('express');
const mongoose = require('mongoose');

const config = require('./config/config');
const app = express();

mongoose.connect(config.MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected succesfully');
  })
  .catch((error) => {
    console.log('Some error has ocurred: ', error.message);
  })

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.send('Hello World!')
})

module.exports = app;