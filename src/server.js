require('dotenv').config();
const express = require('express')
const mongoose = require('mongoose')
const connectDB = require('./db');


const app = express()
const port = 3000

// Importar rutas
const usersRoutes = require('./routes/users');

// Middleware
app.use(express.json());

connectDB();

// Usar rutas
app.use('/api/v1/users', usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
