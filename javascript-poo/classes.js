//Criando classes com construtores
class Pessoa {
  constructor(nome, idade) {
    this.nome = nome
    this.idade = idade
  }
}

class Brinquedo {
  constructor(nome, cor, tipo) {
    this.nome = nome
    this.cor = cor
    this.tipo = tipo
  }
}

class Loja {
  constructor(nome, rua, bairro, telefone) {
    this.nome = nome
    this.rua = rua
    this.bairro = bairro
    this.telefone = telefone
  }
}

//Criando objetos, istanciando a partir da classe
const pessoa1 = new Pessoa('Carlos', 20)
const pessoa2 = new Pessoa('João', 36)

const brinquedo1 = new Brinquedo('bolinha', 'azul', 'bola')
const brinquedo2 = new Brinquedo('MaxSteel', 'verde', 'boneco')

const loja1 = new Loja('Renner', 02, 'Bairro Comercial', 000000000)

//Chamando objetos
console.log(pessoa1)
console.log(pessoa2)

console.log(brinquedo1.cor)
console.log(brinquedo2)

console.log(loja1)
