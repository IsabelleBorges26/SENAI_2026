class Animal {
    //Atributos
    int id=0;
    String nome="";
    String especie="";
    String raca="";
    double peso=0.0;  
    //Métodos
    Animal(this.id, this.nome, this.especie, this.raca, this.peso);
    String tudoJunto(){
        return "$id, $nome, $especie, $raca, $peso";
    }
}

void main(){
    //Instância
    Animal boi = new Animal (1, "Bandido", "Bovino", "Nelori", 500);
    Animal vaca = new Animal (1, "Mimosa", "Bovino", "Angus", 350);
    Animal gato = new Animal (1, "Tico", "Felino", "Angira", 1.5);
    Animal gata = new Animal (1, "Marrie", "Felino", "Branca", 1);
    
    print(boi.tudoJunto());
    print(vaca.tudoJunto());
    print(gato.tudoJunto());
    print(gata.tudoJunto());
}