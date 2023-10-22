import { fastify } from "fastify";
import fastifyCors from "@fastify/cors";
import { getApresentation } from "./routes/get-apresentation";
import { openTheAppByNameRoute } from "./routes/open-the-app-by-name";

const PORT = 3333
const app = fastify()

app.register(fastifyCors, {
  origin: '*',
})

// ROTAS \\
app.register(getApresentation)
app.register(openTheAppByNameRoute)

app.listen({
  port: PORT,
}).then(() => {
  console.log(`HTTP Server Running! http://localhost:${PORT}`);
})