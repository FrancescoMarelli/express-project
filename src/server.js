require('dotenv').config();
const express = require('express')
const connectDB = require('./db');


const app = express()
const port = 3000

// Importig routes
const usersRoutes = require('./routes/users');

// Middleware
app.use(express.json());

connectDB();

// Useing routes
app.use('/api/v1/users', usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

