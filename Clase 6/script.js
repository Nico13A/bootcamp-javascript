let arrayNumeros = [];

function enviarNumero() {
    const input = document.getElementById("numero");
    const contenedor = document.getElementById("contenedor");
    //contenedor.innerHTML = input.value + "<br>";
    arrayNumeros.push(input.value);

    let inner = '';
    for (let i = 0; i < arrayNumeros.length; i++) {
        inner += arrayNumeros[i] + "<br>";
    }

    contenedor.innerHTML = inner;

}

//contenedor.innerText = Me muestra todo como un string.