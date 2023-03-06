"use strict";
const inputCategory = document.getElementById("input-category");
const inputPageSize = document.getElementById("input-page-size");
const BtnSettings = document.getElementById("btn-submit");



if (userActive) {
  // save button

  BtnSettings.addEventListener("click", function () {

    const check = validateData();
    if (check) {
      
      userActive.pagesize = inputPageSize.value;
      userActive.category = inputCategory.value;
      saveToStorage("userActive", userActive);
      console.log(userActive)


      const index = userArr.findIndex(
        (item) => item.username === userActive.username
      );
      userArr[index] = userActive;
      alert("Save successful!");
      inputPageSize.value = "";
      inputCategory.value = "General";
      saveToStorage("userArr", userArr);
    }
  });
  //validate
  function validateData() {
    if (!inputPageSize.value || inputPageSize.value < 1) {
      alert("Please enter page nunber > 0!");
      return '';
    }
    if (inputCategory.value === "General") {
      alert("Please select your Catagory!");
      return;
    }
    return true;
  }
}else {
  alert('Please log in!')
}

