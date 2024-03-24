/*
Array = Matriz de 1 x n
*/

const arrayVacio = [];
const numerosPares = [2, 4, 6, 8, 10];
const vocales =['a', 'e', 'i', 'o', 'u'];

const arrayDeLoQueQuieras = [1, true, "FALSE", { edad: 10 }];

const matriz = [
    [1, 3, 5],
    [2, 4, 6]
]

console.log(arrayVacio.length);// 0
console.log(vocales.length);// 5
console.log(vocales[1]);// 'e'

let arrayRaro = ["Elemento1", , 2, 3, 4];
console.log(arrayRaro[1]);// undefined
console.log(arrayRaro.length);// 5

arrayRaro[1] = 40;
console.log(arrayRaro[1]);// 40

arrayRaro[10] = "Pepito";
console.log(arrayRaro[9]);// undefined
console.log(arrayRaro.length);// 11

const numerosImpares = new Array(1, 3, 5, 7, 9);
console.log(numerosImpares);// [1, 3, 5, 7, 9]

const nuevoArrayVacio = Array.of();
console.log(nuevoArrayVacio);// []

const numerosImparesOf = Array.of(1, 3, 5, 7, 9);
console.log(numerosImparesOf);// [1, 3, 5, 7, 9]

const saludo = "Hola";
const arrayDeSaludo = Array.from(saludo);
console.log(arrayDeSaludo);// ["H", "o", "l", "a"]

const nuevoArrayDeSaludo = arrayDeSaludo;// Esto es una referencia, no una copia.
//Por eso el push afecta a ambos.
const copiaArrayDeSaludo = Array.from(arrayDeSaludo);// Copia
const copiaArrayDeSaludo2 = [...arrayDeSaludo];// Copia no tan eficiente como array.from para arrays.
copiaArrayDeSaludo.push("Perrito");
console.log(copiaArrayDeSaludo.length);// 5

console.log(arrayDeSaludo.length);// 4
console.log(nuevoArrayDeSaludo.length);// 4

nuevoArrayDeSaludo.push("s");
console.log(arrayDeSaludo.length);// 5
console.log(nuevoArrayDeSaludo.length);// 5

let texto = "Chau";
let otroTexto = texto;
console.log(texto);// "Chau"
console.log(otroTexto);// "Chau"
otroTexto += "s";
console.log(texto);// "Chau"
console.log(otroTexto);// "Chaus"

let objeto1 = {nombre: "Pedro", edad: 50};
let objeto1Referencia = objeto1; // Referencia
let objeto2 = {...objeto1}; // Copia
let objeto3 = JSON.parse(JSON.stringify(objeto1)); // Copia
objeto2.edad = 60;
console.log(objeto1);// {nombre: "Pedro", edad: 50}
console.log(objeto2);// {nombre: "Pedro", edad: 60}
//Con objetos si sirve mas el operador spread ...

let array1 = [1, 2, 3, 4];
const res = array1.find((e) => {
    return e % 2 == 0;
})
//El FIND solo devuelve el primer elemento que cumpla la condición.
console.log(res);// 2

const resIndex = array1.findIndex((e, i) => {
    console.log("Indice: ", i);
    return e % 2 == 0;
})

console.log(resIndex);// 1

const resMap = array1.map( (e) => e * 2);
console.log(resMap);//[2, 4, 6, 8]