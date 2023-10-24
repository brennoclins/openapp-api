import { FastifyInstance } from "fastify"
import fs from 'node:fs'
import path from 'node:path'

export async function getApresentation(app: FastifyInstance) {
  app.get('/', (request, reply) => {
    const htmlFilePath = path.resolve(__dirname, '..', 'pages', 'index.html');
    const htmlContent = fs.readFileSync(htmlFilePath, 'utf-8');
    
    return reply.type('text/html').send(htmlContent);
  })
}