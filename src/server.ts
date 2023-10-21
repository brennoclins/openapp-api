import { fastify } from "fastify";

const app = fastify()
const PORT = 3333

app.get('/', () => {
  return 'OpenApp API'
})

app.listen({
  port: PORT,
}).then(() => {
  console.log(`HTTP Server Running! http://localhost:${PORT}`);
})