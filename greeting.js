const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form:first-child input");
const greeting = document.querySelector("#greeting");
const hiddenClass_Name = "hidden";
const USERNAME_KEY = "username";

// function to save the username to localstorage and hide the form
function onLogInSubmit(event) {
    console.log("ss")
    event.preventDefault();
    // Add a class to the login for so it is not visible anymore
    loginForm.classList.add(hiddenClass_Name);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username)
    paintGreetings(username);

}
loginForm.addEventListener("submit", onLogInSubmit);

function paintGreetings(username) {
    greeting.innerText = "Hello " + username;
    greeting.classList.remove(hiddenClass_Name);
}




const savedUserName = localStorage.getItem(USERNAME_KEY)

if (savedUserName === null) {
    loginForm.classList.remove(hiddenClass_Name);
} else {
    paintGreetings(savedUserName);
}