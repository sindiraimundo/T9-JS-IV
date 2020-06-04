class Cliente{
    constructor(nome, email, cpf){//metodo construtor.
        this.nome = nome;// referenciando as propriedades da classe
        this.email = email;
        this.cpf = cpf;
    }
}

//***objetivando***
const cliente1 = new Cliente('Jessica', 'jessica@email.com', '000.000.000-00')//pegando as propriedades do construtor e tornar em um Objeto
console.log("Dados da cliente: ", cliente1);