import 'package:flutter/material.dart';

class Produtos extends StatefulWidget {
  const Produtos({super.key});

  @override
  State<Produtos> createState() => _ProdutosState();
}

class _ProdutosState extends State<Produtos> {
  String nome = '';
  double preco = 0.0;
  int quantidade = 0;
  double subtotal = 0.0;

  void calcular() {
    subtotal = preco * quantidade;
  }

  void mostrarProduto() {
    if (mounted) {
      showDialog(
        context: context,
        builder: (BuildContext context) => AlertDialog(
          title: Text(nome),
          content: Text(
            "Preço: $preco, Quantidade: $quantidade\nSubtotal: $subtotal",
          ),
        ),
      );
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Container(
        decoration: BoxDecoration(
          image: DecorationImage(
            image: AssetImage("assets/fundo.png"),
            fit: BoxFit.cover,
            colorFilter: ColorFilter.mode(
              Color.fromRGBO(0, 0, 0, 0.6),
              BlendMode.dstATop,
            ),
          ),
        ),
        child: Padding(
          padding: const EdgeInsets.all(18.0),
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              Text("Produtos"),

              TextField(
                decoration: InputDecoration(labelText: "Nome"),
                onChanged: (value) {
                  nome = value;
                },
              ),

              TextField(
                decoration: InputDecoration(labelText: "Preço"),
                onChanged: (value) {
                  preco = double.tryParse(value) ?? 0.0;
                },
              ),

              TextField(
                decoration: InputDecoration(labelText: "Quantidade"),
                onChanged: (value) {
                  quantidade = int.tryParse(value) ?? 0;
                },
              ),

              Row(
                mainAxisAlignment: MainAxisAlignment.spaceAround,
                children: [
                  ElevatedButton(
                    onPressed: () {
                      calcular();
                      mostrarProduto();
                    },
                    child: Text("Subtotal"),
                  ),
                  ElevatedButton(
                    onPressed: () => Navigator.pop(context),
                    child: Text("Sair"),
                  ),
                ],
              ),
            ],
          ),
        ),
      ),
    );
  }
}
