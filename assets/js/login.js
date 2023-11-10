const formLogin = document.getElementById("login-form");

formLogin.addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (verificarCredenciales(username, password)) {
    localStorage.setItem("username", username);
    formLogin.reset();
    redirigirAlInicio(); // Redirige al usuario a la página de inicio
  } else {
    alert("Credenciales inválidas. Por favor, inténtalo de nuevo.");
  }
});

function verificarCredenciales(username, password) {
  // Agrega aquí la lógica para verificar las credenciales del usuario (por ejemplo, en localStorage o una base de datos)
  const user = JSON.parse(localStorage.getItem("listUsuarios"));
  return user.some(x => x.email === username && x.password === password);
}

function redirigirAlInicio() {
  // Redirige al usuario a la página de inicio (cambia "index.html" al nombre de tu página de inicio)
  localStorage.setItem("login", true);
  window.location.href = "index.html";
}
