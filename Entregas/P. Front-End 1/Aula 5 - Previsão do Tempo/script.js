const key = "d83ecda77bcd8e437402c1139c426e60";

let previsoes = JSON.parse(localStorage.getItem("previsoes")) || [];

function colocarDadosNaTela(dados) {
    const container = document.getElementById("cards");

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3 class="cidade">Tempo em ${dados.name}</h3>
        <p class="temp">${Math.floor(dados.main.temp)}°C</p>

        <div class="caixa-menor">
            <img class="img-previsao" src="https://openweathermap.org/img/wn/${dados.weather[0].icon}.png">
            <p class="texto-previsao">${dados.weather[0].description}</p>
        </div>

        <p class="umidade">Umidade: ${dados.main.humidity}%</p>
    `;

    container.appendChild(card);
}

async function buscarCidade(cidade) {
    const dados = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`
    ).then(resposta => resposta.json());

    previsoes.push(dados);
    localStorage.setItem("previsoes", JSON.stringify(previsoes));

    colocarDadosNaTela(dados);
}

function cliqueNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}

previsoes.forEach(dados => {
    colocarDadosNaTela(dados);
});

function limparTudo() {
    previsoes = [];

    localStorage.removeItem("previsoes");

    document.getElementById("cards").innerHTML = "";
}