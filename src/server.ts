import { fastify } from "fastify";
import { openFirefoxRoute } from "./routes/open-firefox";
import { getApresentation } from "./routes/get-apresentation";

const app = fastify()
const PORT = 3333

//rota de apresentação do projeto
app.register(getApresentation)
//rota para abrir o firefox
app.register(openFirefoxRoute)

app.listen({
  port: PORT,
}).then(() => {
  console.log(`HTTP Server Running! http://localhost:${PORT}`);
})