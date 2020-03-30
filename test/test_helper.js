const mongoose = require('mongoose')
require('dotenv').config();

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true }
);


const connection = mongoose.connection;
connection.once('open', () => console.log('Good to go'))
  .on('error', (error) => {
    console.warn('Warning', error)
  })