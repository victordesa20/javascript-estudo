//Criando funções

const somar = (a, b) => a + b
const subtrair = (a, b) => a - b
const dividir = (a, b) => a / b
const multiplicar = (a, b) => a * b

//Podemos criar uma função que recebe outra função como parâmetro
const aplicandoOperacoes = (a, b, operacao) => operacao(a, b)

//Criando variável que recebe a chamada da função
let resultado = aplicandoOperacoes(5, 3, multiplicar)

//Imprimindo a variável
console.log(resultado)

//Podemos retornar uma função
const somarX = x => y => x + y

const somar2 = somarX(2)

console.log(somar2(5))
