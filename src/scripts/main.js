/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */
let contain = document.querySelector("#container")
let modal = document.querySelector("#modal")
let btnModalOn = document.querySelector("#search")
let btnModalOff = document.querySelector("#btnModalOff")
let inputMovil = document.querySelector(".location1")
let inputDesktop = document.querySelector(".location2")
let btnSearchDesktop = document.querySelector(".search2")
let btnSearchMovil = document.querySelector("#search3")
let btnMas = document.querySelector(".mas")
let btnMenos = document.querySelector(".menos")
let edades = document.querySelector(".valor")
let btnMas2 = document.querySelector(".mas2")
let btnMenos2 = document.querySelector(".menos2")
let edades2 = document.querySelector(".valor2")
let edades3Mobile = document.querySelector(".valor3")
let edades4Desktop = document.querySelector(".valor4")
let contador = 0, contador2 = 0, contador3 = 0;
let listciudad1 = document.querySelector("#ciudades1")
let listciudad2 = document.querySelector("#ciudades2")
let text = document.querySelector("#text")
let text2 = document.querySelector("#text2")
let contadorText = 0;
contain.innerHTML = ``;
import { stays } from "./stays.js"
import { LlenarContenido, filtrado, Skeleton } from "./render.js"

console.log(stays)
LlenarContenido(stays, contain)


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
// Programando logica del filtrado dependiendo de cada boton, pues son dos botones(uno para la version Mobile y otro para la version desktop)

let edades4Int = 0;
let edades3Int = 0;
btnSearchDesktop.addEventListener("click", () => {
    edades4Int = parseInt(edades4Desktop.textContent)
    modal.classList.add("hidden");
    Skeleton(stays, contain)
    setTimeout(() => {
        filtrado(inputDesktop, edades4Int, stays, contain, text2)
        /* text2.textContent = `${contadorText} stays`
        if (contadorText > 12) {
            contadorText = 12;
            text2.textContent = `+${contadorText} stays`
        } */
    }, 3000);
    text.textContent = inputDesktop.value;

})


btnSearchMovil.addEventListener("click", () => {
    modal.classList.add("hidden");
    edades3Int = parseInt(edades3Mobile.textContent)
    Skeleton(stays, contain)
    setTimeout(() => {
        filtrado(inputMovil, edades3Int, stays, contain, text2)
        /* text2.textContent = `${contadorText} stays`
        if (contadorText > 12) {
            contadorText = 12;
            text2.textContent = `+${contadorText} stays`
        } */
    }, 3000);
    text.textContent = inputMovil.value;

})

//---------------------------------------------------------------------------------------------------------------------------//
// logica de los botones de aumentar y disminuir que aparecen en pantalla

btnMas.addEventListener("click", () => {
    btnMas.style.backgroundColor = "#47505f"
    btnMas.style.color = "white"
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
    btnMenos.style.backgroundColor = "#47505f"
    btnMenos.style.color = "white"
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

    btnMas2.style.backgroundColor = "#47505f"
    btnMas2.style.color = "white"
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
    btnMenos2.style.backgroundColor = "#47505f"
    btnMenos2.style.color = "white"
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

//---------------------------------------------------------------------------------------------------------------------------//
// Llenar lista del input con datos provenientes del array de objetos.

let staysCity = [];
stays.forEach(stay => staysCity.push(stay.city));
const newArray = new Set(staysCity)
const ArrSinDuplicados = [...newArray]
ArrSinDuplicados.forEach(element => {
    listciudad1.innerHTML += `<option value="${element}">`
    listciudad2.innerHTML += `<option value="${element}">`
});


