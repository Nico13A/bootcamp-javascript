class Usuario {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
    }

    /*
    El constructor se utiliza para construir (inicializar) una instancia específica de la clase.
    El constructor es, de hecho, un método especial en una clase que se utiliza 
    para inicializar objetos de esa clase. 
    Se llama automáticamente cuando se crea una nueva instancia de la clase.
    */

    get saludar() {
        return `Hola soy ${this.nombre}`;
    }

}
/*
const usuario1 = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 40,
    saludar: function () {
        return `Hola soy ${this.nombre}`;
    }
}

const usuario2 = {
    nombre: "Pedro",
    apellido: "Gutierrez",
    edad: 32,
    saludar: function () {
        return `Hola soy ${this.nombre}`;
    }
}
*/

//INSTANCIA
const usuario1 = new Usuario("Juan", "Perez", 40);
const usuario2 = new Usuario("Pedro", "Gutierrez", 32)

console.log(usuario1.nombre);// Juan
console.log(usuario1.saludar);// Hola soy Juan
