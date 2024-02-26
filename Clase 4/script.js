let num1 = 55; //Entero INT
let num2 = 10; 
console.log(num1 + num2);

let num3 = 3.14; //Número decimal FLOAT
let num4 = 2.5;
console.log(num3 + num4);
// FLOAT puede presentar problemas de PRECISIÓN.

console.log(Math.pow(5, 2)); //POTENCIA
console.log(Math.round(1.3));//REDONDEO 1
console.log(Math.round(1.7));// 2
console.log(Math.ceil(1.3));//REDONDEO 2
console.log(Math.ceil(1.7));// 2
console.log(Math.abs(-5));//VALOR ABSOLUTO
console.log(Math.max(5, 1, 3, 10, 21));//MÁXIMO
console.log(Math.min(5, 1, 3, 10, 21));//MÍNIMO

const numeros = [5, 1, 3, 10, 21];
console.log(Math.max(numeros));// NaN
console.log(Math.max.apply(null, numeros));// 21

console.log(Math.random());// Random del 0 al 1
console.log(Math.round(Math.random()*1000));// Random del 0 al 1000

console.log(Math.round(Math.random() * (700 - 600) + 600));// Random del 600 al 700
console.log(Math.round(Math.random() * (700 - 600 + 1) + 600));// Random del 600 al 700 incluido

console.log(Math.floor(1.3));//REDONDEO HACÍA ABAJO 1
console.log(Math.floor(1.7));// 1

console.log(Number.parseInt(5.44));//5
console.log(Number.parseInt(true));//NaN

console.log(Boolean(1));// true
console.log(Boolean(0));// false

console.log(Boolean([]));// true
console.log(Boolean([1, 2, 3]));// true

console.log(Boolean(null));// false
console.log(Boolean(NaN));// false
console.log(Boolean(undefined)); // false

let valorEvaluado = 10;

// > MAYOR
// < MENOR
// >= MAYOR O IGUAL
// <= MENOR O IGUAL
// == IGUAL EN VALOR
// === IGUAL EN VALOR Y TIPO
// != DISTINTO EN VALOR
// !== DISTINTO EN VALOR Y TIPO

if (valorEvaluado > 10) {
    console.log("VERDADERO");
} else {
    console.log("FALSO");
}