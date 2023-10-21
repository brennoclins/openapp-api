# projeto node com netfly

### iniciando
```
npm init -y

npm i -D typescript @types/node tsx
```

### instalando o fastify (framework para gerenciar rotas)
```
npm i fastify
```

### criar uma pasta src/
```
mkdir src
```

### instalando o httpie
- entre no web site do Httpie e instale a versão para o seu sistema operacional

### usando o httpie
- para usar, abra um novo terminal no vscode
- execute o seguinte comando: http localhost:3333

### instalando a extensão REST Client no vscode
- instale a extensão no vscode
- depois crie um arquivo na raiz do projeto com a extensão ".http"

arquivo: routes.http
```js
GET http://localhost:3333

###

# @name open-firefox
GET http://localhost:3333/open-app/firefox
```

## Separando rotas no Fastify
- para separar rotas no Fastify com Typescript temos que passar nosso APP pra o novo arquivo da rota e tipar o app com a instancia do fastify "FastifyInstance"

OBS.: todas as rotas precisam ser assíncronas, para poder o usa a opção app.register()

```ts
import { FastifyInstance } from "fastify";

export async function openFirefoxRoute(app: FastifyInstance) {}
```

##
[GIT](https://git-scm.com/)
[TypeScript](https://www.typescriptlang.org/)
[NodeJS](https://nodejs.org/)
[Fastify](https://www.fastify.io)
[HTTPIE](https://httpie.io/)