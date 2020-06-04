<<<<<<< HEAD
class Cliente{
    constructor(nome, email, cpf){//metodo construtor.
        this.nome = nome;// referenciando as propriedades da classe
        this.email = email;
        this.cpf = cpf;
    }
}

//***objetivando***
const cliente1 = new Cliente('Jessica', 'jessica@email.com', '000.000.000-00')//pegando as propriedades do construtor e tornar em um Objeto
=======
class Cliente {
  constructor(nome, email, cpf) {
    this.nome = nome;
    this.email = email;
    this.cpf = cpf;
  }
}

const cliente1 = new Cliente('Jéssica', 'jessica@email.com', 'XXX.XXX.XX-XX')

>>>>>>> 5c507c88fa58e5964e98b4224cd35cce73c1f557
console.log("Dados da cliente: ", cliente1);