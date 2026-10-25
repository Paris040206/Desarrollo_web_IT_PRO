//Definir elementos DOM
const formRegistro = document.querySelector("#formRegistro");
// const formLogin = document.querySelector("#formLogin");
const mensaje = document.querySelector("#mensaje");
// const sesion = document.querySelector("#sesion");
// const cerrar = document.querySelector("#cerrarSesion");

//Definir flujo
formRegistro.addEventListener("submit", registrarUsuario);
//formLogin.addEventListener("submit", iniciarSesion);
//cerrar.addEventListener("click",cerrarSesion)

//Definir funciones
function mostrarMensaje(texto){
    mensaje.textContent = texto;
}

function registrarUsuario(event){
     event.preventDefault();

     let nombre = document.querySelector("#nombreRegistro").value.trim();
     let correo = document.querySelector("#correoRegistro").value.trim();
     let contra = document.querySelector("#passwordRegistro").value.trim();
     let usuariosRegistrados = [];

     if(nombre==""||correo==""||contra==""){
         mostrarMensaje("Todos los campos son obligatorios")
     }else if(contra.length<8){
         mostrarMensaje("La contraseña debe ser de mínimo 8 caracteres")
     }else{
         usuariosRegistrados.push(
             {
                 name: nombre,
                 email: correo,
                 password: contra
             }
         );
         localStorage.setItem("usuarios", JSON.stringify(usuariosRegistrados));
         mostrarMensaje("Usuario registrado")
         formRegistro.reset();
         window.location.href = "../index.html";
     }

}