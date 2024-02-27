function decirHola() {
    alert('Hola');
}

function mouseArriba() {
    const R = obtenerRandom(0, 255);
    const G = obtenerRandom(0, 255);
    const B = obtenerRandom(0, 255);

    const txtR = 255 - R;
    const txtG = 255 - G;
    const txtB = 255 - B;

    const bgColor = `rgb(${R}, ${G}, ${B})`;
    const txtColor = `rgb(${txtR}, ${txtG}, ${txtB})`;

    const h1Clase5 = document.getElementById("h1Clase5");

    h1Clase5.style.backgroundColor = bgColor;
    h1Clase5.style.color = txtColor;

}

function obtenerRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateH1() {
    const inputText = document.getElementById("nuevoTitulo");
    const h1Clase5 = document.getElementById("h1Clase5");

    if (inputText.value == '') {
        alert('Debes completar el nuevo título');
        inputText.focus();
        return;
    }

    h1Clase5.innerHTML = inputText.value;
    inputText.value = '';

}