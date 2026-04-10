import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:shared_preferences/shared_preferences.dart';
import 'home.dart';

class SplashScreen extends StatefulWidget {
  const SplashScreen({super.key});

  @override
  State<SplashScreen> createState() => _SplashScreenState();
}

class _SplashScreenState extends State<SplashScreen>
    with TickerProviderStateMixin {
  late AnimationController _escalaControll;
  late AnimationController _opacidadeControll;

  String nome = '';
  String idade = '';

  double _scale = 1.0;
  double _opacity = 0.0;
  double _top = -300;

  @override
  void initState() {
    super.initState();

    _escalaControll = AnimationController(
      vsync: this,
      duration: const Duration(seconds: 4),
    )..addListener(() {
      if (!mounted) return;
      setState(() {
        _top = -300 + (300 * _escalaControll.value);
      });
    });

    _opacidadeControll = AnimationController(
      vsync: this,
      duration: const Duration(milliseconds: 1200),
    )..addListener(() {
      if (!mounted) return;
      setState(() {
        _opacity = _opacidadeControll.value;
      });
    });

    _animarEntrada();
  }

  void _animarEntrada() {
    if (!mounted) return;

    _escalaControll.reset();
    _opacidadeControll.reset();

    _escalaControll.forward();

    Timer(const Duration(seconds: 2), () {
      if (!mounted) return;
      _opacidadeControll.forward();
    });
  }

  Future<void> salvarNome() async {
    final localStorage = await SharedPreferences.getInstance();
    await localStorage.setString('nome', json.encode(nome));
    await localStorage.setString('idade', json.encode(idade));

    irParaHome();
  }

  void irParaHome() async {
    await Navigator.pushReplacement(
      context,
      MaterialPageRoute(builder: (context) => const Home()),
    );

    if (!mounted) return;

    _animarEntrada();
  }

  @override
  void dispose() {
    _escalaControll.dispose();
    _opacidadeControll.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          spacing: 20,
          children: [
            Opacity(
              opacity: _opacity,
              child: Transform.translate(
                offset: Offset(0, _top),
                child: Transform.scale(
                  scale: _scale,
                  child: Image.asset(
                    'assets/foto.png',
                    width: 300,
                    height: 300,
                  ),
                ),
              ),
            ),

            ElevatedButton(onPressed: salvarNome, child: const Text("Entrar")),

            Padding(
              padding: const EdgeInsets.all(18.0),
              child: TextField(
                decoration: const InputDecoration(labelText: "Digite seu nome"),
                onChanged: (value) => nome = value,
              ),
            ),

            Padding(
              padding: const EdgeInsets.all(18.0),
              child: TextField(
                keyboardType: TextInputType.number,
                decoration: const InputDecoration(
                  labelText: "Digite sua idade",
                ),
                onChanged: (value) => idade = value,
              ),
            ),
          ],
        ),
      ),
    );
  }
}
