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
                        <p class="text-gray-500 text-[14px]">${element.type} ${bednumber(element)}</p>
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
export { LlenarContenido };