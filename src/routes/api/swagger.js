const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: 'User API',
      version: '1.0.0',
      description: 'API documentation for subscription management',
    },
    servers: [
      {
        url: "http://localhost:3001/api/v1"
      }
    ]
  },
  apis: ["src/routes/subscription.routes.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;
