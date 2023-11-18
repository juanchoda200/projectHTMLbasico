window.addEventListener('DOMContentLoaded', (event) => {
    const mensajeVacantes = document.getElementById('vacantes-message');
    const hayVacantes = false; // Cambiar a 'true' si hay vacantes disponibles

    if (hayVacantes) {
        mensajeVacantes.innerText = '¡Hay vacantes disponibles!';
    } else {
        mensajeVacantes.innerText = 'En este momento no hay vacantes.';
    }
});
