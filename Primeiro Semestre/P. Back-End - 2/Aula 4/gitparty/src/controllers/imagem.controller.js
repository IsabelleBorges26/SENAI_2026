const prisma = require("../data/prisma");
const fs = require("fs");

const cadastrar = async (req, res) => {
  try {
    const idEvento = parseInt(req.params.id);
    const arquivo = req.file;

    const pastaFinal = `uploads/eventos/${idEvento}`;
    const caminhoFinal = `${pastaFinal}/${arquivo.filename}`;

    if (!fs.existsSync(pastaFinal)) {
      fs.mkdirSync(pastaFinal, { recursive: true });
    }

    fs.renameSync(arquivo.path, caminhoFinal);

    const imagem = await prisma.imagem.create({
      data: {
        nomeOriginal: arquivo.originalname,
        nomeArquivo: arquivo.filename,
        mimeType: arquivo.mimetype,
        path: caminhoFinal,
        eventosId: idEvento,
      },
    });

    res.status(201).json(imagem);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const buscar = async (req, res) => {
  try {
    const id = parseInt(req.params.id);

    const imagens = await prisma.imagem.findMany({
      where: { eventosId: id },
    });

    res.json(imagens);
  } catch {
    res.status(500).json({ erro: "Erro ao buscar" });
  }
};

module.exports = { cadastrar, buscar };