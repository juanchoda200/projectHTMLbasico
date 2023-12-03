// Lista de productos
const products = [
  // ... (Tu lista de productos)
];

// Lista de productos en el carrito
let cart = [];

// Función para procesar lista de productos y vista de estos
function listarProductos() {
  products.forEach(element => {
    producto(element.id, element.name, element.brand, element.price, element.image);
  });
}

let listaProductos = document.querySelector("#lista-productos");

// Función para crear vista del producto
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

// Función para agregar al carrito
function addCart(id) {
  cart.push(products[id]);
  console.log(cart);
  Cantidaddecarrito();
}

// Función para mostrar la cantidad de productos en el carrito
function Cantidaddecarrito() {
  console.log(cart.length);
}

// Crear un contenedor para los productos
const productContainer = document.createElement('div');
productContainer.id = 'product-container';
document.body.appendChild(productContainer);

// Llamamos a la función para listar los productos al cargar la página
document.addEventListener('DOMContentLoaded', function () {
  listarProductos();
});