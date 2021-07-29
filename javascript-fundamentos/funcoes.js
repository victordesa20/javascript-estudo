//Declaração de funções
function escreva() {
  console.log('Olá Mundo')
}

function somar(x, y) {
  return x + y
}

//Declarando dentro de um const
const somando = function (a, b) {
  return a + b
}

//Declaradno função de "flecha"
const subtraindo = (a, b) => a - b

//Chamando cada uma das funções
escreva()

let resultado = somar(10, 20)
console.log(resultado)

console.log(somando(1, 5))

console.log(subtraindo(10, 2))
