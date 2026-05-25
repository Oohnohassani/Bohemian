"use strict";

console.log("Script running...");

// Elements
const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const form = document.querySelector("#form");

// Helpers
function validateInputs(value, chars) {
  if (value && value.length > 0 && value.length >= +chars) {
    console.log("success ✅");
  } else {
    console.log("😔");
  }
}

// Events
form.addEventListener("submit", function (e) {
  e.preventDefault();

  validateInputs(emailInput.value, 6);
  validateInputs(passwordInput.value, 3);
});

passwordInput.addEventListener("input", function (e) {
  console.log(e.target.value);
});

// Alert
alert("👉 Create or login to your account");
