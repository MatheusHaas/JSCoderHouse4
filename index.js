let entrada = '';
let numeros = []
let numerosNaoUtilizados = []

class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = parseInt(idade)
    }
    mandarSalve(){
        const d = new Date()
        let year = d.getFullYear()
        console.log("Ola "+ this.nome +". Identificado que você nasceu no ano de: " + (year - this.idade))
    }
}

let nome = prompt("Informe seu nome")
let idade = parseInt(prompt("Informe sua idade"))
let pessoa = new Pessoa(nome, idade)

function juntaValores(numeros, numerosNaoUtilizados){
    let novosNumeros = numeros.join(", ")
    alert(pessoa.nome + " com a idade: "+ pessoa.idade + "\nInformou os números abaixo:\n" + "Números inteiros, divisíveis por 2, digitados são: " + novosNumeros + "\nVeja o log para ver números não mostrados.")
    let novosNumerosNaoUtilizados = numerosNaoUtilizados.join(", ")
    console.log(novosNumerosNaoUtilizados)
}

function validaNumero(valor){
    if(valor % 2 == 0){
        numeros.push(valor)
    } else {
        numerosNaoUtilizados.push(valor)
    }
}

while (entrada.toLowerCase() !== 'fim') {
    entrada = prompt('Digite um valor\n ou digite "fim" para encerrar):');
    if (entrada.toLowerCase() !== 'fim') {
        let entradaConvertida = parseInt(entrada)
        validaNumero(entradaConvertida)
    }
}
juntaValores(numeros, numerosNaoUtilizados)
pessoa.mandarSalve()
alert('Programa encerrado.');
console.log('Programa encerrado.');
