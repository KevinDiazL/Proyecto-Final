/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */
let contain = document.querySelector("#container")
let modal = document.querySelector("#modal")
let btnModalOn = document.querySelector("#search")
let btnModalOff = document.querySelector("#btnModalOff")
let input1 = document.querySelector("#City")
let input2 = document.querySelector("#City2")
let btnSearch = document.querySelector(".search2")
let btnSearch2 = document.querySelector("#search3")
let btnMas = document.querySelector(".mas")
let btnMenos = document.querySelector(".menos")
let edades = document.querySelector(".valor")
let btnMas2 = document.querySelector(".mas2")
let btnMenos2 = document.querySelector(".menos2")
let edades2 = document.querySelector(".valor2")
let edades3Mobile = document.querySelector(".valor3")
let edades4Desktop = document.querySelector(".valor4")
let contenido;
let contador = 0, contador2 = 0, contador3 = 0;
contain.innerHTML = ``;
import { stays } from "./stays.js"
import { LlenarContenido } from "./render.js"

console.log(stays)

//---------------------------------------------------------------------------------------------------------------------------//
// Implementacion de modal
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

//---------------------------------------------------------------------------------------------------------------------------//

btnSearch.addEventListener("click", () => {
    modal.classList.add("hidden");
})

btnSearch2.addEventListener("click", () => {
    modal.classList.add("hidden");
})

//---------------------------------------------------------------------------------------------------------------------------//
// logica de los botones de aumentar y disminuir que aparecen en pantalla

btnMas.addEventListener("click", () => {
    btnMas.style.backgroundColor = ""

    if (contador >= 0 && contador < 10) {
        if (contador3 < 10) {
            contador++;
            edades.textContent = contador;
            btnMas.disabled = false;
            contador3 = contador + contador2;
            edades3Mobile.textContent = contador3;
            edades4Desktop.textContent = contador3;
        }
    }

})

btnMenos.addEventListener("click", () => {
    if (contador > 0 && contador <= 10) {
        contador = contador - 1;
        edades.textContent = contador;
        contador3 = contador + contador2;
        edades3Mobile.textContent = contador3;
        edades4Desktop.textContent = contador3;
    }
    console.log("Hola")
})

btnMas2.addEventListener("click", () => {
    btnMas.style.backgroundColor = ""

    if (contador2 >= 0 && contador2 < 10) {
        if (contador3 < 10) {
            contador2++;
            edades2.textContent = contador2;
            btnMas2.disabled = false;
            contador3 = contador + contador2;
            edades3Mobile.textContent = contador3;
            edades4Desktop.textContent = contador3;
        }

    }

})

btnMenos2.addEventListener("click", () => {
    if (contador2 > 0 && contador2 <= 10) {
        contador2 = contador2 - 1;
        edades2.textContent = contador2;
        contador3 = contador + contador2;
        edades3Mobile.textContent = contador3;
        edades4Desktop.textContent = contador3;
    }
    console.log("Hola")
})

if (contador3 > 10) {
    contador3 = 10;
}




if (contenido == undefined) {
    LlenarContenido(stays, contain)
}


/* input1.addEventListener("input", function (e) {
    contenido = e.target.value;
    if (e.target.value === "") {
        contain.innerHTML = ``;
        LlenarContenido(stays, contain)
    }
    else {
        console.log("Hola")
        contain.innerHTML = ``;
    }

})
input2.addEventListener("input", function (e) {
    contenido = e.target.value;
    if (e.target.value === "") {
        contain.innerHTML = ``;
        LlenarContenido(stays, contain)
    }
    else {
        contain.innerHTML = ``;
        console.log("Hola")
    }
}) */

