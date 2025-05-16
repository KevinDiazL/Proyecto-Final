


/* botoncito.addEventListener("click", function (evento) {
  contenedor.innerHTML = "";
  if (buscador.value != "" && edades.value != "") {
        contenedor.innerHTML = "";
        console.log(buscador.value);
        console.log(edades.value);
        estudiantes.forEach((estudiante) => {
        if (
            estudiante.nombre
            .toLowerCase()
            .includes(buscador.value.toLowerCase()) &&
            estudiante.edad == edades.value
            ) {
        contenedor.innerHTML += `
            <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
            </a>`;
        }
    });
  } else {
    if (buscador.value == "") {
      estudiantes.forEach((estudiante) => {
        if (estudiante.edad == edades.value) {
          contenedor.innerHTML += `
        <a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
        <p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
            </a>`;
        } 
      });
    } else {
      estudiantes.forEach((estudiante) => {
        if (
          estudiante.nombre.toLowerCase().includes(buscador.value.toLowerCase())
        ) {
          contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
        }
      });
    }
  }
});  */

/* buscador.addEventListener("input", function (e) {
  contenedor.innerHTML = "";
  console.log(buscador.value);
  let busqueda = buscador.value.toLowerCase();
  estudiantes.forEach((estudiante) => {
    if (estudiante.nombre.toLowerCase().includes(busqueda)) {
      contenedor.innerHTML += `
<a href="#" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-sm hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

<h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">${estudiante.nombre}</h5>
<p class="font-normal text-gray-700 dark:text-gray-400">tiene la edad de: ${estudiante.edad} - del pais: ${estudiante.pais}</p>
</a>
`;
    }
  });
});
 */