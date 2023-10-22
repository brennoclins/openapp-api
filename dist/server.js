"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const cors_1 = __importDefault(require("@fastify/cors"));
const get_apresentation_1 = require("./routes/get-apresentation");
const open_the_app_by_name_1 = require("./routes/open-the-app-by-name");
const PORT = 3333;
const app = (0, fastify_1.fastify)();
app.register(cors_1.default, {
    origin: '*',
});
// ROTAS \\
app.register(get_apresentation_1.getApresentation);
app.register(open_the_app_by_name_1.openTheAppByNameRoute);
app.listen({
    port: PORT,
}).then(() => {
    console.log(`HTTP Server Running! http://localhost:${PORT}`);
});
