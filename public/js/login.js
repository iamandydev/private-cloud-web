/* variables */
const form = document.getElementById("formLogin");

const api = "";

/* funciones */
function valueValidation(value) {
  return typeof value === "string" && value.length !== 0 ? true : false;
}

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const data = event.target;

  const user = data.user.value;
  const pass = data.pass.value;

  formValidation(user, pass);
});

function formValidation(user, pass) {
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
  setTimeout(
    10000,
    location.replace(""),
  );
}


function authLogin() {}
