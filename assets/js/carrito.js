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
  // Obtiene la información del usuario desde el localStorage
  const user = JSON.parse(localStorage.getItem("USURIO_ACTUAL"));
  
  // Obtiene referencias a elementos del DOM
  const usernameDisplay = document.getElementById("username-display");
  const infoUser = document.getElementById("user-info");
  const loginitem = document.getElementById("login-item");

  // Muestra la sección de información del usuario y oculta el botón de inicio de sesión
  infoUser.style.display = "block";
  loginitem.style.display = "none";

  // Verifica si se obtuvo información válida del usuario y si existe un elemento para mostrar el nombre
  if (user && usernameDisplay) {
      // Actualiza el contenido del elemento con un mensaje de bienvenida
      usernameDisplay.textContent = `Bienvenido, ${user.nombre}`;
      // Puedes agregar aquí cualquier lógica adicional para mostrar la foto del usuario u otra información.
  }

  // Establece el estado de inicio de sesión en false (podría no ser necesario, dependiendo de tu lógica)
  localStorage.setItem("login", false);
}

if (localStorage.getItem("login")) {
  // Llama la función para mostrar el nombre del usuario en la página de inicio 
  mostrarNombreUsuario();
}

function cerrarSesion() {
  const infoUser = document.getElementById("user-info");
  const loginItem = document.getElementById("login-item");

  // Obtiene la información del usuario desde el localStorage
  const user = JSON.parse(localStorage.getItem("USURIO_ACTUAL"));

  // Muestra el nombre del usuario debajo de la sección de información del usuario
  if (user && usernameDisplay) {
      // Puedes ajustar aquí la presentación del nombre del usuario al cerrar sesión.
      usernameDisplay.textContent = `Hasta luego, ${user.nombre}!`;
  }

  // Establece el estado de inicio de sesión en false
  localStorage.setItem("login", false);

  // Oculta la sección de información del usuario y muestra el botón de inicio de sesión
  infoUser.style.display = "none";
  loginItem.style.display = "block";

  // Redirige a la página de inicio u otra página relevante después de cerrar sesión
  window.location.href = "index.html";
}
