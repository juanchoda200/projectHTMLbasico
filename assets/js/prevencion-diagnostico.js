const commentForm = document.querySelector('.add-comment');
const commentList = document.querySelector('.comments');
const listProductos = JSON.parse(localStorage.getItem("listProductos"));

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Obtener los datos del comentario del formulario
    const userName = commentForm.querySelector('input[name="name"]').value;
    const commentText = commentForm.querySelector('textarea').value;

    // Crear un nuevo comentario
    const newComment = document.createElement('div');
    newComment.className = 'user-comment';
    newComment.innerHTML = `
        <img src="user-avatar.jpg" alt="${userName}">
        <p>${commentText}</p>
    `;

    // Agregar el nuevo comentario a la lista de comentarios
    commentList.appendChild(newComment);

    // Limpiar el formulario
    commentForm.reset();
});

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

const prevButton = document.getElementById('prev');
const nextButton = document.getElementById('next');
const images = document.querySelectorAll('.image-container img');

let productoActual = JSON.parse(localStorage.getItem("PRODUCTO_ACTUAL"));
let currentIndex = productoActual.id;

images[currentIndex].style.display = 'block';

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % images.length;
    images[currentIndex].style.display = 'block';
}

function showPrevImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    images[currentIndex].style.display = 'block';
}

nextButton.addEventListener('click', showNextImage);
prevButton.addEventListener('click', showPrevImage);

// Obtener todas las etiquetas 'stars'
const stars = document.querySelectorAll('.stars input');

// Recorrer cada conjunto de estrellas
stars.forEach(starSet => {
  const inputs = starSet.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('click', event => {
      const selectedRating = event.target.value;
      console.log(`Valoración seleccionada: ${selectedRating}`);
      localStorage.setItem('selectedRating', selectedRating);
      // Realizar más acciones con la valoración seleccionada si es necesario
    });
  });
});

// Obtener todos los botones de "Publicar comentario"
const commentButtons = document.querySelectorAll('.review button');

// Asignar eventos a los botones de "Publicar comentario"
commentButtons.forEach(button => {
  button.addEventListener('click', event => {
    const commentSection = event.target.parentNode;
    const userComment = commentSection.querySelector('textarea').value;
    const selectedImage = commentSection.querySelector('input[type="file"]').value;

    //console.log(`Comentario del usuario: ${userComment}`);
    //console.log(`Imagen seleccionada: ${selectedImage}`);
    // Guardar el comentario y la imagen en el localStorage si es necesario
  });
});

// Función para agregar productos al carrito
function addToCart(index) {
    const product = products[index];
    cart.push(product);
    updateCart();
}

// Manejar clic en "Ver detalles" y agregar al carrito
document.addEventListener("click", function (e) {
    if (e.target.classList.contains("view-details")) {
        const index = e.target.getAttribute("data-index");
        showProductDetails(index);
        addToCart(index); // Agregar el producto al carrito cuando se haga clic en "Ver detalles"
    }
});

let productosCarrito = [];
if(JSON.parse(localStorage.getItem("listProductosCarrito"))){
    productosCarrito = JSON.parse(localStorage.getItem("listProductosCarrito"));
}

function agregarCarrito(){
    const newProductCarrito = listProductos[currentIndex];
    productosCarrito.push(newProductCarrito);
    localStorage.setItem("listProductosCarrito", JSON.stringify(productosCarrito));
}

let listaComentarios = [];
if(JSON.parse(localStorage.getItem("listaComentarios"))){
    listaComentarios = JSON.parse(localStorage.getItem("listaComentarios"));
}

const seccioncomentarios = document.getElementById("seccion-comentarios");

function publicarComentario() {
    const comentarioTexto = document.getElementById("comentarioTexto").value;
    const nombreUsuario = prompt("Ingresa tu nombre:");

    if (comentarioTexto && nombreUsuario) {
        const divComentario = document.createElement("div");
        divComentario.className = "user-comment";

        // Agregar la imagen del usuario
        const imagenUsuario = document.createElement("img");
        imagenUsuario.src = "imageness/usuario.png";
        imagenUsuario.alt = "foto del usuario";
        imagenUsuario.width = 50;
        divComentario.appendChild(imagenUsuario);

        // Agregar el nombre del usuario
        const nombreUsuarioElemento = document.createElement("h3");
        nombreUsuarioElemento.textContent = nombreUsuario;
        divComentario.appendChild(nombreUsuarioElemento);

        // Agregar el texto del comentario
        const parrafoComentario = document.createElement("p");
        parrafoComentario.textContent = comentarioTexto;
        divComentario.appendChild(parrafoComentario);

        // Agregar botón de eliminación
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
            eliminarComentario(divComentario);
        });
        divComentario.appendChild(botonEliminar);

        seccioncomentarios.appendChild(divComentario);

        const nuevoComentario = {
            nombre: nombreUsuario,
            comentario: comentarioTexto
        };

        listaComentarios.push(nuevoComentario);

        // Guardar la lista actualizada en el almacenamiento local
        localStorage.setItem("listaComentarios", JSON.stringify(listaComentarios));
    } else {
        alert("Por favor, ingresa tu nombre y comentario antes de publicar.");
    }
}

function cargarComentarios() {
    listaComentarios.forEach((comentario, index) => {
        const divComentario = document.createElement("div");
        divComentario.className = "user-comment";

        // Agregar la imagen del usuario
        const imagenUsuario = document.createElement("img");
        imagenUsuario.src = "imageness/usuario.png";
        imagenUsuario.alt = "foto del usuario";
        imagenUsuario.width = 50;
        divComentario.appendChild(imagenUsuario);

        // Agregar el nombre del usuario
        const nombreUsuarioElemento = document.createElement("h3");
        nombreUsuarioElemento.textContent = comentario.nombre;
        divComentario.appendChild(nombreUsuarioElemento);

        // Agregar el texto del comentario
        const parrafoComentario = document.createElement("p");
        parrafoComentario.textContent = comentario.comentario;
        divComentario.appendChild(parrafoComentario);

        // Agregar botón de eliminación
        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.addEventListener("click", function () {
            eliminarComentario(divComentario, index);
        });
        divComentario.appendChild(botonEliminar);

        seccioncomentarios.appendChild(divComentario);
    });
}

function eliminarComentario(elemento, index) {
    // Eliminar el comentario del DOM
    elemento.remove();

    // Eliminar el comentario del array
    listaComentarios.splice(index, 1);

    // Guardar la lista actualizada en el almacenamiento local
    localStorage.setItem("listaComentarios", JSON.stringify(listaComentarios));
}

// Cargar comentarios al cargar la página
cargarComentarios();
