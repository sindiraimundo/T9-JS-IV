//Criar 

class Cliente{
    constructor(nome, cpf, valor, modeloCelular, anoCelular, corCelular, loja, nomeAtendente){
        this.nome = nome;
        this.cpf = cpf; 
        this.dataCompra = new Date(); 
        this.valor =valor; 
        this.modeloCelular = modeloCelular; 
        this.anoCelular = anoCelular; 
        this.corCelular = corCelular; 
        this.loja = loja;
        this.nomeAtendente = nomeAtendente;
    }
    // ----BLOCO------
    // descontar(){
    //     if(this.valor < 1500){
    //         return `Terá um desconto de 10%`
    //     } else {
    //         return `Não terá desconto`
    //     }
        //}
    //-----solução com ternário-------
    descontar(){
       const desconto = this.valor < 1500 ? `Terá desconto de 10%` : `Não terá desconto`///armazenar se o valor se terá desconto
       return desconto;
    }

    //**---Criar metodo para verificaCor---***
    // A pessoa que trabalha no estoque inseriu que só  tem a cor Roxo.
    // Faça um metodo que sinalize que está indisponivel as cores dos celulares que não sõa da cor roxo.
        //se cor === false > estoque: Indisponível.
        //senão: Disponível

    //---BLOCO
    // verificaCor(){
    //     if (this.corCelular === 'Roxo'){    
    //         return  `Cor disponivel`
    //     } else {
    //         return  `Cor indisponivel`
    //     }
    //}
    //---RESOLUÇÃO COM TERNÁRIO
    // verificaCor(){
    // const celularCor = this.corCelular === 'Roxo' ? `Cor disponível` : `Cor indisponível`
    // return celularCor
    // }

    //---Deixar todas as letras minusculas toLowerCase
    verificaCor() {
        const celularCor = this.corCelular.toLowerCase();
        const corAparelho = celularCor === 'roxo' ? `Cor disponível` : `Cor indisponível`
        return corAparelho
    }
}






//****cadastrar clientes***
const cliente1 = new Cliente('Dora Barreto ', '223.001.221-29', 2000, 'XXX-12', 2020, 'Amarelo', 'RJ-BR','Joana Maria' 
)

console.log("dados da cliente", cliente1)
console.log(cliente1.descontar())
console.log(cliente1.verificaCor())

console.log('------------------------------')


const cliente2 = new Cliente('Marcela Janino Silva ', '321.101.231-29', 1300, 'XXM-y', 2019, 'Roxo', 'SP-BR','Drielly Gomes Almeida' 
)

console.log("dados da cliente", cliente2)
console.log(cliente2.descontar())
console.log(cliente2.verificaCor())
console.log('------------------------------')
const cliente3 = new Cliente('Raquel Borges Figueredo', '910.311.425-01', 4000, 'MDM-PRO', 2020, 'AZUL', 'MG-BR','Fran Carneiro de Pinha' 
)

console.log("dados da cliente", cliente3)
console.log(cliente3.descontar())
console.log(cliente3.verificaCor())


//console.table(["dados da cliente", cliente1, cliente2, cliente3,])// mostra o console em tabela anto no node quanto no Browser