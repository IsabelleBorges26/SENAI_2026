const API_URL = "http://localhost:3000/produtos";

async function carregarProdutos() {
  const response = await fetch(`${API_URL}/listar`);
  const produtos = await response.json();

  const lista = document.getElementById("listaProdutos");
  lista.innerHTML = "";

  produtos.forEach(prod => {
    const div = document.createElement("div");
    div.classList.add("produto");

    div.innerHTML = `
      <h3>${prod.nome}</h3>
      <img src="${prod.img}" width="120">
      <p>Preço: R$ ${prod.preco}</p>
      <button onclick="mostrarDetalhes(${prod.id})">
        Ver detalhes
      </button>
    `;

    lista.appendChild(div);
  });
}

async function mostrarDetalhes(id) {
  if (!id) return alert("ID inválido");

  const response = await fetch(`${API_URL}/buscar/${id}`);

  if (!response.ok) {
    alert("Produto não encontrado");
    return;
  }

  const prod = await response.json();

  const detalhes = document.getElementById("detalhesProduto");
  detalhes.style.display = "block";

  detalhes.innerHTML = `
    <h2>${prod.nome}</h2>
    <img src="${prod.img}" width="200">
    <p>Preço: R$ ${prod.preco}</p>
    <p>Categoria: ${prod.categoria}</p>
    <p>Marca: ${prod.marca}</p>
  `;
}

const modal = document.getElementById("modal");

document.getElementById("btnAbrirModal").onclick = () => {
  modal.style.display = "block";
};

document.getElementById("btnFecharModal").onclick = () => {
  modal.style.display = "none";
};

const form = document.getElementById("formProduto");

form.addEventListener("submit", async (e) => {
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