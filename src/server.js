const express = require('express')

const connectDB = require('./db');
const swaggerUi = require('swagger-ui-express');
const swaggerDocs = require('./routes/api/swagger');

const app = express()
const port = 3001

// Middleware
app.use(express.json());

connectDB();

// Importig routes
const subscriptionsRoutes = require('./routes/subscription.routes');
app.use('/api/v1/subscriptions', subscriptionsRoutes);

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

const errorHandler = require('./middlewares/errorHandler');
app.use(errorHandler);