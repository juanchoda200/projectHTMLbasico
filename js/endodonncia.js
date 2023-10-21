// Productos
const products = [
    { name: "Producto 1", brand: "Marca 1", price: 100, image: "product1.jpg" },
    { name: "Producto 2", brand: "Marca 2", price: 200, image: "product2.jpg" },
  ];
  
  // Carrito de compras
  let cart = [];
  
  // Función para mostrar productos en la página
  function displayProducts() {
    const productContainer = document.querySelector(".product-list");
  
    products.forEach((product, index) => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
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
    cartItems.innerHTML = "";
    let total = 0;
  
    cart.forEach((item, index) => {
      const li = document.createElement("li");
      li.textContent = `${item.name} - $${item.price}`;
      cartItems.appendChild(li);
      total += item.price;
    });
  
    cartTotal.textContent = total;
    localStorage.setItem("cart", JSON.stringify(cart));
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
  document.getElementById("add-comment").addEventListener("click", function () {
    const commentInput = document.getElementById("comment-input");
    const commentText = commentInput.value;
    if (commentText.trim() !== "") {
      addComment(commentText);
      commentInput.value = "";
    }
  });
  
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