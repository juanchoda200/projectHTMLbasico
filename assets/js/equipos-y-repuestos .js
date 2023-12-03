const products = [
  { id: 0, name: "TAPABOCAS MEDICAL MASK CAJA", brand: "Face Mask", price: 13000, image: "../imageness/ZIRCONFILL.webp" },
    { id: 1, name: "STAR PEN ANESTESIA DIGITAL", brand: "Marca m3", price: 3000, image: "../imageness/ZIRCONFILL.webp" },
    { id: 2, name: "SCALER ULTRASONICO SENCILLO USD-J", brand: "woodpecker", price: 807000, image: "../imageness/SCALER ULTRASONICO SENCILLO USD-J.webp" },
    { id: 3, name: "SCALER ULTRASONICO PIEZA DE MANO", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.webp" },
    { id: 4, name: "SCALER AZDENT AIR", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.webp" },
    { id: 5, name: "RETRACFAR 7ML", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 6, name: "PUNTAS PARA SCALER REF VARIAS", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 7, name: "PIEZA DE MANO DE LLAVE AZDEN", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 8, name: "PIEZA DE MANO AA PRESION", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 9, name: "MOTOR PIEZA DE MANO-SAEYANG", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 10, name: "MICROMOTOR DTE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 11, name: "LOCALIZADOR DE APICES MINIPEX", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 12, name: "LAMPARA DE FOTOCURADO VALO INHALAMBRICA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 13, name: "LAMPARA DE FOTOCURADO I-LED LILA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 14, name: "LAMPARA DE FOTOCURADO I-LED BLANCA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 15, name: "LAMPARA BLUEPHASE N G4 100 - 240", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 16, name: "LAMPARA 0-LIGHT MAX", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 17, name: "KIT PROFESIONAL PREMIUM MARCA JIMNE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 18, name: "KIT PROFESIONAL NSK", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 19, name: "KIT DE BAJA VELOCIDAD MARCA JINME", brand: "JINME", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 20, name: "JERINGA TRIPLE METALICA X COLORES", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 21, name: "IRRIGADOR ORAL FAMILIAR FRESHPICKLR 2022", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 22, name: "ESCALER ULTRASONICO UDS-J", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 23, name: "BACTERIA RECARGABLE VALO CORDELSS ULTRADE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 24, name: "AUTOCLAVE GRAVADO DENTCLAVE 1250 SA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 25, name: "ALGINATO TROPICALGIN 453G MANGO", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 26, name: "ACEITE EN SPRAY QUIRUSPRAY FCO X 200 C.C", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 27, name: "9 KIT DE BAJA DTM ", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
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