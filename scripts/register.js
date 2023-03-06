'use strict'
// 2	Chức năng: Register
const fname = document.querySelector("#input-firstname")
const lname = document.querySelector("#input-lastname")
const userName = document.querySelector("#input-username")
const password = document.querySelector("#input-password")
const confirmPassword = document.querySelector("#input-password-confirm")
const submitBtn = document.getElementById("btn-submit")


// register
submitBtn.addEventListener('click', function () {
    const user = new User(
        fname.value,
        lname.value,
        userName.value,
        password.value,
    );
    //check valid
    const isvalidate = validateData(user)
    if (isvalidate) {
        userArr.push(user);
        saveToStorage("userArr", userArr);
        alert("Register successful");

        window.location.href = '../pages/login.html'; 
    };
});
console.log(userArr)
//validate Data
function validateData() {
    if (!fname.value) {
        alert("Please input your First Name!");
        return ""
    }
    if (!lname.value) {
        alert("Please input your Last Name!");
        return ""
    }
    if (!userName.value) {
        alert("Please input your Username!");
        return ""
    }

    if (password.value.length < 8) {
        alert("Password must be longer than 8");
        return ""
    }
    if (password.value !== confirmPassword.value) {
        alert("Your Confirm Password must match your Password");
        return ""
    }
    for (let i = 0; i < userArr.length; i++) {
        if (userArr[i].userName === userName.value) {
            alert(`Your Username has already existed`);
            return ""
        }
    }
    return true
}