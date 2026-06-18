function horario(nombre){

    alert(
        "La iglesia " + nombre+
        " está abierta de lunes a domingo.\nHorario: 8:00 a.m. - 5:00 p.m."
    );

}
const buscar = document.getElementById("buscar");

buscar.addEventListener("keyup", function(){

    const texto = buscar.value.toLowerCase();

    const tarjetas = document.querySelectorAll(".tarjeta");

    tarjetas.forEach(function(tarjeta){

        if(
            tarjeta.innerText.toLowerCase().includes(texto)
        ){

            tarjeta.style.display = "block";

        }else{

            tarjeta.style.display = "none";

        }

    });

});

/*=========================
    MODO CLARO / OSCURO
=========================*/

const botonTema = document.getElementById("tema");

botonTema.addEventListener("click", function(){

    document.body.classList.toggle("oscuro");

    if(document.body.classList.contains("oscuro")){

        botonTema.innerHTML = " Modo Claro";

    }else{

        botonTema.innerHTML = " Modo Oscuro";

    }

});
/*=========================
    FORMULARIO
=========================*/

const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    alert("¡Gracias por contactarnos! ");

    formulario.reset();

});