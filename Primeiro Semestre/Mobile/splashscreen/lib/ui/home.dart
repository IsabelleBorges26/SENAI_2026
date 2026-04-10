import 'dart:convert';

import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'package:splash/ui/splash.dart';

class Home extends StatefulWidget {
  const Home({super.key});

  @override
  State<Home> createState() => _HomeState();
}

class _HomeState extends State<Home> {
  String nome = '';
  String idade = '';

  @override
  void initState() {
    super.initState();
    obterDados();
  }

  Future<void> obterDados() async {
    final prefs = await SharedPreferences.getInstance();

    if (prefs.containsKey('nome')) {
      nome = json.decode(prefs.getString('nome')!);
    }

    if (prefs.containsKey('idade')) {
      idade = json.decode(prefs.getString('idade')!);
    }

    setState(() {});
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(nome),
        backgroundColor: const Color.fromARGB(255, 245, 117, 185),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceEvenly,
          children: [
            Text('Bem vindo $nome'),
            Text('Idade: $idade'),

            ElevatedButton(
              onPressed: () {
                Navigator.pushReplacement(
                  context,
                  MaterialPageRoute(builder: (context) => SplashScreen()),
                );
              },
              child: Text('Voltar'),
            ),
          ],
        ),
      ),
    );
  }
}
