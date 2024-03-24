let array1 = [1, 2, 3, 4];
const res = array1.find((e) => {
    return e % 2 == 0;
})

console.log(res);// 2

const resIndex = array1.findIndex((e, i) => {
    console.log("Indice: ", i);
    return e % 2 == 0;
})

console.log(resIndex);// 1

const resMap = array1.map( (e) => e * 2);
console.log(resMap);//[2, 4, 6, 8]



const resFilter = array1.filter((e) => {
    return e % 2 == 0;
})
console.log(resFilter);// [2, 4]
//El FILTER recorre todo el array y devuelve todo lo que coincida con lo buscado.

const paresDuplicados = array1.filter((e) => e % 2 == 0).map((e) => e * 2);
console.log(paresDuplicados);// [4, 8]

let listaDePrecios = [];
var palabras = [
    'Pan',
    'Leche',
    'Queso',
    'Huevo',
    'Manzana',
    'Plátano',
    'Arroz',
    'Frijoles',
    'Aceite',
    'Azúcar',
    'Sal',
    'Pasta',
    'Carne',
    'Pollo',
    'Pescado',
    'Salsa',
    'Yogur',
    'Cereal',
    'Galletas',
    'Chocolate'
];

for (var i = 0; i < palabras.length; i++) {
    listaDePrecios.push({
        idProducto: i + 1,
        nombre: palabras[i],
        categoria: Math.floor(Math.random() * (10 - 1) + 1),
        precio: parseFloat((Math.random() * (500 - 10) + 10).toFixed(2))
    });
}

//console.log('listaDePrecios', listaDePrecios)
const preciosAlterados = listaDePrecios.filter((e) => e.categoria == 4 || e.categoria == 5 || e.categoria == 6).map((e) => {
    return {...e, precio: parseFloat((e.precio * 1.25).toFixed(2))};
}).filter((e) => e.precio >= 300);

//console.log(preciosAlterados);

console.log(array1);// [1, 2, 3, 4]

array1.sort((a, b) => {
    return b - a;
})

console.log(array1);// [4, 3, 2, 1]
//El SORT afecta al array original.
//Si no quiero alterar el array original, le hago una copia y a la copia le aplico el sort.

preciosAlterados.sort((a, b) => {
    return a.precio - b.precio;
})
console.log(preciosAlterados);

listaDePrecios.sort((a, b) => {
    return a.nombre.localeCompare(b.nombre);
}).sort((a, b) => a.categoria - b.categoria);

console.log(listaDePrecios);




let arrayNumeros = [1, 2, 3, 4, 5];

const resReduce0 = arrayNumeros.reduce((x, y) => {
    console.log('a', x)
    console.log('b', y)
    return x > y ? x : y
})

console.log('resReduce0', resReduce0)

// Primera vuelta toma los dos primeros valores en X e Y
// Desde la segunda vuelta en adelante, en X almacenará un resultado, y en Y 
// traera el siguiente elemento.
