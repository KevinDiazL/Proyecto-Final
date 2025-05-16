/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */
function LlenarContenido(arr, contain) {
    arr.forEach(element => {
        contain.innerHTML += `<article class="p-2 text-justify w-[260px] xl:w-[400px] xl:max-h-[380px] hover:border-2 hover:border-black duration-75">
                <div class=" overflow-hidden object-center ">
                     <img class="rounded-lg h-[200px] xl:h-[300px] xl:w-[450px] w-[300px] object-cover object-position: center" src="${element.photo}" alt="" >
                </div>
                <div class="text-justify p-1 lg:tracking-tight">
                    <div class="flex flex-row justify-between">
                    <div class="flex flex-row lg:tracking-tight">
                    ${superHostAdd(element)}
                        <p class="text-gray-500 text-[14px] ml-1.5"> ${element.type} ${bednumber(element)} beds</p>
                    </div>
                        <div class="flex flex-row lg:text-overflow">
                            <svg fill="orange" class="w-4 h-full mx-1 " viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg" class="icon">
                                <path
                                    d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                            </svg>
                            <p class="mx-1">${element.rating}</p>
                        </div>
                    </div>
                    <h4 class="text-justify">${element.title}</h4>
                </div>
            </article>`
    });
}

function superHostAdd(dato) {
    if (dato.superHost == true) {
        return `<span class="border-2 py-1 px-2 rounded-2xl text-[10px]">SUPERHOST</span>`
    }
    else {
        return ""
    }

}

function bednumber(dato) {
    if (dato.beds != null) {
        return dato.beds
    }
    else {
        return "0"
    }

}
export { LlenarContenido, filtrado, Skeleton };

