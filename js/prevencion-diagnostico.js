const commentForm = document.querySelector('.add-comment');
const commentList = document.querySelector('.comments');

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
let currentIndex = 0;

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