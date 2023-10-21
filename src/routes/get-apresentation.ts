import { FastifyInstance } from "fastify"

export async function getApresentation(app: FastifyInstance) {
  app.get('/', () => {
    return 'OpenApp API - API para abrir app no Windows ou Linux!'
  })
}