// Obtener elementos del DOM
const listaProductos = document.getElementById('lista-productos');
const formularioProducto = document.getElementById('formulario-producto');
const nombreProducto = document.getElementById('nombre-producto');
const precioProducto = document.getElementById('precio-producto');
const botonCompra = document.getElementById('boton-compra');
const total = document.getElementById('total');

// Inicializar arreglo de productos
let productos = [];

// Obtener productos almacenados en el localStorage
if (localStorage.getItem('productos')) {
    productos = JSON.parse(localStorage.getItem('productos'));
    actualizarListaProductos();
}

// Agregar evento al formulario de producto
formularioProducto.addEventListener('submit', function(evento) {
    evento.preventDefault();

    // Crear objeto producto
    const producto = {
        nombre: nombreProducto.value,
        precio: parseFloat(precioProducto.value)
    };

    // Agregar producto al arreglo
    productos.push(producto);

    // Guardar productos en el localStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    // Actualizar lista de productos
    actualizarListaProductos();

    // Limpiar formulario
    nombreProducto.value = '';
    precioProducto.value = '';
});

// Agregar evento al botón de compra
botonCompra.addEventListener('click', function() {
    // Calcular total de la compra
    const totalCompra = productos.reduce(function(acumulador, producto) {
        return acumulador + producto.precio;
    }, 0);

    // Mostrar total en la sección correspondiente
    total.textContent = `Total: $${totalCompra.toFixed(2)}`;

    // Vaciar arreglo de productos
    productos = [];

    // Guardar productos vacíos en el localStorage
    localStorage.setItem('productos', JSON.stringify(productos));

    // Actualizar lista de productos
    actualizarListaProductos();
});

// Función para actualizar la lista de productos en el DOM
function actualizarListaProductos() {
    // Vaciar lista de productos en el DOM
    listaProductos.innerHTML = '';

    // Agregar cada producto a la lista en el DOM
    productos.forEach(function(producto) {
        const itemProducto = document.createElement('li');
        itemProducto.textContent = `${producto.nombre} - $${producto.precio}`;
        listaProductos.appendChild(itemProducto);
    });
}

// Obtener elementos del DOM para agregar al carrito
const botonesAgregar = document.querySelectorAll('.product button');

// Agregar evento a cada botón de agregar
botonesAgregar.forEach(function(boton) {
    boton.addEventListener('click', function() {
        // Obtener información del producto
        const producto = {
            nombre: boton.parentElement.querySelector('h3').textContent,
            precio: parseFloat(boton.parentElement.querySelector('p').textContent.slice(1))
        };

        // Agregar producto al arreglo
        productos.push(producto);

        // Guardar productos en el localStorage
        localStorage.setItem('productos', JSON.stringify(productos));

        // Actualizar lista de productos
        actualizarListaProductos();
    });
});