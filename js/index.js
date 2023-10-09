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