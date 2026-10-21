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
let calificaciones = [6, 7, 10];

pizarron.innerHTML = "<br> El alumno " + alumno.nombre + " tiene las siguientes calificaciones: " + calificaciones.join(", ") + ".";

// Ej 2. Funciones
function saludar() {
    let saludo = " fngldfngl";
    pizarron.innerHTML += "<br> Hola " + alumno.nombre + saludo; //Se usa para todo
}

// Ej 3. Propiedades y métodos en JS
let profe = {
    numTrabajador: "897047",
    nombre: "Marco",
    apellido_paterno: "Delgado",
    apellido_materno: "Gonzales",
    clase: "Ecuaciones diferenciales",
    nombreCompleto() {
        return this.nombre + " " + this.apellido_paterno + " " + this.apellido_materno
    }
}

pizarron.innerHTML += "<br>" + profe.nombreCompleto();

// EJ4. Metodos en arrays
//Push y pop
calificaciones.push(5);
pizarron.innerHTML += "<br> Nuevas calificaciones: " + calificaciones.join(", ");
calificaciones.pop();
calificaciones.push(6);
pizarron.innerHTML += "<br> Nuevas calificaciones: " + calificaciones.join(", ");

//filter
let aprobadas = calificaciones.filter(n => n >= 8);
pizarron.innerHTML += "<br> Aprobadas: " + aprobadas.join(", ");
//map
let duplicado =  calificaciones.map(n => n*2);
pizarron.innerHTML += "<br> Duplicado: " + duplicado.join(", "); //+ saludo. Es una variable local de otro lado
//

