"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const main_route_1 = __importDefault(require("./routes/main-route"));
const swagger_jsdoc_1 = __importDefault(require("swagger-jsdoc"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const app = (0, express_1.default)();
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
const swaggerSpec = (0, swagger_jsdoc_1.default)(swaggerOptions);
app.use("/api-docs", swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(swaggerSpec));
app.use(body_parser_1.default.json());
app.use(main_route_1.default);
exports.default = app;
