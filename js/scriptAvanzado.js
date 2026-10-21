// Objetos y arreglos en JavaScript

//Objeto
let alumno = {
    numCuenta: 322273476,
    nombre: "Paris",
    apellido_paterno: "Lozano",
    apellido_materno: "Zúñiga",
    edad: 20,
}

//Array
let calificaciones = [6,7,10];

document.getElementById("resultado").textContent = "El alumno " + alumno.nombre + " tiene las siguientes calificaciones: " + calificaciones.join(", ") + ".";



