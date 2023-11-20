// Productos
const products = [
    { id: 0, name: "YESO TIPO 4 X LIBRA", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 1, name: "TURBINA ESTANDAR", brand: "Marca 2", price: 200, image: "imageness/endo motor radar marca woodpecker.webp" },
    { id: 2, name: "TORNILLO DE EXPANSION MEDIANO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TOPES PARA MARCAR INSTRUMENTAL AZUL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TOPES PARA LIMAS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TIRAS SEPARADORAS ACERO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TIRAS DE MILAR X50 PROQUIDENT", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TIRAS DE MILAR ECONO X50", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TIRAS ABRASIVAS EN ACERO 12 TIRAS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TIJERAS CORONAS RECTA X 12 CM", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TIJERA IRIS CURVA 11.5CM", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TIJERA DE IRIS RECTA 11.5CM", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TERMOMETRO WT", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TERMOMETRO SIN CONTACTO FEIDU X CA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "TERMOHIGOMETRO+DOCUMENTACION", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "REPUESTO CONTRANGULO PLASTICO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "QUATMAX ACTIVE GALON", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PUNTAS DE JERINGA TRIPLE PLASTICAS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PULIDORES ENHANCE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "POSICIONADOR DE BANDAS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PORTA CADENETAS EN ACRILICO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PINZA WEINGART", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PINZA TWEED", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PINZA REMOVEDORA DE BK", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PINZA REMOVEDORA DE BANDAS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PINZA PORTA PINES QUIRURGICA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PINZA PARA PAPEL ARTICULAR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PINZA CONFORMADORA DE ARCOS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PINZA ALGODONERA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIMPOLLO SILICONADO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIMPOLLO DE CARBUIRO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIEZA DE MANO DE ALTA JINME", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIEZA DE MANO DE ALTA FDA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIEZA DE MANO DE ALTA + KIT DE BAJA VELO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIEZA DE ALTA YOUNITY", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIEDRA PARA PULIR VERDE G013", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIEDRA PARA PULIR ROSADA P059", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIEDRA PARA PULIR GRIS G059", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIEDRA PARA PULIR BLANCA W059", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "PIEDRA PARA PULIR AZUL B010", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "MANGO PARA ESPEJO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "LIMAS WAVE ONE GOLD PRIMARY", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "LIMAS N40 K-FILES NIC X 6 UND", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "LIMAS N35 K-FILES NIC X 6 UND", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "LIMAS N30 K-FILES NIC X 6 UND", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "LIMAS N25 K-FILES NIC X 6 UND", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "LIMAS N20 K-FILES NIC X 6 UND", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "LIMAS MAILLEFER 021 EN #15", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "LIMA DE HUESO INSTRUMENTAL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "KIT REPARACION CERAMICA ANGELUS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "KIT PULIR RESINA X 9", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "KIT HIGIENE DENTAL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "KIT DE PULIDO POLISHERS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "KIT BASICO DESECHABLE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "JERINGA CARPULE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "IVOCLEAN REFILL GOTERO X 5G", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "IONOMERO BASE IT X 2 JERINGAS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "INSTRUMENTO OBTURACION FP3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "HOJAS BISTURI #15 CAJA X 100", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "GUANTES NITRILO TALLA S", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "GRAPAS NO 14A RDCM14A", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "GRAPA NO 14 REF RDCM14", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "GRAPA NO 00 RDCM00", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "GRAPA # 0", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "GOTAS REVELADORAS DE PLACA BACTERIA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA PULIDO BLANCA CW 151-4", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA PESSO #3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA PESSO #2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA PESSO #1", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA GATES # 3", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA GATES # 2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA GATES # 1", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA ENDO Z MAILEFER", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA ENDO Z ANGELUS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA DIATECH DORADAS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA DIAMANTE BR-49", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA DIAMANTE BR-46", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA DIAMANTE BR-45", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA DIAMANTE BR-43", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA DIAMANTE BR-42", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA DIAMANTE BR-41", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA DIAMANTE BR-40", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA DIAMANTE BR-31", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA DIAMANTE", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA 703 TALLO LARGO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA 703 TALLO CORTO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA 702 TALLO LARGO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA 702 TALLO CORTO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA 701 TALLO CORTO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FRESA 700 TALLO LARGO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FORMAS TRANSPARENTES X UNIDAD", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FORCEPS 16", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FORCEPS 151S PEDIATRICO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "FORCEPS 150S PEDIATRICO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "EXPLORADOR SENCILLO N 23", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ESPATULA PARA CEMENTO METAL", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ESPATULA FP3 DE TITANIO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ESPATULA 7A", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ELEVADOR MOL O PERIOSTOTOMO # 9", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ELEVADOR DE RAICES 34", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ELEVADOR DE RAICES 1R", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ELEVADOR DE RAICES 1L", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "DISCOS SOF-LEX GRANO FINO 3M", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "DISCO CARBURO GRANO GRUESA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "DIRECTOR DE LIGADURA -DINIX O.P", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "CURETA GRACEY 7/8 SUPERDENT", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "CURETA GRACEY 13/14", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "CUÑAS ELASTICAS TDV", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "CUÑAS DE MADERA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "CUBETAS METALICAS KIT X 6 NIÑO", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "CLEAN STAND MAILLEFER", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "CEPILLO PARA PROFILAXIS X UNID", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "CEPILLO PARA LAVAR INSTRUMENTAL X 3 UN", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "CAMBIA FRESAS STANDAR", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "BANDA METALICA PARA ORTODONCIA", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ASENTADOR DE BANDAS", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ALICATE ORTODONCIA YOUNG", brand: "Marca 2", price: 200, image: "product2.jpg" },
    {id: 3, name: "ALICATE CORTA ALAMBRE DURO", brand: "Marca 2", price: 200, image: "product2.jpg" },
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
  