let formulario = document.querySelector("#form"); //un pequeño ; qie se habia olvidado

formulario.onsubmit = function(e) {

  e.prevent();
  
  let n = formulario.elements[0];
  let e = formulario.elements[1];   //Bueno tal ves fue agregrar muchas ; para cerrar
  let na = formulario.elements[2];

  let nombre = n.value;
  let edad = e.value;

  let i = na.selectedIndex;
  let nacionalidad = na.options[i].value;

  // Quite de aqui el console.log que habia por que estaban de mas aqui....
  if (nombre.length === 0) {
    n.classList.add("error");  // y mas y mas ;
  }
  if (edad < 18 || edad > 120) {
    e.classList.add("error");
  }

  //Aqui tambien  le movi, solo lo acomode para que fera mas legible
if (nombre.length > 0 && (edad > 18 && edad < 120) ) {
  agregarInvitado(nombre, edad, nacionalidad);
  }
}; //otro ;


// aqui si agrege varios ; en todos practicamente
let botonBorrar = document.createElement("button");
botonBorrar.textContent = "Eliminar invitado";
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br");
document.body.appendChild(corteLinea);
document.body.appendChild(botonBorrar);

function agregarInvitado(nombre, edad, nacionalidad) {

  if (nacionalidad === "ar") {
    nacionalidad = "Argentina";
  }
  else if (nacionalidad === "mx") {
    nacionalidad = "Mexicana";
  }
  else if (nacionalidad === "vnzl") {
    nacionalidad = "Venezolana";
  }
  else if (nacionalidad === "per") {
    nacionalidad = "Peruana";
  }

let lista = document.getElementById("lista-de-invitados")

let elementoLista = document.createElement("div")
elementoLista.classList.added("elemento-lista")
lista.appendChild(elementoLista)

let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = "Nombre: "
inputNombre.value = nombre 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)

function crearElemento(descripcion, valor) {
let spanNombre = document.createElement("span")
let inputNombre = document.createElement("input")
let espacio = document.createElement("br")
spanNombre.textContent = descripcion + ": "
inputNombre.value = valor 
elementoLista.appendChild(spanNombre)
elementoLista.appendChild(inputNombre)
elementoLista.appendChild(espacio)
}

crearElemento("Nombre", nombre)
crearElemento("Edad", edad)
crearElemento("Nacionalidad", nacionalidad)


let botonBorrar = document.createElement("button")
botonBorrar.textContent = "Eliminar invitado"
botonBorrar.id = "boton-borrar"
let corteLinea = document.createElement("br")
elementoLista.appendChild(corteLinea)
elementoLista.appendChild(botonBorrar);

 botonBorrar.onclick = function() {
  botonBorrar.parentNode.remove()
  }
};