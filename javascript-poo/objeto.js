//Objeto
const pessoa = { nome: 'Victor', idade: 21 }

console.log(pessoa.nome)

const quadrado = {
  calcularArea: function (base, altura) {
    return base * altura
  }
}

console.log(quadrado.calcularArea(10, 30))

/*----------------------------- */

const pessoab = {
  vetor: [{ nome: 'Victor', sobrenome: 'de Sa' }],

  adicionar: function () {
    this.vetor.push(contato)
  }
}

pessoa.adicionar('Carla', 'Vieira')

console.log(pessoab.vetor())
