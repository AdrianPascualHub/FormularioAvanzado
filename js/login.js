function Login() {
  var nombre = document.getElementById("nombre").value;
  var email = document.getElementById("email").value;
  var nombreLogin = localStorage.nom;
  var emailLogin = localStorage.email;

  if (nombre == nombreLogin && email == emailLogin){
    window.location.replace("../html/inicio.html");
  }
}
