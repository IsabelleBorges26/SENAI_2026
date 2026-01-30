function reajustarSalario(){
    let salario = Number(document.getElementById('salario').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if (salario > 2000) {
        desconto = salario * 10/100;
    }

    let salarioComDesconto = salario + desconto;

    resultado.innerHTML = `
    O bônus é de R$ ${desconto.toFixed(2)} <br>
    Salário Final de R$ ${salarioComDesconto.toFixed(2)}
    `;
}

function reajustarCompra(){
    let compra = Number(document.getElementById('compra').value);
    let resultado = document.getElementById('resultado');
    let frete = 0;

    if (compra >= 150) {
        frete = 0;
    } else {
        frete = 20;
    }

    let total = frete + compra;

    resultado.innerHTML = `
    O valor do frete é de R$ ${frete.toFixed(2)} <br>
    O valor total da compra é de R$ ${total.toFixed(2)}
    `;
}

function reajustarValor(){
    let valor = Number(document.getElementById('valor').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if (valor > 200) {
        desconto = valor * 5/100;
    }

    let valorComDesconto = valor - desconto;

    resultado.innerHTML = `
    O bônus é de R$ ${desconto.toFixed(2)} <br>
    Valor Final de R$ ${valorComDesconto.toFixed(2)}
    `;
}

function reajustarTaxa(){
    let taxa = Number(document.getElementById('taxa').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if (taxa > 100) {
        desconto = taxa * 10/100;
    }

    let taxaComDesconto = taxa + desconto;

    resultado.innerHTML = `
    O valor da taxa é de R$ ${desconto.toFixed(2)} <br>
    Valor Final de R$ ${taxaComDesconto.toFixed(2)}
    `;
}

function reajustarMulta(){
    let valor = Number(document.getElementById('valor').value);
    let quantidade = Number(document.getElementById('quantidade').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if (quantidade > 0) {
        desconto = valor * 2/100;
    }

    let taxaComDesconto = valor + desconto;

    resultado.innerHTML = `
    O valor da multa é de R$ ${desconto.toFixed(2)} <br>
    Valor Final de R$ ${taxaComDesconto.toFixed(2)}
    `;
}

function ReajustarValorCompra(){
    let valorCompra = Number(document.getElementById('valorCompra').value);
    let resultado = document.getElementById('resultado');
    let desconto = 0;

    if (valorCompra > 300) {
        desconto = valorCompra * 5/100;
    }

    let valorCompraComDesconto = valorCompra - desconto;

    resultado.innerHTML = `
    O Cashback é de R$ ${desconto.toFixed(2)} <br>
    Valor Final de R$ ${valorCompraComDesconto.toFixed(2)}
    `;
}

