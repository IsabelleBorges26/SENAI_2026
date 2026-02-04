function carregarDados() {
    console.log('dados')
    fetch('../data/produtos.json')
    .then(response => response.json())
    .then(response => renderizaCards(response))
}

function renderizaCards(dados) {
    const main = document.querySelector("main")
    main.innerHTML = ""
    dados.forEach(p => {
        const card = document.createElement("div")
        card.classList.add('card')
        card.innerHTML = `
            <h2> ${p.nome} </h2>
            <img src="${p.img != ''?p.img:'./assets/none.png'}">
        `
        main.appendChild(card)
        
    });
}