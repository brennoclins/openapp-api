import { fastify } from "fastify";
import { exec } from "child_process"

const app = fastify()
const PORT = 3333

app.get('/', () => {
  return 'OpenApp API - API para abrir app no Windows ou Linux!'
})

app.get('/open-app/firefox', (req, res) => {
  const appPath = '/usr/bin/firefox'; // Substitua pelo caminho real do aplicativo que deseja abrir no Linux
  exec(`${appPath}`, (err) => {
    if (err) {
      console.error(`Erro ao abrir o aplicativo: ${err}`);
      res.status(500).send('Erro ao abrir o aplicativo');
    } else {
      res.status(200).send('Aplicativo aberto com sucesso');
    }
  });
});

app.listen({
  port: PORT,
}).then(() => {
  console.log(`HTTP Server Running! http://localhost:${PORT}`);
})