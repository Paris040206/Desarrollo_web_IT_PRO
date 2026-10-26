//Definir elementos DOM
//const formRegistro = document.querySelector("#formRegistro");
const formLogin = document.querySelector("#formLogin");
const mensaje = document.querySelector("#mensaje");
const sesion = document.querySelector("#sesion");
//const cerrar = document.querySelector("#cerrarSesion");
const btnRegistro = document.querySelector("#irRegistro"); //Nuevo

//Definir flujo
//formRegistro.addEventListener("submit", registrarUsuario);
formLogin.addEventListener("submit", iniciarSesion);
//cerrar.addEventListener("click",cerrarSesion)
btnRegistro.addEventListener("click", function(){ window.location.href = "registro.html";}); //Nuevo

recuperarSesion();

//Definir funciones

function mostrarMensaje(texto){
    mensaje.textContent = texto;
}

// function registrarUsuario(event){
//      event.preventDefault();

//      let nombre = document.querySelector("#nombreRegistro").value.trim();
//      let correo = document.querySelector("#correoRegistro").value.trim();
//      let contra = document.querySelector("#passwordRegistro").value.trim();
//      let usuariosRegistrados = [];

//      if(nombre==""||correo==""||contra==""){
//          mostrarMensaje("Todos los campos son obligatorios")
//      }else if(contra.length<8){
//          mostrarMensaje("La contraseña debe ser de mínimo 8 caracteres")
//      }else{
//          usuariosRegistrados.push(
//              {
//                  name: nombre,
//                  email: correo,
//                  password: contra
//              }
//          );
//          localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
//          mostrarMensaje("Usuario registrado")
//          formRegistro.reset();
//      }
// }

function iniciarSesion(event){
    event.preventDefault();

    let correo = document.querySelector("#correoLogin").value;
    let contra = document.querySelector("#passwordLogin").value;

    let usuariosRegistrados = JSON.parse(localStorage.getItem("usuarios") || "[]"); 
    let usuarioLoggeado = usuariosRegistrados.find(function(item){
        return item.email == correo && item.password == contra;
    }
    );

    if(!usuarioLoggeado){
        mostrarMensaje("Credenciales incorrectas");
        return;
    }
    
    let datosSesion ={
        nombre: usuarioLoggeado.name,
        correo: usuarioLoggeado.email
    }

    sessionStorage.setItem("sesionActual", JSON.stringify(datosSesion));
    //mostrarSesion(datosSesion)
    //cerrar.hidden=false;
    //formLogin.reset();
    window.location.href = "home.html";
}

// function recuperarSesion(){
//     try{
//         let datos = sessionStorage.getItem("sesionActual");
//         if(datos){
//             let usuario = JSON.parse(datos);
//             mostrarSesion(usuario);
//             mostrarMensaje("Sesion recuperada");
//             cerrar.hidden=false;
//         }
//     }catch{
//         mostrarMensaje("No fue posible cargar los datos de sesión");
//     }
// }

function recuperarSesion(){
    if(sessionStorage.getItem("sesionActual")){
        window.location.href = "home.html";
    }
}







