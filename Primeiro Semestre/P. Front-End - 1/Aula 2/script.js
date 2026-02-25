let clientes = JSON.parse(localStorage.getItem("clientes")) || [];

document.addEventListener("DOMContentLoaded", () => {
    renderizarTabela();

    const cadCliente = document.getElementById("cadCliente");

    cadCliente.addEventListener("submit", (formulario) => {
        formulario.preventDefault();

        const obj = {
            cpf: cadCliente.cpf.value,
            nome: cadCliente.nome.value,
            sobrenome: cadCliente.sobrenome.value,
            nascimento: cadCliente.nascimento.value
        };

        clientes.push(obj);
        localStorage.setItem("clientes", JSON.stringify(clientes));

        renderizarTabela();
        fecharModal();
        cadCliente.reset();
    });
});

function abrirModal() {
    document.getElementById("modal").style.display = "block";
}

function fecharModal() {
    document.getElementById("modal").style.display = "none";
    limparCampos();
}

function renderizarTabela() {
    const dados = document.getElementById("dados");
    dados.innerHTML = "";

    clientes.forEach((cliente, i) => {
        dados.innerHTML += `
            <tr>
                <td>${cliente.cpf}</td>
                <td>${cliente.nome}</td>
                <td>${cliente.sobrenome}</td>
                <td>${cliente.nascimento}</td>
                <td><button onclick="excluir(${i})">Excluir</button></td>
            </tr>`;
    });
}

function excluir(indice) {
    clientes.splice(indice, 1);
    localStorage.setItem("clientes", JSON.stringify(clientes));
    renderizarTabela();
}