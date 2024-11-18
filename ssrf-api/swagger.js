const options = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: " API",
        version: "1.0.0",
        description:
          " API Documentation"
      },
      servers: [
        {
          url: "http://localhost:3000",
          description: 'Development server'
        },
      ],
      components: {
        schemas: {
            api: {
            }
        },
        responses : {
            200: {
                description: 'API',
                contents: 'application/json'
                },
            400: {
                    description: 'Malformed Token has been presented - Provide Valid Token',
                    contents: 'application/json'
                },
            401: {
                    description: 'Token has expired - Provide a fresh one',
                    contents: 'application/json'
                },
            403: {
                    description: 'Missing Bearer Token - add it to the Authorization header',
                    contents: 'application/json'
                },
            404: {
                    description: 'Not found - not found',
                    contents: 'application/json'
                }
            },
        securitySchemes: {
            bearerAuth: {
                type: 'http',
                scheme: 'bearer',
                bearerFormat: 'JWT',
              }
          }
      },
      security: [{
        bearerAuth: []
      }]

    },
    apis: ["./routes/*.js"],
}

module.exports = options