const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");

async function carregarDetalhes() {
    const res = await fetch(`http://localhost:3000/eventos/buscar/${id}`);
    const evento = await res.json();
    document.getElementById("titulo").innerText = evento.titulo;
    document.getElementById("descricao").innerText = evento.descricao;
    document.getElementById("local").innerText = evento.local;
    document.getElementById("data").innerText = evento.data_evento;
    carregarImagens();
}

async function uploadImagem() {
    const file = document.getElementById("imagem").files[0];
    const formData = new FormData();

    formData.append("imagem", file);

    const res = await fetch(`http://localhost:3000/imagem/cadastrar/${id}`, {
        method: "POST",
        body: formData
    });

    if (res.ok) {
        alert("Imagem enviada com sucesso!");
        carregarImagens();
    } else {
        const erro = await res.text();
        alert("Erro ao enviar imagem: " + erro);
    }
}

async function carregarImagens() {
    const res = await fetch(`http://localhost:3000/imagem/buscar/${id}`);
    const imagens = await res.json();

    const lista = document.getElementById("listaImagens");
    lista.innerHTML = "";

    imagens.forEach(img => {
        lista.innerHTML += `
      <img src="http://localhost:3000/${img.path}" width="150">
    `;
    });
}

carregarDetalhes();
