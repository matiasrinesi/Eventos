// Ingresar Jugadores a la consola


class Jugador {
    constructor(nombre, apellido, edad) {
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
    }
}
const jugadores = []

const form = document.getElementById(`idForm`)
const botonJugadores = document.getElementById(`botonJugadores`)
const divJugadores = document.getElementById(`divJugadores`)

form.addEventListener(`submit`, (event) => {
    event.preventDefault()
    let nombre = document.getElementById(`idNombre`).value
    let apellido = document.getElementById(`idApellido`).value
    let edad = document.getElementById(`idEdad`).value

    const jugador = new Jugador (nombre, apellido, edad)
    jugadores.push(jugador)
    console.log(jugadores)

    form.reset()
})

botonJugadores.addEventListener(`click`, () => {
    jugadores.forEach(jugador => {
        divJugadores.innerHTML +=
        `
        <div class="card" style="width: 18rem; margin: 5px;">
  
            <div class="card-body">
            <h5 class="card-title">${jugador.apellido}</h5>
            <p class="card-text">${jugador.nombre}</p>
            <p class="card-text">${jugador.edad}</p>
            </div>
</div>
        `
    })
})


// Utilizar enter para cargar un nombre en la consola con el metodo change
const input1 = document.getElementById(`input1`)
const boton1 = document.getElementById("boton1")

input1.addEventListener(`change`, () => { 
    console.log(input1.value)
})