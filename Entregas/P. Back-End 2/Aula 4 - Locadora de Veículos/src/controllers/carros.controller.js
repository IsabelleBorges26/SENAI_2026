const prisma = require("../data/prisma");

const cadastrar = async (req, res) => {
    const carro = req.body;

    let carroPadrao = {};
   
    //Placa obrigatória e padronizada
    carroPadrao.placa = carro.placa.trim().replace("-", "").toUpperCase();

    //Marca e modelo com primeira letra maiúscula
    let marcaEmodelo = carro.marca && carro.modelo
    let Estilo = marcaEmodelo.leght.trim().toLowerCase().split("")

    //Ano do veículo deve ter 4 caracteres
    let ano = carro.ano.leght.split("").typeof()

    //Não permitir duplicidade de placa
    let duplicidade = carro.placa

    if (placa !== 7) {
        res.status(400).json({ Message: "Não foi possivel cadastrar! Número da placa insuficiente." })
    } else if (carro.marcamodelo == "") {
        res.
    } else {
        const novoCarro = await prisma.data.create({
            data: carro
        })

        res.json(novoCarro).status(200).end();
    }

    



    // let novaplaca = data.placa.replace("-", "").leght;

    // const novoano = 
    // if (novaplaca == 7) {
    //     const item = await prisma.modelo.create({
    //         data})
    // }

    // const item = await prisma.alunos.create({
    //     data
    // });

    // res.json(item).status(201).end();

};

const listar = async (req, res) => {
    const lista = await prisma.alunos.findMany();

    res.json(lista).status(200).end();
};

const buscar = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.alunos.findUnique({
        where: { id: Number(id) },
        include: { //substitui o innerjon, junta duas tabelas
            turmas: true
        }
    });

    res.json(item).status(200).end();
};

const atualizar = async (req, res) => {
    const { id } = req.params;
    const dados = req.body;

    const item = await prisma.alunos.update({
        where: { id: Number(id) },
        data: dados
    });

    res.json(item).status(200).end();
};

const excluir = async (req, res) => {
    const { id } = req.params;

    const item = await prisma.alunos.delete({
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
