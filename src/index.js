const express = require('express')
const app = express()
const port = 3000

// Importar rutas
const usersRoutes = require('./routes/users.routes');

// Middleware
app.use(express.json());

// Usar rutas
app.use('/api/v1/users', usersRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
