import { FastifyInstance } from "fastify";
import { exec } from "node:child_process";
import { z } from 'zod';

export async function openTheAppByNameRoute(app: FastifyInstance) {
  app.get('/open-app/:appname/open', (request, reply) => {
    const paramsSchema = z.object({
      appname: z.string()
    })
    const { appname } = paramsSchema.parse(request.params)

    const appPath = `/usr/bin/${appname}`; // Substitua pelo caminho real do aplicativo que deseja abrir no Linux
    exec(`${appPath}`, (err) => {
      if (err) {
        console.error(`Erro ao abrir o aplicativo: ${err}`);
        reply.status(500).send('Erro ao abrir o aplicativo');
      } else {
        reply.status(200).send('Aplicativo aberto com sucesso');
      }
    });

    return {
      appname,
    }
  });
}