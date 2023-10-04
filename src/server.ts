import express from "express";
import bodyParser from "body-parser";
import mainRoute from "./routes/main-route";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const app = express();
const PORT = process.env.PORT || 4000;

const swaggerOptions = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "REST API for Swagger Documentation",
      version: "1.0.0",
    },
    schemes: ["http", "https"],
    servers: [{ url: `http://localhost:${PORT}/` }],
  },
  apis: [`${__dirname}/routes/main-route.ts`, "./build/routes/main-route.js"],
};
const swaggerSpec = swaggerJSDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use(bodyParser.json());
app.use(mainRoute);



export default app;
