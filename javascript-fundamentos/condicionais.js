//Declarando variáveis
var a = 9
let b = 13.5

let c = 'Victor'

//Condicionais
if (a == 10) {
  console.log('Vale 10')
} else if (a < 10) {
  console.log('Menor que 10')
} else {
  console.log('Maior que 10')
}

//Operador Ternário
let paridade = a % 2 == 0 ? console.log('par') : console.log('impar')

//swicth case
let sinal = 'vermelho'

switch (sinal) {
  case 'verde':
    console.log('pode passar')
    break
  case 'amarelo':
    console.log('espere')
    break
  case 'vermelho':
    console.log('PARE!')
    break
}
