import { FastifyInstance } from "fastify";
import { exec } from "node:child_process";

export async function openFirefoxRoute(app: FastifyInstance) {
  app.get('/open-app/firefox', (request, reply) => {
    const appPath = '/usr/bin/firefox'; // Substitua pelo caminho real do aplicativo que deseja abrir no Linux
    exec(`${appPath}`, (err) => {
      if (err) {
        console.error(`Erro ao abrir o aplicativo: ${err}`);
        reply.status(500).send('Erro ao abrir o aplicativo');
      } else {
        reply.status(200).send('Aplicativo aberto com sucesso');
      }
    });
  });
}