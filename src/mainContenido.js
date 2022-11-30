
//import { filterAsc, filterDesct } from './data.js'; //organizarPersonaje
import data from './data/harrypotter/harry.js';

/*import { example } from './data.js';
console.log(example, data);*/

const contenidoPersonajes = document.getElementById('contenidoPersonajes'); //capturando contenidoPersonajes
const contenidoHome = document.getElementById('contenidoHome'); //capturando contenidoHome
const homeBtn = document.getElementById('homeBtn'); //capturando homeBtn
const personajesBtn = document.getElementById('personajesBtn'); //capturando personajesBtn
const salidaBtn = document.getElementById('salidaBtn'); //capturando salidaBtn

//Guardar valor - nombre del invitado
//localStorage.setItem("nombreM");
//localStorage.removeItem("nombreM")


let nombreObtenido = localStorage.getItem("nombreM");//Obtener valor almacenado local Storage 
//console.log(nombreObtenido)


let nombreBienv = document.getElementById("mensaje-bienvenida");//Mostrar valor almacenado  
nombreBienv.innerHTML = "Bienvenida " + nombreObtenido;

salidaBtn.addEventListener('click', function () {
  window.location.href = "index.html";
})

// MANIPULACIÓN PÁGINA INDEX/CONTENIDO

//Evento click de homeBtn despliega contendioHome y oculta contenidoPersonajes
homeBtn.addEventListener('click', function () {
  contenidoHome.style.display = "flex";
  contenidoPersonajes.style.display = "none";
})

//Evento click de personajesBtn despliega contendioPersonajes y oculta contenidoHome
personajesBtn.addEventListener('click', function () {
  contenidoPersonajes.style.display = "flex";
  contenidoHome.style.display = "none";
  contenidoPersonajes.innerHTML = crearTarjetas(data.characters);
})

//export funcion que define personajes :( no funciona
let charactersHP = [];
charactersHP = data.characters;
//console.log(charactersHP);


// pintar tarjetas
 //vamos a ir inyectando los valores de abajo
function crearTarjetas(element) {
  //console.log(element);
  let tarjetas = [];
  element.forEach(characters => { //template literaios
    tarjetas += ` 
              <div class="tarjetas" id= ${characters.id}>
                <div class= "texto-tarjetas">
                <h2 class="nombre">${characters.name}</h2>
                <li class="casa"> Casa: ${characters.house}</li>
                <li class="especie">Especie: ${characters.species}</li>
                <li class="ascendencia">Ascendencia: ${characters.ancestry}</li>
                <li class="genero">Género: ${characters.gender}</li>
                <li class="fecha-nacimiento">Nacimiento: ${characters.birth}</li>
                <li class="fecha-muerte">Muerte: ${characters.death}</li>
                <li class="libros">Libros en los que aparece: ${characters.books_featured_in}</li>
                </div>
              </div>
              `
  });
  return tarjetas
};
//console.log(personajesHP)

// PRUEBA PARA DIVIDIR CODIGO

//generar arreglo que contenga plantilla de las tarjetas

//funcion que recorra los elementos


//ORDENAR PERSONAJES

//let charac =["a", "d", "b"] 
//let organizarPersonaje = charac.sort();
//console.log(organizarPersonaje) regresa abd 

//export funcion que ordena asc y desc

const ordenarAsc = (array) => {
  const ascendente = array.sort(function (a, b) {
    return a.name.localeCompare(b.name); //local compare compara str
  })
  return ascendente;
};
//console.log(ordenarAsc(charactersHP));

const ordenarDesc = (array) => {
  const descendente = array.sort(function (a, b) {
    return b.name.localeCompare(a.name);
  });
  return descendente;
}

const select = document.querySelector("#orden") //capturando opcion ascendente
//escoger opcion a-z y z-a 
console.log(select);

const opcionCambiada = () => {
  console.log("cambio");
  //contenidoPersonajes.innerHTML = crearTarjetas(ordenarAsc(data.characters.name));
};
select.addEventListener("change", opcionCambiada);

const mostrar = () => {
  const indice = select.selectedIndex;
  if (indice === -1) return; // Esto es cuando no hay elementos
  const opcionSeleccionada = select.options[indice];
  alert(`Texto: ${opcionSeleccionada.text}. Valor: ${opcionSeleccionada.value}`);
};
/*
document.querySelector("#ir").addEventListener('click', function () {
  contenidoPersonajes.innerHTML = crearTarjetas(ordenarAsc(charactersHP))
});*/

document.getElementById("ir").addEventListener('click', function () {
  let indice = select.selectedIndex;
  console.log(indice)
  if (indice == 1) {
    contenidoPersonajes.innerHTML = ""
    contenidoPersonajes.innerHTML = crearTarjetas(ordenarAsc(charactersHP));
    console.log(crearTarjetas(ordenarAsc(charactersHP)))
  }
  else if (indice == 2) {
    contenidoPersonajes.innerHTML = ""
    contenidoPersonajes.innerHTML = crearTarjetas(ordenarDesc(charactersHP))
    console.log(crearTarjetas(ordenarDesc(charactersHP)))
  }
});




//console.log(ordenarAsc(charactersHP));

/*//capturar opciones de combobox

const ordenDescendente = document.getElementById('desc'); //capturando opcion descendente



ordenDescendente.addEventListener('click', function () {
  contenidoPersonajes.innerHTML = ordenarDesc(data.characters.name);
});

*/

