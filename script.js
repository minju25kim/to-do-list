const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLogin(event) {
  event.preventDefault();
  let userName = loginInput.value;
  loginInput.value = "";
  console.log(userName);
}

loginButton.addEventListener("click", handleLogin);
