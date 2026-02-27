const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const data = req.body;

    //Nome completo obrigatório
    let numNomes = data.nome.split("").length;
    if (numNomes < 2) {
        return res.json({ msg: "Nome não formatado" }).status(500).end();
    }

    //cpf deve conter apenas números
    let cpf = data.cpf.replace("-", "").replace(".", "").replace(",", "");
    if (cpf.length != 11 || typeof(data.cpf) != "number") {
        return res.json({ erro: "cpf InválidO" }).status(500).end();
    }
    data.cpf = cpf;

    //Email válido e padronizado
    let email = data.email.toLowerCase();
    data.email = email;

    if (!email.includes("@") || !email.includes(".")) {
        return res.status(500).json({ erro: "Email inválido" }).end();
    }

    // cnh deve começar com número
    let cnh = data.cnh.trim().split("");

    if (isNaN(Number(cnh[0]))) {
        return res.status(500).json({ erro: "cnh inválida" }).end();
    }

    const item = await prisma.clientes.create({
        data
    });

    res.json(data).status(201).end();
};

const listar = async (req, res) => {
    const lista = await prisma.clientes.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.clientes.findUnique({
        where: { id: Number(id) },
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.clientes.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.clientes.delete({
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
