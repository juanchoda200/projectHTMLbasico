const formLogin = document.getElementById("login-form");
const usernameDisplay = document.getElementById("username-display");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (verificarCredenciales(username, password)) {
    localStorage.setItem("username", username);
    formLogin.reset();
    mostrarNombreUsuario();
  } else {
    alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
  }
});

function verificarCredenciales(username, password) {
  if (username === "admin" && password === "admin") {
    return true;
  } else {
    return false;
  }
}

function mostrarNombreUsuario() {
  const username = localStorage.getItem("username");

  if (username) {
    usernameDisplay.textContent = `Bienvenido, ${username}!`;
    // Aquí puedes agregar cualquier otra lógica para mostrar una foto del usuario, etc.
  }
}

mostrarNombreUsuario();