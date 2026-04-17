const prisma = require("../data/prisma");
const fs = require("fs");

const cadastrar = async (req, res) => {
  try {
    const idProduto = parseInt(req.params.id);
    const arquivo = req.file;

    const pastaFinal = `uploads/livros/${idProduto}`;
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
        livrosId: idProduto, 
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
      where: { livrosId: id }, 
    });

    res.status(200).json(imagens);
  } catch (error) {
    res.status(500).json({ erro: "Erro ao buscar" });
  }
};

module.exports = { cadastrar, buscar };
