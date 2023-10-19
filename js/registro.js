class Usuario{
    constructor(nombre,apellido, email, password, genero, fecha){
     this.nombre = nombre;
     this.apellido = apellido;
     this.email = email;
     this.password = password;
     this.genero = genero;
     this.fecha = fecha;
   }   
}

let listUsuarios = [];
listUsuarios = JSON.parse(localStorage)

const formRegistro = document.getElementById("registro");

formRegistro.addEventListener("submit", function (e) {
    e.preventDefault();

    const nombreNewUser = document.getElementById("name").value;
    const apellidoNewUser = document.getElementById("apellidos").value;
    const emailNewUser = document.getElementById("email").value;
    const passwordNewUser = document.getElementById("pass").value;
    const generoNewUser = document.getElementById("genero").value;
    const fechaeNewUser = document.getElementById("name").value;

    let newUsuario = new Usuario(nombreNewUser, apellidoNewUser, emailNewUser, passwordNewUser, generoNewUser, fechaeNewUser);

    listUsuarios.push(newUsuario);
    console.log(listUsuarios);

    localStorage.setItem()
})