async function carregarEventos() {
    const res = await fetch("http://localhost:3000/eventos/listar");
    const eventos = await res.json();
    const lista = document.getElementById("listaEventos");
    lista.innerHTML = "";
    eventos.forEach(ev => {
        lista.innerHTML += `
      <div class="evento">
        <span onclick="detalhes(${ev.id})">${ev.titulo} - ${ev.local}</span>
        <span class="lixeira" onclick="excluirEvento(${ev.id})">🗑️</span>
      </div>`;
    });
}

async function excluirEvento(id) {
    await fetch(`http://localhost:3000/eventos/excluir/${id}`, { method: "DELETE" });
    carregarEventos();
}

async function cadastrarEvento() {
    const evento = {
        titulo: document.getElementById("titulo").value,
        descricao: document.getElementById("descricao").value,
        local: document.getElementById("local").value,
        data_evento: document.getElementById("data").value,
        capacidade_maxima: 100
    };
    await fetch("http://localhost:3000/eventos/cadastrar", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(evento)
    });
    fecharModal();
    carregarEventos();
}

function abrirModal() { document.getElementById("modal").style.display = "block"; }
function fecharModal() { document.getElementById("modal").style.display = "none"; }
function detalhes(id) { window.location.href = `detalhes.html?id=${id}`; }

carregarEventos();
