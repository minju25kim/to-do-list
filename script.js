const greeting = document.querySelector("#greeting");
const loginForm = document.querySelector("form");
const loginInput = loginForm.querySelector("input");
const loginButton = loginForm.querySelector("button");

const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";

function handleLogin(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASS);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASS);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", handleLogin);
} else {
  paintGreetings(savedUsername);
}
