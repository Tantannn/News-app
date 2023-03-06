'use strict'
const submitBtn = document.getElementById("btn-submit");
const password = document.getElementById("input-password");
const userName = document.getElementById("input-username");

getFromStorage(userArr)

// GET https://newsapi.org/v2/top-headlines/sources?category=businessapiKey=d9eff938f7e544ef8e492a57ac3f7493


console.log(userArr)

//submit and log in
submitBtn.addEventListener("click", function () {
  var isvalidate = validate();
  if (isvalidate) {
    const user = userArr.find(
      (item) =>
        item.userName === userName.value &&
        item.password === password.value
    );
    if (user) {
      alert("Log in successful!");

      //save active user
      saveToStorage("userActive", user)
      window.location.assign("../index.html");

    } else {
      alert("Your password is wrong or this account hasn't been registered. Please check again!");
    }
    return user;
  }

});
// Check password and user name
function validate() {
  if (!userName.value) {
    alert("Please enter your Username");
    return ""
  }
  if (!password.value) {
    alert("Please enter your password");
    return ""
  }
  return true;
}
