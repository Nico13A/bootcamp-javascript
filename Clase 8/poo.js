'use strict';
/*
Nos va a servir para por ejemplo a un getter le queramos asignar un valor, osea no nos va a 
dejar hacer eso, pero dsp acceder a la edad como hicimos asi:
console.log(juancito._edad) te accede igual, no es suficiente.
*/

class Usuario {
    constructor(nombre, apellido) {
        this.nombre = nombre;
        this.apellido = apellido;
    }

    //GETTER
    /*
    Los getters son funciones que devuelven algo, pero que son tratados como una propiedad.
    */

    get nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }

    /*
    nombreCompleto() {
        return `${this.nombre} ${this.apellido}`;
    }
    */

    //SETTER
    /*
    Parecidos a los getters pero pueden recibir.
    */
    set edad(valor) {
        this._edad = valor;
    }
    //El guion bajo significa propiedad privada.

    get edad() {
        return this._edad;
    }

}


//INSTANCIA
const juancito = new Usuario("Juan", "Perez");
console.log(juancito);// Usuario { nombre: "Juan", apellido: "Perez" }
console.log(juancito.nombre);// Juan
//console.log(juancito.nombreCompleto());// Juan Perez
console.log(juancito.nombreCompleto);

juancito.nombre = "Pedro";
console.log(juancito.nombre);// Pedro

//juancito.nombreCompleto = "Pedro Ramirez";
console.log(juancito.nombreCompleto);// Pedro Perez
//OBS. El getter no puede recibir valores a diferencia de las otras propiedades.

juancito.edad = 32;
//console.log(juancito.edad);//undefined
// No se puede acceder porque es un set y no un get.
//console.log(juancito._edad);//32
console.log(juancito.edad);


