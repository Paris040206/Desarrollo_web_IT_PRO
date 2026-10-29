const API_BASE_URL ="https://neutral-cowboy-pts-engage.trycloudflare.com";

const formMaterial=document.querySelector("#formMaterial");
const mensaje=document.querySelector("#mensaje");
const btnirHome=document.querySelector("#irHome");

btnirHome.addEventListener("click", function(){ window.location.href = "home.html";}); 


async function enviarPOST(datos) {
    const respuesta = await fetch(API_BASE_URL + "/api/Proyecto_Materiales", {
        method: "POST",
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(datos)
    });

    const resultado = await respuesta.json();

    if(!respuesta.ok || resultado.status!="success"){
        throw new Error(
            resultado.message
        );
    }

    return resultado;
}

formMaterial.addEventListener("submit", async function (event) {
    event.preventDefault();

    const datos = {
        formula: document.querySelector("#formula").value.trim(),
        microestructura: document.querySelector("#microestructura").value.trim(),
        id_estructura: Number(document.querySelector("#id_estructura").value),
        id_fuente: Number(document.querySelector("#id_fuente").value)
    };
    try{
        const resultado = await enviarPOST(datos);
        mensaje.textContent = resultado.message;
        formMaterial.reset();
        //window.location="home.html";
    }catch(error){
        mensaje.textContent=error.message;
    }
    
})

