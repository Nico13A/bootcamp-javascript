/*
console.error("Esto es un error");
console.warn("Esto es una advertencia");
console.info("Esto es una información");
*/

let variable = 1;
variable = 2;
const constante = 3;
var variable2 = 4

console.log(variable);
console.log(constante);
console.log(variable2);

function testLet() {
    let x = 10;
    console.log(x);
    if (true) {
        console.log(x);
        let x = 20;
        console.log(x);
    }
    console.log(x);
}

//testLet(); Este me tira error porque x esta inicializado despues del log.

function testVar() {
    var x = 10;
    console.log(x);
    if (true) {
        console.log(x);
        var x = 20;
        console.log(x);
    }
    console.log(x);
}

testVar();