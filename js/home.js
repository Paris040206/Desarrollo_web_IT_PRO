//Declarar variables
const cerrar = document.querySelector("#cerrarSesion");
const mensaje = document.querySelector("#mensaje");
const sesion = document.querySelector("#sesion");
const btnInicio = document.querySelector("#irInicio"); //Nuevo

//Definir flujo
cerrar.addEventListener("click",cerrarSesion)
btnInicio.addEventListener("click", function(){window.location.href = "../index.html"});

recuperarSesion();

//Definir funciones
function mostrarMensaje(texto){
    mensaje.textContent = texto;
}

function cerrarSesion(){
    sessionStorage.removeItem("sesionActual");
    sesion.textContent="";
    cerrar.hidden=true;
    mostrarMensaje("Cerraste sesión :)")
    window.location.href = "../index.html";
}

function recuperarSesion(){
    try{
        let datos = sessionStorage.getItem("sesionActual");
        if(datos){
            let usuario = JSON.parse(datos);
            mostrarSesion(usuario);
            mostrarMensaje("Sesion recuperada");
            cerrar.hidden=false;
        }
    }catch{
        mostrarMensaje("No fue posible cargar los datos de sesión");
    }
}

function mostrarSesion(usuario){
    mensaje.textContent = "Iniciaste sesión correctamente";
    sesion.textContent = "Bienvenido al sistema "+ usuario.nombre;
}