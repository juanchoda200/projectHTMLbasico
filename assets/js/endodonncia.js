// Productos
const products = [
  { id: 0, name: "ZONIDENT AL 5% 120ML PROQUIDE", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
  { id: 1, name: "XILOL DISOLVENTE GUTAPERCHA", brand: "Marca 2", price: 200, image: "imageness/endo motor radar marca woodpecker.webp" },
  { id: 2, name: "VIOSEAL CEMENTO CANAL RADICU", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "TIRA NERVIOSCOLORINOX SURTID", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "TIRA NERVIOS 21MM #3", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "THERACAL LC 1 SYRINGE PKG", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "THERABASE", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "SILANO JERINGA X 1.2 ML ULTRADE", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "SEPARADOR DE YESO NOVA FOIL X", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "SEPARADOR DE YESO NOVA FOIL X", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "REMOVEDOR DE CONOS GPR X 4", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTAS DE PAPEL TAPER 04-25 X 10", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTAS DE PAPEL 30", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTAS DE PAPEL 1RA SERIE", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTAS DE PAPEL #40", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTAS DE PAPEL #35", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTAS DE PAPEL #30", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTAS DE PAPEL #25", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PUNTA IRRIGADORA ENDO - EZE", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PAPEL DE ARTICULAR FENIX CAJA X", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "PAPEL CEFALOMETRIA X 100", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "MTA FILLAPEX", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "MINIENDO BLOCK PLASTICO MAILL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIQUIDO ACRILICO AUTO 55cc VER", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIQUIDO ACRILICO AUTO 500cc VER", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIQUIDO ACRILICO AUTO 250cc VER", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIQUIDO ACRILICO AUTO 110cc VER", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS WAVE ONE GOLD SMALL X BL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS ROTATORIAS SILK KIT EN 25 M", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS MAILLEFER 025 EN #45", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS MAILLEFER 025 EN #40", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS M-ACCESS 10 EN 25 MM", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS K-FILEM- ACCES 45/80 EN 25 M", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS K-FILE M-ACCESS 2DA SERIE", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS GPR", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 2DA SERIE 21MM K-FLEXO M-A", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 1RA SERIE 31MM K-FLEXO M-AC", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 1RA SERIE 25MM K-FLEXO M-AC", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 1RA SERIE 21MM MANI CAJA X 6", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 1RA SERIE 21MM K-FLEXO M-AC", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 1RA SERIE 15MM MANI CAJA X 6", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 1RA 25MM K-FILES MANI CAJA X", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 050 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 030 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 030 21MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 025 31MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 025 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 025 31MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 025 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 025 21MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 020 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 015 31MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 010 31MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 010 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 010 21MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 008 31MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 008 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 008 21MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 006 31MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 006 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS 006 21MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #SURTIDAS 25MM H-FILES M", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #40 25MM K-FLEXO M ACCESS", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #35 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #30 25MM K-FLEXO M-ACCES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #30 25MM K-FILES MANI CAJA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #30 25MM H-FILES MANI CAJA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #25 25MM K-FILES MANI CAJA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #20 25MM K-FILES MANI CAJA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #15 25MM K-FILES MANI CAJA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #10 25MM K-FILES MANI CAJA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #10 25MM H-FILES MANI CAJA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #10 21MM K-FILES MANI CAJA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMAS #1 SERIE 25MM H-FILES MANI", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMA K FLEXOFILE M ACCESS 15/40", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMA # 20 21 MM K-FLEXO M ACEES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "LIMA # 15 21 MM K-FLEXO M ACEES", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "KIT OPERATORIO FG X 8 UND", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "KIT MATRIZ UNIVERSAL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "KELFAR QUELANTE ENSANCHADOR", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "JERINGA DE IRRIGACION 5ML", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "HIDROXIDO DE CALCIO PASTA 2 g ", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "GUANTES NITRILO SEMPERCARE TA", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "FORCEPS 69", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "DURACRYL FLOW PATRONES KIT 60", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CONOS GUTAPERCHA N40 MAILLEF", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CONOS GUTAPERCHA N35 SPIDENT", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CONOS GUTAPERCHA #45 GAPADEN", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CONOS DE GUTAPERCHA WAVE O", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CEMENTO SEALAPEX ROOT CANAL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CAPSULAS PARA AMALGAMA SENCIL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CAPSULAS PARA AMALGAMA DOBLE", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "CAJA PARA REVELADO DE RADIOGR", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "ACRILICO TERMO ROSADO JDO VR-", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "ACRILICO AUTO ROSADO JDO VR-1", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "ACRILICO AUTO ROSADO JDO VR-1", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "ACRILICO AUTO A3 60g VERACRIL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "ACRILICO AUTO A2 60g VERACRIL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "ACRILICO AUTO A1 60g VERACRIL", brand: "Marca 2", price: 200, image: "product2.jpg" },
  {id: 3, name: "ACRILICO AUTO A0 60g VERACRIL", brand: "Marca 2", price: 200, image: "product2.jpg" },
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