class Quadrado {
  constructor(base, altura) {
    if (isNaN(base) || isNaN(altura)) throw 'informção inválida'
    ;(this.base = base), (this.altura = altura)
    this.cor = undefined
  }
}

const quadrado = new Quadrado(2, 2)
quadrado.cor = 'blue'
console.log(quadrado)
