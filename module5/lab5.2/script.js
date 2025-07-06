//selecting all DOMs of i/ps and error msg span
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const errormsg = document.getElementsByClassName("error-message");
const register = document.getElementById("register");
register.addEventListener("click", (event) => {
  // validation
  event.preventDefault();

  if (
    !username.value ||
    !email.value ||
    !password.value ||
    !confirmPassword.value
  ) {
    return "All filed required to fill. ";
  } else {
    alert("Submitted");
    localStorage.setItem("User_name", username.value);

    //localStorage.setItem("UserName", username.value);
    email.value = "";
    password.value = "";
    confirmPassword.value = "";
    errormsg[0].textContent = "";
    errormsg[1].textContent = "";
    errormsg[2].textContent = "";
    errormsg[3].textContent = "";
    errormsg = "";
  }
});
// saved username

//   Add input event listeners to each field.
username.addEventListener("input", () => {
  if (username.value.length > 4) {
    errormsg[0].textContent = "too Short! Make sure have Minimum Length 4";
    if (username.validity.valid) {
      errormsg[0].textContent = "Valid! ";
    }
  } else {
    errormsg[0].textContent = "too Short";
  }
});
email.addEventListener("input", () => {
  if (email.value.includes(".com")) {
    if (email.validity.valid) {
      errormsg[1].textContent = "Valid! ";
      return;
    }
  } else {
    errormsg[1].textContent = " not Valid! ";
  }
});

password.addEventListener("input", () => {
  const isvalid =
    /[!@#$]/.test(password.value) &&
    /[A-Z]/.test(password.value) &&
    /[a-z]/.test(password.value) &&
    /[0-9]/.test(password.value) &&
    password.value.length >= 8;
  if (isvalid) {
    errormsg[2].textContent = "Valid! ";
  } else {
    errormsg[2].textContent = "not valid ";
  }
});
confirmPassword.addEventListener("input", () => {
  if (confirmPassword.value !== password.value) {
    errormsg[3].textContent = " Passwords shold be same";
  } else {
    errormsg[3].textContent = " Matched! ";
  }
});
document.addEventListener("DOMContentLoaded", () => {
  username.value = localStorage.getItem("User_name");
});
