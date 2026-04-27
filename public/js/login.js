/* VARIABLES */
const form = document.getElementById("formLogin");

const API = "";

/* FUNCIONES */
function valueValidation(value) {
  /* valida si existe un valor */
  return typeof value === "string" && value.length !== 0 ? true : false;
}

form.addEventListener("submit", function (event) {
  /* detecta el evento de envio de formulario */
  event.preventDefault();

  const data = event.target;

  const user = data.user.value;
  const pass = data.pass.value;

  formValidation(user, pass);
});

function formValidation(user, pass) {
  /* valida cada campo del formulario */
  trueUser = valueValidation(user);
  if (!trueUser) {
    alert("verifica el campo usuario");
    return;
  }
  truePass = valueValidation(pass);
  if (!truePass) {
    alert("verifica el campo de contraseña");
    return;
  }

  console.log("todo ok");
  setTimeout(10000, location.replace(""));
}

function authLogin() {
  /* valida el formulario con la API y recibe la respuesta */
}
