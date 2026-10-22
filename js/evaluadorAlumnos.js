const resultado = document.querySelector("#resultado");
const inputNombre =  document.querySelector("#nombre");
const inputCalificacion = document.querySelector("#calificación");
const btnEvaluar = document.querySelector("#evaluar");
//let calificacion = 345;

//Hacerlo con if-else
// if (calificacion >= 9) {
//     resultado.textContent = "Excelente";
// }else if (calificacion >= 6){
//     resultado.textContent = "Pasaste, brutal";
// }
// else{
//     resultado.textContent = "La siguiente lo harás mejor";
// }

// switch(Math.floor(calificacion)){
//     case 10:
//         resultado.textContent = "Excelente";
//         break;
//     case 9:
//         resultado.textContent = "Increible";
//     default:
//         resultado.textContent = "calificación inválida" 
// }   

//Ejemplo ciclo for
// let texto = "";
// let i=0;

// for(let i=0; i<=10; i++){
//     texto+= i + " ";
// }
// resultado.textContent = texto;

// while(i<=10){
//     texto+= i + " ";
//     i++;
// }
// resultado.textContent = texto;

// Ejemplo contar arrays
// let calificaciones = [8,5,7,4,2,10];
// let aprobados=0;

// for(let i=0; i<calificaciones.length;i++){
//     if(calificaciones[i]>=6){
//         aprobados++;
//     }
// }
// resultado.textContent = "Materias aprobadas: " + aprobados

//Ejemplo eventos

btnEvaluar.addEventListener("click",
    function (){
        // resultado.textContent = "Hiciste click en el boton";

         if(inputNombre.value.trim()==""){
             resultado.textContent="Escribe el nombre del alumno";
         }else if(inputCalificacion.value==""){
            resultado.textContent="Escribe la calificación del alumno";
         } else if (inputCalificacion.value>=9){
            resultado.textContent = "Excelente";
            resultado.style.color ="green";
         } else if (inputCalificacion.value>=6){
            resultado.textContent = "Puedes mejorar";
            resultado.style.color ="orange";
         } else {
            resultado.textContent = "A la próxima lo harás mejor";
            resultado.style.color ="red";
         }
    }
)

