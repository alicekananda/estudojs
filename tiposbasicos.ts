// Fáceis (Primitivos)

// Boolean
// a camisa é preta
let isDone: boolean = true;
let pink: boolean = false;

// Number
// qual a sua idade
let decimal: number = 19;
// como é preto em hexadecimal
let blackHex: number = 0xf00d;
// binário
let binary: number = 0b1010;
// octal
let octal: number = 0o744;
// bigint
let big: bigint = 100n;

// Char
let letter: string = 'a';

// String
let firstName: string = 'alice';

// Array []
// posição 0 do array number = 1; (numbers[0])
// posição 1 do array number = 2; (numbers[1])
// posição 3 do array number = 4; (numbers[3])

let numbers: number[] = [1, 2, 3, 4];
let fruits: string[] = ['banana', 'apple', 'orange'];

// Difíceis

// Tuple
let bananaPrice: [string, number] = ['banana', 10];

// Enum
enum Color {
    Red,
    Green,
    Blue,
}

let alice: Color = Color.Green;

// Null or undefined
let n: null = null;
let u: undefined = undefined;

// Objeto
let dog = {
    age: 20,
    name: 'nicky',
    peso: 2.7
};