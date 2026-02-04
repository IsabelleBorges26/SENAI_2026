require ("dotenv").config();

const listarRoutes = require("../Aula 2/src/routes/lista.routes");

const express = require ("express");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

app.use(listarRoutes);

app.get("/", (req, res) => {
    res.send("App Online");
});

app.listen(process.env.PORT_APP, () => {
    console.log("Online na Porta 3000");
});