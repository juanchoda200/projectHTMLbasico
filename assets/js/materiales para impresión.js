// Productos
const products = [
  { id: 0, name: "ZETAPLUS INTRO KIT X 1100 ML", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
  { id: 1, name: "YESO TIPO III LIBORA X LB", brand: "Marca 2", price: 200, image: "imageness/endo motor radar marca woodpecker.webp" },
  { id: 2, name: "YESO MOUNTING TIPO 5", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "SILICONA ZETAPLUS MINI KIT", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "SILICONA LIVIANA SILAGUM 50 ML", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "SILICONA ELITE KIT ESTUDIANTIL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "SILICONA ELITE JUMBO", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "REGISTRO DE MORDIDA OCLUFAS", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PASTA ZINQUENOLICA KELLY'S X CA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIQUIDO ACRILICO AUTO 1L VERAC", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 30 30MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 040 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "HYDRORISE PUTTY NORMAL SET 30", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "HYDRORISE LIGHT NORMAL 50 ML", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "FUTAR D°", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "EMULSION PARA BRILLO JOTA X 50 M", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CUBETAS CUBETAS PLASTICAS IMPRESIOM # 6 IMPRESIOM #", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CUBETAS PLASTICAS IMPRESION", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CUBETA PLASTICA SURTIDA X 6 UN", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "COMPUESTO DE IMPRESIÓN GODIV", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CERA PARA BASE ROSADA X 18 LAM", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CERA METALIZADA X 12 LAMINAS (G", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "ALGINATO JELTATE CROMATICO", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "ALGINATO HYDROGUM 5 X 453 G", brand: "Marca 2", price: 200, image: "product2.jpg" },
];
  
// Carrito de compras
let cart = [];

localStorage.setItem("listProductos", JSON.stringify(products));

// Función para mostrar productos en la página
function displayProducts() {
  const productContainer = document.querySelector(".product-list");

  products.forEach((product, index) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product", "product-container-2");
    productDiv.setAttribute("id", product.id);

    // Muestra la imagen según la propiedad 'image' de cada producto
    productDiv.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>Marca: ${product.brand}</p>
      <p>Precio: $${product.price}</p>
      <button class="view-details" data-index="${index}">Ver detalles</button>
    `;

    productContainer.appendChild(productDiv);
  });
}

// Función para actualizar el carrito de compras
function updateCart() {
  const cartItems = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");
  /*cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = total;
  localStorage.setItem("cart", JSON.stringify(cart));*/
}

// Manejar clic en "Ver detalles"
document.addEventListener("click", function (e) {
  if (e.target.classList.contains("view-details")) {
    const index = e.target.getAttribute("data-index");
    showProductDetails(index);
  }
});

// Función para mostrar detalles de un producto
function showProductDetails(index) {
  const product = products[index];

  // Aquí puedes abrir una nueva página o un modal con los detalles del producto
  // y permitir a los usuarios agregar el producto al carrito desde esa página.
}

// Manejar comentarios


// Función para agregar comentarios
function addComment(commentText) {
  const commentsList = document.querySelector("#comments ul");
  const newComment = document.createElement("li");
  newComment.innerHTML = `<p>Usuario:</p><p>${commentText}</p>`;
  commentsList.appendChild(newComment);
}

// Inicialización
document.addEventListener("DOMContentLoaded", function () {
  // Cargar carrito desde localStorage, si existe
  cart = JSON.parse(localStorage.getItem("cart")) || [];

  // Mostrar productos en la página
  displayProducts();

  // Actualizar el carrito
  updateCart();
});

// Elementos HTML
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");
const searchResults = document.getElementById("search-results");


// Función para realizar la búsqueda
function performSearch() {
  const searchTerm = searchInput.value.toLowerCase();
  searchResults.innerHTML = "";

  if (searchTerm) {
      const matchingProducts = products.filter(product => {
          return product.name.toLowerCase().includes(searchTerm)
      });

      if (matchingProducts.length > 0) {
          matchingProducts.forEach(product => {
              const resultItem = document.createElement("div");
              resultItem.innerHTML = `<h3>${product.name}</h3><p>${product.description}</p>`;
              searchResults.appendChild(resultItem);
          });
      } else {
          searchResults.innerHTML = "<p>No se encontraron resultados.</p>";
      }
  } else {
      searchResults.innerHTML = "<p>Ingrese un término de búsqueda.</p>";
  }
}

// Manejar clic en el botón de búsqueda
searchButton.addEventListener("click", performSearch);

// Manejar la tecla Enter en el campo de búsqueda
searchInput.addEventListener("keyup", function(event) {
  if (event.key === "Enter") {
      performSearch();
  }
});

document.addEventListener("DOMContentLoaded", () => {
document.querySelectorAll(".product-container-2").forEach(product=>{
  console.log(product);
  product.addEventListener('click', () => {
    const id = product.getAttribute("id")
    
    const selectedProduct = products.find(x=>x.id==id)
    localStorage.setItem("PRODUCTO_ACTUAL", JSON.stringify(selectedProduct))
    window.location = "./prevencion-diagnostico.html"
  })
})
})
