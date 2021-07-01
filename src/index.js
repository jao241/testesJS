//Não se pode utilizar o this. numa arrow function.
// let soma = x => x + this.x;
// let soma = x => x + x;
// console.log(soma(2))

// function numeroAleatorio(x) {
//   return ((Math.random() * x)).toFixed(0);
// }

// console.log(numeroAleatorio(10))

// function verificaTipoDado(x) {
//   let tipo = typeof x;
//   let tiposValidos = ['string', 'number', 'boolean'];
//   for(let type of tiposValidos){
//     if(type === tipo){
//       console.log(`O tipo do dado '${x}' é -> ${tipo}.`);
//     }
//   }

// }

// verificaTipoDado("oi");
// verificaTipoDado(true);
// verificaTipoDado(1);

// function tornaPositivo(x = 0){
//   return Math.abs(x);
// }

// console.log(tornaPositivo(-12))

// function contaLetras(texto) {
//   let tamanhoTexto = texto.length;
//   if (tamanhoTexto > 10) {
//     console.log("Texto muito longo.");
//   }
//   if (tamanhoTexto <= 10) {
//     console.log("Texto dentro do limite.");
//   }
// }

// contaLetras("ola, bom dia!");
// contaLetras("Bem vindo!");

// function decrementaValor(num) {
//   for (let x = num; x > 0; x--) {
//     if (x % 2 === 0) {
//       console.log(`Número par: ${x}`);
//     }
//   }
// }

// decrementaValor(29);

// let arrayNum = [1,2,3,4,5];
// console.log()

// let estadoCivil = {
//   estadoCivil: "Solteiro"
// };

// Object.assign(pessoa, estadoCivil);

// delete pessoa.peso;
// pessoa.peso = 80;
// console.log(pessoa);

// console.log(Object.keys(pessoa))

// let pessoa = {
//   nome: "Joao",
//   idade: 19,
//   peso: 80.0
// };

// let pessoa3 = {
//   nome: "Joao",
//   idade: 19,
//   peso: 80.0
// };

// let pessoa2 = pessoa;
// console.log(pessoa2 === pessoa)
// pessoa2.nome = 'carol';

let vetorNomes = ["João", "Carol", "Leandro", "Carol", "Kátia"];

// vetorNomes.pop();
// vetorNomes.pop();
// vetorNomes.pop();
// console.log(vetorNomes)
// vetorNomes.push('Carlos', 'Maria', 'José');
// vetorNomes.shift();
// vetorNomes.shift();
// vetorNomes.shift();
// vetorNomes.unshift('Leandro', 'Kátia', 'Carol', 'João')
// vetorNomes.pop()

console.log(vetorNomes.indexOf("Carol"));
console.log(vetorNomes.lastIndexOf("Carol"));

// let nomeRemovido = vetorNomes.pop();
// console.log(nomeRemovido);
// console.log(vetorNomes);
// vetorNomes.push('Kátia')

// let nomeRemovido = vetorNomes.shift();
// console.log(nomeRemovido);
// vetorNomes.unshift('João');
// console.log(vetorNomes)
