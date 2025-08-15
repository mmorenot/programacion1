let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3


function iniciarjuego() {
    let sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none' 

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'
    
    let botonMascotaJugador = document.getElementById('boton-mascota')
    botonMascotaJugador.addEventListener ('click', SeleccionarMascotaJugador)

    let botonFuego  = document.getElementById('boton-fuego')
    botonFuego.addEventListener ('click' , ataqueFuego)
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.addEventListener ('click' , ataqueAgua)
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.addEventListener ('click' , ataqueTierra)

    let botonReiniciar =document.getElementById('boton-reiniciar')
    botonReiniciar.addEventListener ('click', reiniciarJuego)
    
}

function SeleccionarMascotaJugador() {
    let sectionSeleccionarMascota = document.getElementById('Seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none' // la propiedad .display ayuda a ocultar seccion = none, la muestra = block
    
    let sectionSeleccionarAtaque = document.getElementById('Seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block' // la propiedad .display ayuda a ocultar seccion = none, la muestra = block

    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputRatigueya = document.getElementById("ratigueya")
    let inputLangostelvis = document.getElementById("langostelvis")
    let inputTucapalma = document.getElementById("tucapalma")
    let inputPydos = document.getElementById("pydos")
    let spanMascotaJugador = document.getElementById('mascota-jugador')

   
    if (inputHipodoge.checked){
        spanMascotaJugador.innerHTML = "Hipodoge"
        alert('Seleccionaste a Hipodoge')
    } else if (inputCapipepo.checked){
        spanMascotaJugador.innerHTML = "Capipepo"
        alert('Seleccionaste a Capipepo') 
    } else if (inputRatigueya.checked){
        spanMascotaJugador.innerHTML = "Ratigueya" 
        alert('Seleccionaste a Ratigueya')
    } else if (inputLangostelvis.checked){
        spanMascotaJugador.innerHTML = "Langostelvis"
        alert('Seleccionaste a Langostelvis')
    } else if (inputTucapalma.checked){
        spanMascotaJugador.innerHTML = "Tucapalma"
        alert('Seleccionaste a Tucapalma')
    } else if (inputPydos.checked){
        spanMascotaJugador.innerHTML = "Pydos"
        alert('Seleccionaste a Pydos') 
    } else {
        sectionSeleccionarAtaque.style.display = 'none'
        sectionSeleccionarMascota.style.display = 'block'
        alert("Debes seleccionar Mascota")  
    }

    seleccionarMascotaEnemigo()

}

function seleccionarMascotaEnemigo(){
    let mascotaAleatoria = aleatorio (1 , 6)
    let spanMascotaEnemigo = document.getElementById("mascota-enemigo")

    if (mascotaAleatoria == 1){
        spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if( mascotaAleatoria == 2){
        spanMascotaEnemigo.innerHTML = 'Capipepo' 
    } else if( mascotaAleatoria == 3){
        spanMascotaEnemigo.innerHTML = 'Ratigueya' 
    } else if (mascotaAleatoria == 4){
       spanMascotaEnemigo.innerHTML = 'Langostelvis'
    } else if(mascotaAleatoria == 5){
        spanMascotaEnemigo.innerHTML = 'Tucapalma'
    } else { 
        spanMascotaEnemigo.innerHTML = 'Pydos'
    }
    
          
}

function ataqueFuego() {
    ataqueJugador = 'FUEGO'
    ataqueAletorioEnemigo()
    
}
function ataqueAgua() {
    ataqueJugador = 'AGUA'
    ataqueAletorioEnemigo()
}
function ataqueTierra() {
    ataqueJugador = 'TIERRA'
    ataqueAletorioEnemigo()
}

function ataqueAletorioEnemigo (){
    let ataqueAleatorio = aleatorio (1,3) 

    if (ataqueAleatorio == 1) {
        ataqueEnemigo = 'FUEGO'
    } else if (ataqueAleatorio == 2) {
        ataqueEnemigo = 'AGUA'
    } else {
        ataqueEnemigo = 'TIERRA'
    }
    combate()
    //crearMensaje()
}

function combate(){
    let spanVidasJugador = document.getElementById('vidas-jugador')
    let spanVidasEnemigo = document.getElementById('vidas-enemigo')

    if(ataqueEnemigo == ataqueJugador){
        crearMensaje("Empate")
    }else if(ataqueJugador == 'FUEGO' && ataqueEnemigo == 'TIERRA'){
        crearMensaje("Ganaste")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'AGUA' && ataqueEnemigo == 'FUEGO' ){
        crearMensaje("Ganaste")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else if(ataqueJugador == 'TIERRA' && ataqueEnemigo == 'AGUA' ){
        crearMensaje("Ganaste")
        vidasEnemigo --
        spanVidasEnemigo.innerHTML = vidasEnemigo
    }else{
        crearMensaje("Perdiste")
        vidasJugador --
        spanVidasJugador.innerHTML = vidasJugador
    }

    // REVISAR LAS VIDAS
    revisarVidas()
}

function revisarVidas() {

    if (vidasEnemigo == 0) {
        crearMensajeFinal('Felicitaciones GANASTE 🤗')
    } else if (vidasJugador == 0){
        crearMensajeFinal('Lo siento PERDISTE 😭')
    }
}

function crearMensaje (resultado){
    let sectionMensajes = document.getElementById('mensajes')
   
    let parrafo = document.createElement('p')
    parrafo.innerHTML = 'Tu mascota atacó con ' + ataqueJugador +', la mascota de tu enemigo atacó con ' + ataqueEnemigo + '- ' + resultado

    sectionMensajes.appendChild(parrafo)
}

function crearMensajeFinal (resultadoFinal){
    let sectionMensajes = document.getElementById('mensajes')
   
    let parrafo = document.createElement('p')
    parrafo.innerHTML = resultadoFinal

    sectionMensajes.appendChild(parrafo)

    let botonFuego  = document.getElementById('boton-fuego')
    botonFuego.disabled = true
    let botonAgua = document.getElementById('boton-agua')
    botonAgua.disabled = true
    let botonTierra = document.getElementById('boton-tierra')
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'
}

function reiniciarJuego() {
    location.reload()
}

function aleatorio(min, max){
    return Math.floor(Math.random()*(max-min+1)+min)
}


window.addEventListener('load', iniciarjuego)