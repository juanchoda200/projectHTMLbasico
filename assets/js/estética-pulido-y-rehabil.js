const products = [
  { id: 0, name: "TIRAS ABRASIVAS PLYESTER MICRODO", brand: "MICRODONT", price: 9750, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
  { id: 1, name: "SR NEXCO OPACADOR A1", brand: "IVOCLAR VIVADENT", price: 11000, image: "imageness/endo motor radar marca woodpecker.webp" },
  { id: 2, name: "SONDA CAROLINA DEL NORTE DELTA", brand: "DELTA", price: 70000, image: "product2.jpg" },
  {id: 3, name: "RESINA TETRIC N-FLOW BULK FILL IVB", brand: "Ivoclar", price: 78400, image: "product2.jpg" },
  {id: 4, name: "RESINA TETRIC N-FLOW BLEACH", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 5, name: "RESINA TETRIC N-FLOW A2", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 6, name: "RESINA TETRIC N-CERAM FLOW IVW", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 7, name: "RESINA SPECTRA BASIC A1", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 8, name: "RESINA HARMONIZE A1 ESMALTE JERINGA X", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 9, name: "RESINA EMPRESS BL-XL ENAMEL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 10, name: "RESINA EMPRESS BL-XL DENTI", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 11, name: "RESINA EMPRESS B1 ENAMEL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 12, name: "RESINA EMPRESS B1 DENTINA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 13, name: "RESINA EMPRESS A2 DENTINA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 14, name: "RATON * UND°", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTAS PARA RESINA X PAQUETE", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTAS MEZCLADORAS SILICONA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTAS INTRAORALES SILICONA LIVIAN", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PROTEMP 4 CARTUCHO COLOR A2", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "OPTRASCULPT PAD REFILL/6MM/60", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "MULTILINK N REFILL TRANSPARENTE", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 2DA SERIE 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #35 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "KIT REHABILITACION X 8", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "KIT PULIDO JOTA X 8", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "KIT PULIDO DISILICATO X5", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "KETAC MOLAR", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "HOJAS DE BISTURI #15C CAJA X 10", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "HOJAS DE BISTURI #12 CAJA X 100", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "HOJAS DE BISTURI #11 CAJA X 100", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "GUIA COLORES DURATON", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "GRAPA #0 DENT OPTIMA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "ESPIGOS X UNIDAD", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "DISCOS SOFLEX ESSTENTIAL KIT", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "DISCO GRUESO DE PULIDO JIFFY", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "COPAS DE JIFFRY", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CEMENTO VARIOLINK N CLEAR N LC REFILL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "BRACKETS CERAMICOS 3M CLARITY", brand: "Marca 2", price: 200, image: "product2.jpg" },
];

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