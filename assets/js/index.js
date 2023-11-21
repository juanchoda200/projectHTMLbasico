const menu = document.getElementById("menu")
const toggleButton = document.getElementById("menu-toggle")
const closeButton = document.getElementById('menu-cerrar')
const infoUser = document.getElementById("user-info")

infoUser.style.display = "none";

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

const testimonios = [
  {
    imagen:"ruta-de-la-imagen-1",
    reseña:"Texto de la reseña del cliente 1.",
    autor: "Nombre del cliente 1"
  },
  {
    imagen:"ruta-de-la-imagen-1",
    reseña:"Texto de la reseña del cliente 1.",
    autor: "Nombre del cliente 1"
  },
  {
    imagen:"ruta-de-la-imagen-1",
    reseña:"Texto de la reseña del cliente 1.",
    autor: "Nombre del cliente 1"
  },
];

function cargarTestimonios() {
  const testimonioContainer = document.getElementById("testimonial-container");
  
  testimonios.forEach(testimonio => {
    const testimonioDiv = document.createElement("div");
    testimonioDiv.classList.add("testimonial");
    
    const imagen = document.createElement("img");
    imagen.src = testimonio.imagen;
    imagen.alt = testimonio.autor;
    
    const reseña = document.createElement("p");
    reseña.classList.add("testimonial-text");
    reseña.textContent = testimonio.reseña;
    
    const autor = document.createElement("p");
    autor.classList.add("testimonial-author");
    autor.textContent = testimonio.autor;
    
    testimonioDiv.appendChild(imagen);
    testimonioDiv.appendChild(reseña);
    testimonioDiv.appendChild(autor);
    
    testimonioContainer.appendChild(testimonioDiv);
  });
}

