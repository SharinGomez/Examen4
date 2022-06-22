let inputPrincipal;
let botonAgregar = document.querySelector(".boton-agregar");
let contenedor = document.querySelector(".container")

class Item {
constructor(inputPrincipal) {
this.inputPrincipal = inputPrincipal;
}

crearDiv(tarea) {

let inputItem = document.createElement("input");
inputItem.setAttribute("type", "text");
inputItem.setAttribute("disabled", true);
inputItem.classList.add("item-input");
inputItem.value = tarea;

let nuevoDiv = document.createElement("div");
nuevoDiv.classList.add("item");
console.log(nuevoDiv)


botonEditar = document.createElement("button");
botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
botonEditar.classList.add("boton-editar");
botonEditar.setAttribute("id", "boton-editar");


let botonRemover = document.createElement("button");
botonRemover.innerHTML = "<i class='fas fa-trash'></i>";
botonRemover.classList.add("boton-remover");


nuevoDiv.appendChild(inputItem);
nuevoDiv.appendChild(botonEditar);
nuevoDiv.appendChild(botonRemover);

contenedor.appendChild(nuevoDiv);
botonEditar.addEventListener("click", function () {
if (inputItem.disabled == false) {
inputItem.setAttribute("disabled", true);
botonEditar.innerHTML = "<i class='fas fa-lock'></i>";
} else {
inputItem.removeAttribute("disabled");
botonEditar.innerHTML = "<i class='fas fa-lock-open'></i>";
}
})

botonRemover.addEventListener("click", function () {
nuevoDiv.removeChild(inputItem);
nuevoDiv.removeChild(botonEditar);
nuevoDiv.removeChild(botonRemover); }) }
}

botonAgregar.addEventListener("click", function () { 
 chequearInput();
})

function chequearInput() {
inputPrincipal = document.querySelector(".input").value;
console.log(inputPrincipal)
if (inputPrincipal.length !== 0) {
let objItem = new Item(inputPrincipal);
console.log(objItem)
objItem.crearDiv(inputPrincipal);
inputPrincipal.innerHTML = "";
limpiarInput();
} else {
console.log("No se ha ingresado una tarea")
}
}

function limpiarInput() {
inputPrincipal = document.querySelector(".input").value = "";
}
