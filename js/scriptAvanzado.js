const pizarron = document.querySelector("#resultado");
// Ej 1. Objetos y arreglos en JavaScript

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

pizarron.innerHTML = "<br>El alumno " + alumno.nombre + " tiene las siguientes calificaciones: " + calificaciones.join(", ") + ".";

// Ej 2. Funciones
function saludar(){
    pizarron.innerHTML = "<br>Hola "+alumno.nombre; //Se usa para todo
}

// Ej 3. Propiedades y métodos en JS
let profe = {
    numTrabajador: "897047",
    nombre: "Marco",
    apellido_paterno: "Delgado",
    apellido_materno: "Gonzales",
    clase: "Ecuaciones diferenciales",
    nombreCompleto(){
        return this.nombre + " " + this.apellido_paterno + " " + this.apellido_materno
    }
}

pizarron.innerHTML+="<br>"+ profe.nombreCompleto();



