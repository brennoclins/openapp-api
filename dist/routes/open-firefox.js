"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openFirefoxRoute = void 0;
const node_child_process_1 = require("node:child_process");
async function openFirefoxRoute(app) {
    app.get('/open-app/firefox', (request, reply) => {
        const appPath = '/usr/bin/firefox'; // Substitua pelo caminho real do aplicativo que deseja abrir no Linux
        (0, node_child_process_1.exec)(`${appPath}`, (err) => {
            if (err) {
                console.error(`Erro ao abrir o aplicativo: ${err}`);
                reply.status(500).send('Erro ao abrir o aplicativo');
            }
            else {
                reply.status(200).send('Aplicativo aberto com sucesso');
            }
        });
    });
}
exports.openFirefoxRoute = openFirefoxRoute;
