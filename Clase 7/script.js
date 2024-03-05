function obtenerFecha() {
    //const fechaActual = new Date();
    const fechaNacimiento = new Date(1998, 6, 13);
    const fechaActual = new Date();

    const diferencia = fechaActual - fechaNacimiento;
    const diferenciaDias = Math.floor(diferencia / (24*60*60*1000));
    //alert(diferenciaDias);

    const options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    };
    alert(fechaActual.toLocaleDateString("es-ES", options));

    const pFecha = document.getElementById("fecha");
    //pFecha.innerHTML = fechaActual.getDate() + "-" + fechaActual.getMonth() + "-" + fechaActual.getFullYear();
    //pFecha.innerHTML = fechaActual.getDay();
    const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Sábado"];
    //pFecha.innerHTML = dias[fechaActual.getDay()] + " " + fechaActual.getDate() + "-" + (fechaActual.getMonth()+1) + "-" + fechaActual.getFullYear();
    pFecha.innerHTML = dias[fechaActual.getDay()] + " " + fechaActual.getDate() + "-" + (fechaActual.getMonth()+1) + "-" + fechaActual.getFullYear();
}