const prisma = require("../data/prisma");
const { limiteInscricoes, inscricaoDuplicada } = require("../services/inscricoes.services");

const cadastrar = async (req, res) => {
    try {
        const data = req.body;

        await inscricaoDuplicada(data.usuariosId, data.eventosId);

        const status = await limiteInscricoes(data.eventosId);

        if (status != "") data.status = status;

        const item = await prisma.incricoes.create({
            data
        });

        res.json(item).status(201).end();
    } catch (error) {
        res.json(500).json(error.toString()).end();
    }
};

async function listar(req, res) {
    const lista = await prisma.incricoes.findMany();

    res.json(lista).status(200).end();
}

const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.incricoes.findUnique({
        where: { id: Number(id) }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.incricoes.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.incricoes.delete({
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
