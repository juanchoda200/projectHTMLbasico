// Array de productos

let products = JSON.parse(localStorage.getItem("listProductosCarrito"));
  // Carrito de compras
  let cart = [];
  let productContainer = document.querySelector("#lista-productos");
  
  // Función para mostrar productos en la página
  function displayProducts() {
  
    products.forEach((product, index) => {
      let productDiv = document.createElement("div");

      productDiv.classList.add("product", "product-container-2");
      productDiv.setAttribute("id", product.id);
  
      // Muestra la imagen según la propiedad 'image' de cada producto
      productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" width="100px">  
        <h2>${product.name}</h2>
        <p>Marca: ${product.brand}</p>
        <p>Precio: $${product.price}</p>
        <button class="add-to-cart" data-index="${index}">Eliminar del Carrito</button>
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
  
    cartTotal.textContent = ""+total;
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
  

  document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var cardNumber = document.getElementById('cardNumber').value;
    var expiryDate = document.getElementById('expiryDate').value;
    var cvv = document.getElementById('cvv').value;
    
    if (cardNumber && expiryDate && cvv) {
        // Aquí iría la lógica para realizar la compra con la tarjeta
        // Por ejemplo, podrías llamar a una API de pagos o simular la transacción
        alert("Compra realizada con éxito");
    } else {
        alert("Por favor complete todos los campos");
    }
  });

  const menu = document.getElementById("menu")
const toggleButton = document.getElementById("menu-toggle")
const closeButton = document.getElementById('menu-cerrar')

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    menu.classList.add('mostrar-menu')
  })
}

if (closeButton) {
    closeButton.addEventListener('click', () => {
      menu.classList.remove('mostrar-menu')
    })
  }

  const user = JSON.parse(localStorage.getItem("USURIO_ACTUAL"))

  if (user) {
    document,getElementById("userName").innerText = user.nombre
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
    usernameDisplay.textContent = 'Bienvenido, ${username}!';
    // Agregar cualquier logica adicional para mostrar la foto del usuario u otra informacion.
  }
  localStorage.setItem("login", false);
}

if (localStorage.getItem("login")) {
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