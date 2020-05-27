// Levantando os parâmetros de ambiente
require("dotenv").config();
const AuthRouter = require("./routes/AuthRouter");
const TarefasRouter = require("./routes/TarefasRouter");

// Trazendo dependências
const path = require("path");
const express = require("express");

// Criando o app express
const app = express();

// permitir leitura de JSON
app.use(express.json());

// Configurando pasta public para requisições estáticas
app.use(express.static(path.join(__dirname, "public")));

app.use("/api", AuthRouter);
app.use("/api", TarefasRouter);

// Levantando o servidor
app.listen(process.env.HTTP_PORT);
// app.listen(3000);