function filtrado(location, guest, array, contenedor, text) {
    contenedor.innerHTML = ``;
    let contador = 0

    if (location.value != "" && guest != 0) {
        console.log("ingresaron todo");
        array.forEach(element => {
            if (element.city.includes(location.value) && element.maxGuests == guest) {
                console.log("ambos")
                contador++;
                contenedor.innerHTML += `<article class="p-2 text-justify w-[260px] xl:w-[400px] xl:max-h-[380px] hover:border-2 hover:border-black duration-75">
                <div class=" overflow-hidden object-center ">
                     <img class="rounded-lg h-[200px] xl:h-[300px] xl:w-[450px] w-[300px] object-cover object-position: center" src="${element.photo}" alt="" >
                </div>
                <div class="text-justify p-1 lg:tracking-tight">
                    <div class="flex flex-row justify-between">
                    <div class="flex flex-row lg:tracking-tight">
                    ${superHostAdd(element)}
                        <p class="text-gray-500 text-[14px] ml-1.5"> ${element.type} ${bednumber(element)} beds</p>
                    </div>
                        <div class="flex flex-row lg:text-overflow">
                            <svg fill="orange" class="w-4 h-full mx-1 " viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg" class="icon">
                                <path
                                    d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                            </svg>
                            <p class="mx-1">${element.rating}</p>
                        </div>
                    </div>
                    <h4 class="text-justify">${element.title}</h4>
                </div>
            </article>`
            }
            text.textContent = `${contador} stays`
        });
        /* aqui va toda la logica de filtrado pero con ambos inputs en este caso nombre y edad */
    } else {
        if (location.value != "") {
            console.log("solo pusieron el nombre :D");
            array.forEach(element => {
                if (element.city.includes(location.value)) {
                    contador++;
                    contenedor.innerHTML += `<article class="p-2 text-justify w-[260px] xl:w-[400px] xl:max-h-[380px] hover:border-2 hover:border-black duration-75">
                        <div class=" overflow-hidden object-center ">
                            <img class="rounded-lg h-[200px] xl:h-[300px] xl:w-[450px] w-[300px] object-cover object-position: center" src="${element.photo}" alt="" >
                        </div>
                        <div class="text-justify p-1 lg:tracking-tight">
                            <div class="flex flex-row justify-between">
                            <div class="flex flex-row lg:tracking-tight">
                            ${superHostAdd(element)}
                                <p class="text-gray-500 text-[14px] ml-1.5"> ${element.type} ${bednumber(element)} beds</p>
                            </div>
                                <div class="flex flex-row lg:text-overflow">
                                    <svg fill="orange" class="w-4 h-full mx-1 " viewBox="0 0 1024 1024"
                                        xmlns="http://www.w3.org/2000/svg" class="icon">
                                        <path
                                            d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                                    </svg>
                                    <p class="mx-1">${element.rating}</p>
                                </div>
                            </div>
                            <h4 class="text-justify">${element.title}</h4>
                        </div>
                    </article>`
                }
                text.textContent = `${contador} stays`
            });

            /* aqui solo filtramos por el nombre */
        } else {
            if (guest != 0) {
                console.log("solo ingresaron edad");
                array.forEach(element => {
                    if (element.maxGuests == guest) {
                        contador++;
                        contenedor.innerHTML += `<article class="p-2 text-justify w-[260px] xl:w-[400px] xl:max-h-[380px] hover:border-2 hover:border-black duration-75">
                                        <div class=" overflow-hidden object-center ">
                                            <img class="rounded-lg h-[200px] xl:h-[300px] xl:w-[450px] w-[300px] object-cover object-position: center" src="${element.photo}" alt="" >
                                        </div>
                                        <div class="text-justify p-1 lg:tracking-tight">
                                            <div class="flex flex-row justify-between">
                                            <div class="flex flex-row lg:tracking-tight">
                                            ${superHostAdd(element)}
                                                <p class="text-gray-500 text-[14px] ml-1.5"> ${element.type} ${bednumber(element)} beds</p>
                                            </div>
                                                <div class="flex flex-row lg:text-overflow">
                                                    <svg fill="orange" class="w-4 h-full mx-1 " viewBox="0 0 1024 1024"
                                                        xmlns="http://www.w3.org/2000/svg" class="icon">
                                                        <path
                                                            d="M908.1 353.1l-253.9-36.9L540.7 86.1c-3.1-6.3-8.2-11.4-14.5-14.5-15.8-7.8-35-1.3-42.9 14.5L369.8 316.2l-253.9 36.9c-7 1-13.4 4.3-18.3 9.3a32.05 32.05 0 0 0 .6 45.3l183.7 179.1-43.4 252.9a31.95 31.95 0 0 0 46.4 33.7L512 754l227.1 119.4c6.2 3.3 13.4 4.4 20.3 3.2 17.4-3 29.1-19.5 26.1-36.9l-43.4-252.9 183.7-179.1c5-4.9 8.3-11.3 9.3-18.3 2.7-17.5-9.5-33.7-27-36.3z" />
                                                    </svg>
                                                    <p class="mx-1">${element.rating}</p>
                                                </div>
                                            </div>
                                            <h4 class="text-justify">${element.title}</h4>
                                        </div>
                                    </article>`
                    }
                    text.textContent = `${contador} stays`
                });
                /* aqui solo filtramos x edad */
            } else {
                console.log("ninguno")
                LlenarContenido(array, contenedor)
                text.textContent = `12+ stays`
            }
        }
    }
}

function Skeleton(array, contenedor) {
    contenedor.innerHTML = "";
    for (let i = 0; i < array.length; i++) {
        contenedor.innerHTML += `
            <div role="status"
            class=" p-3  border-gray-200 rounded-sm shadow-sm animate-pulse dark:border-gray-700  w-[260px] xl:mx-4 xl:w-[375px] xl:max-h-[380px]">
            <div class="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded-sm dark:bg-gray-700">
                <svg class="w-10 h-10 text-gray-200 dark:text-gray-600" aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path
                        d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
                    <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
                </svg>
            </div>
            <div class="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <div class="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
            <span class="sr-only">Loading...</span>
        </div>`   }
}