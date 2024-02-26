let miVariable = 10;
console.log(typeof miVariable);//"number"

let miVariable2 = "10";
console.log(typeof miVariable2);//"string"

let nuevaVariable = miVariable + miVariable2;
console.log(typeof nuevaVariable);//"string"

let myNan = NaN;
console.log(typeof myNan);//"number"

//isNaN() lo puedo hacer para verificar si lo que se me paso es un número.
//Un NaN es un texto "convertido" o intento de convertir a number que no se puede convertir.

let vacio = null;
console.log(vacio);//null
console.log(typeof vacio);//"object"

let textVacio = "";
let miUndefined = undefined;

console.log(vacio == miUndefined);//true Aca el valor es el mismo.
console.log(vacio === miUndefined);//false Aca se evalua el tipo tambien.

console.log(123 == "123");//true

let miObjeto = {
    propiedadNumerica: 1,
    propiedadTexto : 'string',
    propiedadObjeto : {
        propiedadNumerica: 1,
        propiedadTexto : 'string'
    },
    propiedadLista: [
        {prop1: 11, prop2: 21},
        {prop1: 12, prop2: 22}
    ]
}

console.log(miObjeto.propiedadNumerica);//1
console.log(miObjeto.propiedadLista[1]);//{prop1: 12, prop2: 22}
console.log(miObjeto.propiedadLista[1].prop2);//22

let matriz = [
    [
        [1, 2, 3],
        [4, 5, 6], 
        [7, 8, 9]
    ],
    [
        [10, 11, 12],
        [13, 14, 15], 
        [16, 17, 18]
    ],
    [
        [19, 20, 21],
        [22, 23, 24], 
        [25, 26, 27]
    ]
]

console.log(matriz[2][2][2]);//27

const persona = {
    nombre: "Eden",
    apellido: "Hazard",
    edad: 35
}

console.log(persona);// {nombre: "Eden", apellido: "Hazard", edad: 35}
persona.edad += 1;
console.log(persona);// {nombre: "Eden", apellido: "Hazard", edad: 36}
persona.ciudad = "Cipolletti";
console.log(persona);// {nombre: "Eden", apellido: "Hazard", edad: 36, ciudad: "Cipolletti"}

//persona = {}; Así me tira error, porque estoy reasignando una constante. Y no se puede.
// Si puedo modificar sus valores internos.