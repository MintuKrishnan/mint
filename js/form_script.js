const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const password2 = document.getElementById("password2");

//functions
function showError(input, message) {
  const formControl = input.parentElement;
  formControl.className = " form-control error";
  const small = formControl.querySelector("small");
  small.innerText = message;
}
function showSuccess(input) {
  const formControl = input.parentElement;
  formControl.className = "form-control success";
}
function checkEmail(input) {
  const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email is not valid");
  }
}
function checkUsername(input) {
  const res = /^[a-zA-Z\s-]+$/;
  if (!res.test(input.value)) {
    showError(input, "Username can contain only characters");
  }
}
function checkRequired(inpurArr) {
  inpurArr.forEach(function (input) {
    if (input.value.trim() === "") {
      showError(input, `${getFieldName(input)} is required`);
    }
  });
}
function checkLength(inpurArr, min, max) {
  inpurArr.forEach(function (input) {
    if (input.value.trim().length <= min) {
      showError(
        input,
        `${getFieldName(input)} must be atleast ${min + 1} characters`
      );
    } else if (input.value.length >= max) {
      showError(
        input,
        `${getFieldName(input)} must be less than ${max + 1} characters`
      );
    } else {
      showSuccess(input);
    }
  });
}

function checkPasswordMatch(input1, input2) {
  if (input1.value !== input2.value) {
    showError(input2, "Password do not match");
  }
}
//getFieldName function
function getFieldName(input) {
  return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}
//event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  checkLength([username], 3, 19);
  checkLength([password, password2], 5, 19);
  checkPasswordMatch(password, password2);
  checkEmail(email);
  checkUsername(username);
  checkRequired([username, email, password, password2]);
});
