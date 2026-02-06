const express = require("express");

const router = express.Router();

const listaController = require("../controllers/lista.controller");

router.get("/lista", listaController.listarItens);
router.post("/lista", listaController.cadastrarItem);

module.exports = router;