const multer = require("multer");
const path = require("path");

const validarNomeArquivo = (req, file, callback) => {
  const nomeFinal = Date.now() + ".jpg";
  callback(null, nomeFinal);
};

const fs = require("fs");

const definirDestino = (req, file, callback) => {
  const pastaDestino = path.join(__dirname, "..", "..", "uploads", "temp");

  if (!fs.existsSync(pastaDestino)) {
    fs.mkdirSync(pastaDestino, { recursive: true });
  }

  callback(null, pastaDestino);
};

const filtrarExtensao = (req, file, callback) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/jpg") {
    callback(null, true);
  } else {
    callback(new Error("Apenas JPEG"));
  }
};

const armazenamento = multer.diskStorage({
  destination: definirDestino,
  filename: validarNomeArquivo,
});

const upload = (req, res, next) => {
  const filemulter = multer({
    storage: armazenamento,
    fileFilter: filtrarExtensao,
  });

  filemulter.single("imagem")(req, res, function (erro) {
    if (erro) return res.status(400).json({ erro: erro.message });
    if (!req.file) return res.status(400).json({ erro: "Sem arquivo" });
    next();
  });
};

module.exports = upload;