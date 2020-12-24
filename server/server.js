const express = require('express');
const connectDB = require('./config/db');
const app = express();
const PORT = process.env.PORT || 5000;

// Connect Database : 

connectDB();

app.get('/', (req,res) => {res.send('API running')});

// Init Middleware : 

app.use(express.json({extended:false}));

// Define Routes : 

app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/contact',require('./routes/api/contact'));
app.use('/api/private',require('./routes/api/private'));
app.use('/api/map',require('./routes/api/map'));
app.use('/api/points',require('./routes/api/points'));



app.get('*', (req,res) => {
  res.send('Here is the error 404');
});

app.listen(PORT, () => {
  console.log(`App listening at http://localhost:${PORT}`)
});