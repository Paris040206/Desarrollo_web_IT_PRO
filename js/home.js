//Declarar variables
const cerrar = document.querySelector("#cerrarSesion");
const mensaje = document.querySelector("#mensaje");
const sesion = document.querySelector("#sesion");
const btnInicio = document.querySelector("#irInicio"); //Nuevo
const API_BASE_URL="http://localhost:3000";
const contenedorDatos = document.querySelector("#contenedorDatos");
const estadoDatos = document.querySelector("#estadoDatos");
const btnCargarDatos = document.querySelector("#cargarDatos");
const btnRegistro_material = document.querySelector("#registrarMateriales");


//Definir flujo
cerrar.addEventListener("click",cerrarSesion)
btnInicio.addEventListener("click", function(){window.location.href = "../index.html"});
btnRegistro_material.addEventListener("click", function(){window.location.href = "../pages/registro_materiales.html"});
btnCargarDatos.addEventListener("click", cargarDatos);

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

async function cargarDatos() {
    estadoDatos.textContent="Consultando materiales...";
    contenedorDatos.replaceChildren();
    try{
        const respuesta = await fetch(API_BASE_URL + "/api/Proyecto_Materiales");
        const resultado = await respuesta.json();

        if(!respuesta.ok || resultado.status != "success"){
            throw new Error("El API no pudo consultar los datos");
        }

        if(resultado.data.length == 0){
            estadoDatos.textContent = "No hay materiales registrados";
            return;
        }

        resultado.data.forEach(material => {
            const card=document.createElement("article");
            card.className="card-material";

            const formula = document.createElement("h3")
            formula.textContent = material.formula
            const microestructura = document.createElement("p")
            microestructura.textContent = material.microestructura
            const id_estructura = document.createElement("p")
            id_estructura.textContent = material.id_estructura
            const id_fuente = document.createElement("p")
            id_fuente.textContent = material.id_fuente

            //const metodo = document.createElement("p")
            //metodo.textContent = material.nombre_metodo

            card.append(formula, microestructura, id_estructura, id_fuente)
            
            //card.append(formula, microestructura, metodo)
            contenedorDatos.appendChild(card)
        });

    }catch(error){
        console.log("Error al cargar los datos: " + error);
        estadoDatos.textContent="No fue posible cargar los materiales. Revisa la conexión";
    }
    
}