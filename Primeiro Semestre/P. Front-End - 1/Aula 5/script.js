const key = "d83ecda77bcd8e437402c1139c426e60";

async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then(res => res.json());

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
}

function cliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}

function abrirModal() { 
    document.querySelector("#modal-tarefa").style.display = "flex"; 
}

function fecharModal() { 
    document.querySelector("#modal-tarefa").style.display = "none"; 
}

async function salvarTarefa() {
    const novaTarefa = {
        nome: document.querySelector("#nome").value,
        dataComeco: document.querySelector("#dataComeco").value,
        dataTermino: document.querySelector("#dataTermino").value,
        descricao: document.querySelector("#descricao").value,
        imagem: document.querySelector("#imagem").value
    };

    await fetch("http://localhost:3000/tarefas/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(novaTarefa)
    });

    alert("Tarefa salva!");
    fecharModal();
    location.reload();
}

async function carregarCards() {
    const resposta = await fetch("http://localhost:3000/tarefas/listar");
    const dados = await resposta.json();

    const container = document.querySelector("#lista-tarefas");
    container.innerHTML = ""; 

    dados.forEach(tarefa => {
        const dataApenas = tarefa.dataTermino.split('T')[0];
        
        container.innerHTML += `
            <div class="card-estilo-aluno">
                <img src="${tarefa.imagem}" style="width:100%">
                <h3>${tarefa.nome}</h3>
                <p>${tarefa.descricao}</p>
                <p>Entrega: ${dataApenas}</p>
            </div>
        `;
    });
}