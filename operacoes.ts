// Operações
// Boolean
// Descobrir se a camisa é preta (positivo: 'a camisa é preta') (negativo: 'a camisa não é preta')
let black = true;

if (black == true) {
    console.log('a camisa é preta')
} else {
    console.log('a camisa não é preta')
}

// Number
// Se você é maior de 18 anos
let age = 30;

if (age > 18) {
    console.log('maior de 18 anos')
} else {
    console.log('menor de 18 anos')
}

// Se você tem 18 anos
if (age == 18) {
    console.log('tem 18 anos')
} else {
    console.log('não tem 18 anos')
}

// Idade diferente de 18 anos
if (age != 18) {
    console.log('é diferente de 18 anos')
} else {
    console.log('é igual a 18 anos')
}

// Você tem ou é maior de 18 anos
if (age >= 18) {
    console.log('é maior ou igual a 18 anos')
} else {
    console.log('é menor de 18 anos')
}

// Você tem ou é menor de 18 anos
if (age <= 18) {
    console.log('é maior ou igual a 18 anos')
} else {
    console.log('é menor de 18 anos')
}

let aresta = 6;
let somaArestasQuadrado = aresta * 4;

let alturaRetangulo = 7;
let larguraRetangulo = 10;
let somaAlturaLarguraRetangulo = alturaRetangulo + larguraRetangulo;

// em litros
let capacidadeGarrafa = 0.4;
let metadeCapacidadeGarrafa = 0.4 / 2;

// volume de um cilindro
let pi = 3.14159;
let diametro = 10;
let raio = diametro / 2;
let altura = 60;

// Volume = pi * raio^2 * altura
let volumeCilindro = pi * (raio * raio) * altura;

// Char ou String
let firstName = 'alice';
let firstLetter = 'a';

if (firstName == 'alice') {
    console.log('o nome é alice')
}

if (firstLetter == 'a') {
    console.log('primeira letra do nome é "a"');
}

// Concatenação
let lastName = 'silva';

let fullName = firstName + " " + lastName;
let templateString = `${firstName} ${lastName}`;
let apelido = `${firstName}_${lastName}_${Math.random()}`

// Tamanho string
let nameLength = firstName.length;

// Transformar string em maísculo
firstName.toUpperCase();

// Transformar string em minúsculo
firstName.toLowerCase();


// Array
let cart = [];

cart[0] = 'tenis';
cart[1] = 'bermuda';

// Fila (insere no final) - primeiro a chegar, primeiro a sair FIFO
cart.push('tenis');
cart.push('bermuda');

// Pilha (insere no começo) - primeiro a chegar, ultimo a sair FILO
cart.unshift('meia');

// Tamanho do array
let tamanhoArray = cart.length;

