const API_URL = "https://senai-2026.vercel.app/api/produtos";

async function carregarProdutos() {
  const response = await fetch(`${API_URL}/listar`);
  const produtos = await response.json();

  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = "";

  produtos.forEach(function (prod) {
    const div = document.createElement("div");
    div.classList.add("produto");

    div.innerHTML = `
            <img src="${prod.img}" alt="${prod.nome}">
            <div class="produto-body">
                <h3>${prod.nome}</h3>
                <p>R$ ${prod.preco}</p>
                <button onclick="mostrarDetalhes(${prod.id})">Ver detalhes</button>
            </div>
        `;

    lista.appendChild(div);
  });
}

async function mostrarDetalhes(id) {
  const response = await fetch(`${API_URL}/buscar/${id}`);

  if (!response.ok) {
    alert("Livro não encontrado");
    return;
  }

  const prod = await response.json();

  const detalhes = document.getElementById("detalhesProduto");
  detalhes.style.display = "block";

  detalhes.innerHTML = `
        <h2>${prod.nome}</h2>
        <img src="${prod.img}" alt="${prod.nome}">
        <p>Preço: <span>R$ ${prod.preco}</span></p>
        <p>Categoria: <span>${prod.categoria}</span></p>
        <p>Autor / Editora: <span>${prod.marca}</span></p>
    `;
}

const modal = document.getElementById("modal");

document.getElementById("btnAbrirModal").onclick = function () {
  modal.style.display = "block";
};

document.getElementById("btnFecharModal").onclick = function () {
  modal.style.display = "none";
};

const form = document.getElementById("formProduto");

form.addEventListener("submit", async function (e) {
  e.preventDefault();

  const formData = new FormData(form);

  const response = await fetch(`${API_URL}/cadastrar`, {
    method: "POST",
    body: formData
  });

  if (response.ok) {
    alert("Livro cadastrado!");
    form.reset();
    modal.style.display = "none";
    carregarProdutos();
  } else {
    const erro = await response.json();
    alert("Erro: " + erro.erro);
  }
});

carregarProdutos();