require("dotenv").config();

const express = require("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

/* Importar e Implementar Rotas */
const turmasRotas = require("./src/routes/turmas.routes");
const alunosRotas = require("./src/routes/alunos.routes");
app.use("/turmas", turmasRotas);
app.use("/alunos", alunosRotas);
/* Fim */

const porta = process.env.PORT_APP || 3000;

app.listen(porta, () => {
    console.log(`Online na porta ${porta}`);
});