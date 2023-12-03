const products = [
  { id: 0, name: "", brand: "Marca profilad", price: 3000, image: "../imageness/ZIRCONFILL.png" },
    { id: 1, name: "", brand: "Marca m3", price: 3000, image: "../imageness/ZIRCONFILL.png" },
    { id: 2, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 3, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 4, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 5, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 6, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 7, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 8, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 9, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 10, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 11, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 12, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 13, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 0, name: "", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
]

//Funcion para procesar lista de productor y vista d estos
function listarProductos() {
  products.forEach(element => {
    producto(element.id, element.name, element.brand, element.price, element.image);
  });
}

let listaProductos = document.querySelector("#lista-productos");


//Funcion para crear vista del producto
function producto(id, name, brand, price, image) {

  let productDiv = document.createElement("div");

    productDiv.classList.add("product", "product-container-2");
    productDiv.setAttribute("id", id);

    // Muestra la imagen según la propiedad 'image' de cada producto
    productDiv.innerHTML = `
      <img src="${image}" alt="${name}" width="100px">  
      <h2>${name}</h2>
      <p>Marca: ${brand}</p>
      <p>Precio: $${price}</p>
      <button class="add-to-cart" id="${id}" onclick="addCart(${id})">Agregar al carrito</button>`;
    productContainer.appendChild(productDiv); 
}

let cart = [];



function addCart (id){
  cart.push(products[id])
  console.log(cart)
  Cantidaddecarrito()
}

function Cantidaddecarrito (){
  console.log (cart.length)
}

// Crear un contenedor para los productos
const productContainer = document.createElement('div');
productContainer.id = 'product-container';
document.body.appendChild(productContainer);

// Llamamos a la función para listar los productos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  listarProductos();
});

// Creamos un contenedor para cada producto
const productDiv = document.createElement('div');
productDiv.classList.add('product-container');

const menu = document.getElementById("menu");
const toggleButton = document.getElementById("menu-toggle");
const closeButton = document.getElementById('menu-cerrar');
const infoUser = document.getElementById("user-info");

infoUser.style.display = "none";

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    menu.classList.add('mostrar-menu');
  });
}

if (closeButton) {
  closeButton.addEventListener('click', () => {
    menu.classList.remove('mostrar-menu');
  });
}

const user = JSON.parse(localStorage.getItem("USURIO_ACTUAL"));

if (user) {
  document.getElementById("userName").innerText = user.nombre;
}

// En la pagina de inicio de incio (index.html). puedes mostrar el nombre de usuario
function mostrarNombreUsuario() {
  const userName = localStorage.getItem ("username");
  const usernameDisplay = document.getElementById("username-display");
  const infoUser = document.getElementById("user-info");
  const loginitem = document.getElementById("login-item")
 
  infoUser.style.display = "block";
  loginitem.style.display = "none";

  if (username && usernameDisplay) {

    usernameDisplay.textContent = `Bienvenido, ${userName}!`;
    // Agregar cualquier logica adicional para mostrar la foto del usuario u otra informacion.
  }
  localStorage.setItem("login", false);
}

if (localStorage.getItem("login") === "true") {
  // Llama la funcion para mostrar el nombre del usuario en la pagina de inicio 
  mostrarNombreUsuario()
}

function cerrarSesion() {
  const infoUser = document.getElementById("user-info");
  const loginItem = document.getElementById("login-item");


  localStorage.setItem("login", false);
  infoUser.style.display = "none";
  loginItem.style.display = "block";
}

function agregarCarrito(){
  const newProductCarrito = listProductos[currentIndex];
  productosCarrito.push(newProductCarrito);
  localStorage.setItem("listProductosCarrito", JSON.stringify(productosCarrito));
}