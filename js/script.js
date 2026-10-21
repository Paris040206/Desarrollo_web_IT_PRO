//alert("Bienvenido a la clase de desarrollo web");
console.log("Bienvenido a la clase de desarrollo web_oculto");

let nombre = "Paris";
let edad = 20;
let ciudad = "Madrid";
let seMurio = false;
let tieneDinero = null;
let simbolo = Symbol("age");
//var nombre = "Juan";
console.log("Bienvenido a la clase de desarrollo web_oculto " + nombre);

document.getElementById("name").textContent = nombre; //typeof nombre  
document.getElementById("age").textContent = edad;
document.getElementById("city").textContent = ciudad;

function cambiaEdad() {
    edad++;
    document.getElementById("age").textContent = edad;
}