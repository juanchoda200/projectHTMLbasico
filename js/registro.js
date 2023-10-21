class Usuario {
    constructor(nombre, apellido, email, password, genero, fecha) {
      this.nombre = nombre;
      this.apellido = apellido;
      this.email = email;
      this.password = password;
      this.genero = genero;
      this.fecha = fecha;
    }
  }
  
  let listUsuarios = [];
  listUsuarios = JSON.parse(localStorage.getItem("listUsuarios")) || [];
  
  const formRegistro = document.getElementById("registro-form");
  
  formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();
  
    const nombreNewUser = document.getElementById("name").value;
    const apellidoNewUser = document.getElementById("apellidos").value;
    const emailNewUser = document.getElementById("email").value;
    const passwordNewUser = document.getElementById("pass").value;
    const generoNewUser = document.getElementById("genero").value;
    const fechaNewUser = document.getElementById("fecha").value;
  
    let newUsuario = new Usuario(nombreNewUser, apellidoNewUser, emailNewUser, passwordNewUser, generoNewUser, fechaNewUser);
  
    listUsuarios.push(newUsuario);
    console.log(listUsuarios);
  
    localStorage.setItem("listUsuarios", JSON.stringify(listUsuarios));
  
    window.location.href = "./login.html";
    formRegistro.reset();
  });
  
  function mostrarUsuarios() {
    console.log(listUsuarios);
  }