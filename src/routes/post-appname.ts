import { FastifyInstance } from "fastify";
import { z } from 'zod';

export async function testAppNameRoute(app: FastifyInstance) {
  app.post('/cad-app/:userid/user', (request, reply) => {
    const paramsSchema = z.object({
      userid: z.string().uuid()
    })
    const { userid } = paramsSchema.parse(request.params)

    const bodySchema = z.object({
      prompt: z.string()
    })
    const { prompt } = bodySchema.parse(request.body)

    return {
      userid,
      prompt,
    }
  });
}