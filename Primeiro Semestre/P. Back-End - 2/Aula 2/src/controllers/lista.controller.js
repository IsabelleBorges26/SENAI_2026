const {PrismaClient} = require("@prisma/client");

const prisma = new PrismaClient;

const con = require("../data/connection");

const listarItens = async (req, res) => {
    try {
        const [lista] = await con.query("SELECT * FROM lista");

        res.status(200).json(lista);
    } catch (err) {
        res.status(500).json(err);
    }
};

const cadastrarItem = async (req, res) => {
    try {
        const { item, valor } = req.body;

        const insert = "INSERT INTO lista (item, valor) VALUES (?, ?)";

        await con.query(insert, [item, valor]);

        res.status(201).end();
    } catch (err) {
        res.status(500).json(err);
    }
};

const listaDois = async (req, res) => {
    try {
        const lista = await prisma.lista.findMany();

        res.send.json(lista).status(200).end();

    }catch(err) {
        res.json(err).status(500).end();
    }
};

module.exports = {
    listarItens,
    cadastrarItem,
    listaDois
};
