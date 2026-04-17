const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
  try {
    const { nome, preco, categoria, marca } = req.body;
    const arquivo = req.file;

    const caminhoFinal = `uploads/produtos/${arquivo.filename}`;

    const item = await prisma.produtos.create({
      data: {
        nome,
        preco: parseFloat(preco),
        categoria,
        marca,
        img: `http://localhost:3000/${caminhoFinal}`
      }
    });

    res.status(201).json(item);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};


const listar = async (req, res) => {
  try {
    const lista = await prisma.produtos.findMany();
    res.status(200).json(lista);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const buscar = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await prisma.produtos.findUnique({
      where: { id: Number(id) }
    });

    if (!item) {
      return res.status(404).json({ erro: "Produto não encontrado" });
    }

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const atualizar = async (req, res) => {
  try {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.produtos.update({
      where: { id: Number(id) },
      data: dados
    });

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

const excluir = async (req, res) => {
  try {
    const { id } = req.params;

    const item = await prisma.produtos.delete({
      where: { id: Number(id) }
    });

    res.status(200).json(item);
  } catch (error) {
    res.status(500).json({ erro: error.message });
  }
};

module.exports = {
  cadastrar,
  listar,
  buscar,
  atualizar,
  excluir
};
