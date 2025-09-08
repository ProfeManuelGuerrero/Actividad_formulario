const formulario = document.getElementById("formulario");
const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const edad = document.getElementById("edad");
const password = document.getElementById("password");

formulario.addEventListener("submit", function(event) {
  event.preventDefault();

  // Validar nombre y apellido
  if (nombre.value.trim() === "" || apellido.value.trim() === "") {
    alert("Debe completar nombre y apellido");
    return;
  }

  // Validar edad
  if (edad.value === "" || isNaN(edad.value) || edad.value < 18) {
    alert("Debe ingresar una edad válida (18 o más).");
    return;
  }

  // Validar contraseña
  if (password.value.length < 6) {
    alert("La contraseña debe tener al menos 6 caracteres.");
    return;
  }

  alert("Registro exitoso");
});
