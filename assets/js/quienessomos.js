const menu = document.getElementById("menu");
const toggleButton = document.getElementById("menu-toggle");
const closeButton = document.getElementById('menu-cerrar');
const infoUser = document.getElementById("user-info");

infoUser.style.display = "none";

if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    menu.classList.add('mostrar-menu');
  });
}

if (closeButton) {
  closeButton.addEventListener('click', () => {
    menu.classList.remove('mostrar-menu');
  });
}

const user = JSON.parse(localStorage.getItem("USURIO_ACTUAL"));

if (user) {
  document.getElementById("userName").innerText = user.nombre;
}