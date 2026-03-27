import 'package:flutter/material.dart';

void main() {
  runApp(const MainApp());
}

class MainApp extends StatefulWidget {
  const MainApp({super.key});

  @override
  State<MainApp> createState() => _MainAppState();
}

class _MainAppState extends State<MainApp> {
  String nome = '';
  double peso = 0.0;
  double altura = 0.0;
  String resultado = 'Resultado';
  double imc = 0.0;

void processar() {
  setState(() {
    imc = peso / (altura * altura);

    if (imc < 20) {
      resultado = "$nome seu IMC é ${imc.toStringAsFixed(1)} você é magrinho(a)";
    } else {
      resultado = "$nome seu IMC é ${imc.toStringAsFixed(1)}";
    }
  });
}

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        body: Center(
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            spacing: 20.0,
            children: [
              const Text(
                'Indíce de Massa Corpórea',
                style: TextStyle(
                  color: Colors.amberAccent,
                  fontWeight: FontWeight.bold,
                  fontSize: 30,
                ),
              ),
              TextField(
                decoration: InputDecoration(labelText: 'Nome'),
                onChanged: (value) {
                  nome = value;
                },
              ),
              TextField(
                decoration: const InputDecoration(labelText: 'Peso'),
                onChanged: (value) {
                  peso = double.parse(value);
                },
              ),
              TextField(
                decoration: const InputDecoration(labelText: 'Altura'),
                onChanged: (value) {
                  altura = double.parse(value);
                },
              ),
              ElevatedButton(
                onPressed: () {
                  processar();
                },
                child: const Text("calcular"),
              ),
              Text(resultado),
            ],
          ),
        ),
      ),
    );
  }
}
