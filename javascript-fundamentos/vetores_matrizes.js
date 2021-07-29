//Declarção
let vetor = [10, 20, 30, 40, 50]
vetor[2] = 'Trinta' //Alterando vetor na posição 2
console.log(vetor[2])

//Vetor Vazio
let vetorvazio = []
for (let i = 0; i < 10; i++) {
  vetorvazio.push(i)
}
console.log(vetorvazio)

//Percorrer vetor
let vetor2 = ['Um', 'Dois', 'Quatro']
for (let numero of vetor2) {
  console.log(numero)
}

for (let indice in vetor2) {
  console.log(vetor2[indice])
}
//------------------------------------------

//Matriz
let matriz = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]

//Percorrendo Matriz
for (let linha of matriz) {
  for (let elemento of linha) {
    console.log(elemento)
  }
}
