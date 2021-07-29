class Calculadora {
  constructor(num1, num2) {
    this.num1 = num1
    this.num2 = num2
  }

  somar(num1, num2) {
    return num1 + num2
  }

  subtrair(num1, num2) {
    return num1 - num2
  }

  multiplicar(num1, num2) {
    return num1 * num2
  }

  dividir(num1, num2) {
    return num1 / num2
  }

  resto(num1, num2) {
    return num1 % num2
  }
}

const calculadora = new Calculadora()
console.log(calculadora.somar(8, 2))
