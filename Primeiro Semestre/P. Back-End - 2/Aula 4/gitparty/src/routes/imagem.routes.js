const express = require("express");
const router = express.Router();

const upload = require("../middleware/uploadImagem");

const {
  cadastrar,
  buscar
} = require("../controllers/imagem.controller");

router.post("/cadastrar/:id", upload, cadastrar);
router.get("/buscar/:id", buscar);

module.exports = router;