import { fastify } from "fastify";
import { openFirefoxRoute } from "./routes/open-firefox";
import { getApresentation } from "./routes/get-apresentation";
import { openTheAppByNameRoute } from "./routes/open-the-app-by-name";
import fastifyCors from "@fastify/cors";

const app = fastify()
const PORT = 3333

app.register(fastifyCors, {
  origin: '*',
})

//rota de apresentação do projeto
app.register(getApresentation)
//rota para abrir o firefox
app.register(openFirefoxRoute)

app.register(openTheAppByNameRoute)

app.listen({
  port: PORT,
}).then(() => {
  console.log(`HTTP Server Running! http://localhost:${PORT}`);
})