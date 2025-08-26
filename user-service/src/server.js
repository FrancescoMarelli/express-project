const express = require('express')
const connectDB = require('./db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./routes/api/swagger');


const app = express()
const port = 3000



// Middleware
app.use(express.json());

connectDB();

// Importig routes
const usersRoutes = require('./routes/user.route');
app.use('/api/v1/users', usersRoutes);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);

