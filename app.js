let numeroSecreto = 0;
let numerosSorteados = [];
let intentos = 1;
let numeroMaximo = 10;
let numeroMinimo = 1;


function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;

    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById("numeroUsuario").value);

    if (numeroDeUsuario === numeroSecreto) {
        console.log(intentos)
        //El usuario acerto el numero
        asignarTextoElemento("p", `¡Acertaste el número!, solo tomaste... ${intentos === 1 ? "¡un intento!" : `¡${intentos} intentos!`}`);
        document.getElementById("reiniciar").removeAttribute("disabled");
    }
    else {
        //El usuario no acerto el numero.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento("p", "Pista: el número secreto es menor");
        } 
        else {
            asignarTextoElemento("p", "Pista: el número secreto es mayor");
        }

        intentos++;
        limpiarCaja();
    }

    return;
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + numeroMinimo;
    console.log(numeroGenerado);
    //Si ya sorteamos todos los numeros
    if (numerosSorteados.length == 6) {
        numerosSorteados = [];
        generarNumeroSecreto();

    } else{

        if (numerosSorteados.includes(numeroGenerado)) {
            //Si el numero generado esta en la lista "numerosSorteados", se llamara a si mismo para generar otro numero aleatorio.
            return generarNumeroSecreto();

        } else{
            //Si el numero generado NO esta en la lista "numerosSorteados", se dara el numero generado y se colocara ese mismo numero en la lista "numerosSortados"
            numerosSorteados.push(numeroGenerado);
            console.log(numerosSorteados);

            return numeroGenerado;

        }
    }
}

function limpiarCaja() {
    console.log("limpiar");
    document.querySelector("#numeroUsuario").value = "";
}

function condicionesIniciales() {
    asignarTextoElemento("h1", "Juevo del número secreto");
    asignarTextoElemento("p", `Indica un número del ${numeroMinimo} al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

function reiniciarJuego() {
    //Limpiar la caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar el numero aleatorio
    //Deshabilitar el boton de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");
    //Reiniciar el numero de intentos
    condicionesIniciales();
}

condicionesIniciales();
console.log(numeroSecreto);