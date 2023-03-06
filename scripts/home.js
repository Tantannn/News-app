'use strict'
const loginModal = document.getElementById("login-modal");
const mainContent = document.getElementById("main-content");
const welcomeMessage = document.getElementById("welcome-message");

const Logout = document.getElementById("btn-logout");
console.log(userActive)
displayhome()


//Display home
function displayhome() {
    console.log(userActive);
    if (userActive) {
        loginModal.style.display = "none";
        mainContent.style.display = "block";
        welcomeMessage.textContent = `Welcome ${userActive.fname}`
    }
    else {
        loginModal.style.display = "block";
        mainContent.style.display = "none";
    }
};
// log out 
Logout.addEventListener("click", function () {
    const isLogout = confirm('Are you sure?');
    if (isLogout) {
        userActive = null; 
        saveToStorage("userActive", userActive); 
        displayhome()
    }
});