"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = require("fastify");
const open_firefox_1 = require("./routes/open-firefox");
const get_apresentation_1 = require("./routes/get-apresentation");
const open_the_app_by_name_1 = require("./routes/open-the-app-by-name");
const cors_1 = __importDefault(require("@fastify/cors"));
const app = (0, fastify_1.fastify)();
const PORT = 3333;
app.register(cors_1.default, {
    origin: '*',
});
//rota de apresentação do projeto
app.register(get_apresentation_1.getApresentation);
//rota para abrir o firefox
app.register(open_firefox_1.openFirefoxRoute);
app.register(open_the_app_by_name_1.openTheAppByNameRoute);
app.listen({
    port: PORT,
}).then(() => {
    console.log(`HTTP Server Running! http://localhost:${PORT}`);
});
