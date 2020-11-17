const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = process.env.PORT || 5000;
const url = 'mongodb://localhost:27017/RHS';

// Connection to Database

mongoose.connect(url, {useNewUrlParser: true});



app.get('/', (req,res) => {res.send('API running')});



app.get('*', (req,res) => {
  res.send('Here is the error 404');
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});
