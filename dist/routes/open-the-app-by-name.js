"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.openTheAppByNameRoute = void 0;
const node_child_process_1 = require("node:child_process");
const zod_1 = require("zod");
async function openTheAppByNameRoute(app) {
    app.get('/open-app/:appname/open', (request, reply) => {
        const paramsSchema = zod_1.z.object({
            appname: zod_1.z.string()
        });
        const { appname } = paramsSchema.parse(request.params);
        const appPath = `/usr/bin/${appname}`; // Substitua pelo caminho real do aplicativo que deseja abrir no Linux
        (0, node_child_process_1.exec)(`${appPath}`, (err) => {
            if (err) {
                console.error(`Erro ao abrir o aplicativo: ${err}`);
                reply.status(500).send('Erro ao abrir o aplicativo');
            }
            else {
                reply.status(200).send('Aplicativo aberto com sucesso');
            }
        });
        return {
            appname,
        };
    });
}
exports.openTheAppByNameRoute = openTheAppByNameRoute;
