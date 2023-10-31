// Array de productos
const products = [
    { id: 1, name: "Cepillos", brand: "Marca 1", price: 3000, image: "imageness/6ef0073f-61cc-495d-959b-d661d47c4421.png" },
    { id: 2, name: "Producto 2", brand: "Marca 2", price: 200, image: "imageness/endo motor radar marca woodpecker.webp" },
    { id: 3, name: "Producto 2", brand: "Marca 2", price: 200, image: "product2.jpg" },
    { id: 4, name: "Producto 2", brand: "Marca 2", price: 200, image: "product2.jpg" },
  ];
  
  // Carrito de compras
  let cart = [];
  
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
        <button class="add-to-cart" data-index="${index}">Añadir al carrito</button>
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
  
  // Cargar carrito y productos al iniciar la página
  document.addEventListener("DOMContentLoaded", function () {
    cart = JSON.parse(localStorage.getItem("cart")) || [];
    displayProducts();
    updateCart();
  
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
  
    addToCartButtons.forEach(function(button, index) {
      button.addEventListener('click', function() {
        const productToAdd = products[index];
        cart.push(productToAdd);
        updateCart();
        localStorage.setItem("cart", JSON.stringify(cart));
      });
    });
  
    document.querySelectorAll(".product-container-2").forEach(product => {
      product.addEventListener('click', () => {
        const id = product.getAttribute("id");
        const selectedProduct = products.find(x => x.id == id);
        localStorage.setItem("PRODUCTO_ACTUAL", JSON.stringify(selectedProduct));
        window.location = "./prevencion-diagnostico.html";
      });
    });
  });
  