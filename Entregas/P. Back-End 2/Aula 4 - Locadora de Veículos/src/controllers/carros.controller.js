const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const data = req.body;

    //Placa obrigatória e padronizada
    let placa = data.placa.trim().replace("-", "").replace(" ", "").toUpperCase();
    if (placa.length != 7) {
        return res.json({erro: "Placa Inválida"}).status(500).end();
    } 
    data.placa = placa;

    //Marca e modelo com primeira letra maiúscula
    if (!data.marcamodelo) {
        return res.json({erro: "Falta Marca e Modelo"}).status(500).end();
    }

    let infoCarro = data.marcamodelo.toLowerCase().split(" ");

    data.marca = infoCarro[0];
    data.modelo = infoCarro[1];

    //Ano do veículo deve ter 4 caracteres
    if (data.ano.toString().length != 4 && typeof(data.ano) == "number") {
        return res.json({erro: "Ano Inválido"}).status(500).end();
    }

    delete data.marcamodelo;

    const item = await prisma.carros.create({
        data
    });

    res.json(item).status(201).end();
};

const listar = async (req, res) => {
    const lista = await prisma.carros.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.carros.findUnique({
        where: { id: Number(id) },
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.carros.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.carros.delete({
        where: { id: Number(id) }
    });

    res.json(item).status(200).end();
};

module.exports = {
    cadastrar,
    listar,
    buscar,
    atualizar,
    excluir
}
