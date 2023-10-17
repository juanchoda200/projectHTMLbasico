const loginForm = document.getElementById("login-form")

if (loginForm) {
    loginForm.addEventListener("submit", (event) => {
        event.preventDefault()

        const email = document.getElementById("login-email").value
        const password = document.getElementById("login-password").value

        const users = JSON.parse(localStorage.getItem("USERS")) || []

        const user = users.find((user) => user.password === password && user.email === email)

        if (user) {
            localStorage.setItem("USUARIO_ACTUAL" , JSON.stringify(user))
        } else {
            alert("Credenciales incorrectas")
        }

        window.location = "./login.html"
    })
}