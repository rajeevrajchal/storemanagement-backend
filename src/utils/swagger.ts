// Swagger set up
const swaggetOptions = {
    swaggerDefinition: {
        openapi: "3.0.0",
        info: {
            title: "Shop Management System",
            version: "1.0.0",
            description:
                "A rest api for shop management systems.",
            contact: {
                name: "Rajeev Rajchal",
                url: "https://rajeevrajchal.web.app/",
                email: "rajeevrajchal12@gmail.com"
            }
        },
        servers: [
            {
              url: "http://localhost:8000/api/v1"
            }
          ]
    },
    apis: [
        "../../build/server.js",
        "../models/User.ts"
    ]
};
export default swaggetOptions