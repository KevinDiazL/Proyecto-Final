/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */
let contain = document.querySelector("#container")
let modal = document.querySelector("#modal")
let btnModalOn = document.querySelector("#search")
let btnModalOff = document.querySelector("#btnModalOff")
contain.innerHTML = ``;
import { stays } from "./stays.js"
import { LlenarContenido } from "./render.js"
LlenarContenido(stays, contain)
console.log(stays)

btnModalOn.addEventListener("click", () => {
    modal.classList.remove("hidden");
})

btnModalOff.addEventListener("click", () => {
    modal.classList.add("hidden");
})

modal.addEventListener("click", function (evento) {
    if (evento.target.classList.contains("modal-entero")) {
        modal.classList.add("hidden")
    }
})
