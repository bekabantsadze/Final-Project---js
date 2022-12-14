let formRegistration = document.getElementById("registration");

formRegistration.addEventListener("submit", function (event) {
  event.preventDefault();
  let errors = {};
  let form = event.target;

  
  let agree = document.getElementById("agree").checked;
  if (!agree) {
    errors.agree = "You must agree terms and conditions";
  }

  let gender = false;
  form.querySelectorAll('[name="gender"]').forEach((item) => {
    if (item.checked) {
      gender = true;
    }
  });

  if (!gender) {
    errors.gender = "Please select your gender";
  }

  console.log(errors);

  form.querySelectorAll(".error-text").forEach((element) => {
    element.innerText = " ";
  });

  for (let item in errors) {

    let spanContent = document.getElementById("error_" + item);

    if (spanContent) {
      spanContent.textContent = errors[item];
    }
  }

  if (Object.keys(errors).length == 0) {
    form.submit();
  }
});



let showPassword = document.getElementById("showpassword");
let toggleIcon = document.getElementById("toggleIcon");

toggleIcon.addEventListener("click", function () {
  if (showPassword.type == "password") {
    showPassword.setAttribute("type", "text");
    toggleIcon.classList.remove("fa-eye");
    toggleIcon.classList.add("fa-eye-slash");
  } else {
    toggleIcon.classList.remove("fa-eye-slash");
    toggleIcon.classList.add("fa-eye");
    showPassword.setAttribute("type", "password");
  }
});

let username = document.getElementById("usernamefield");
username.addEventListener("keyup", function () {
  let nameValue = document.getElementById("usernamefield").value;
  let errorName = document.getElementById("text1");
  let nameRegex =
  /[a-zA-Z0-9]([._-](?![._-])|[a-zA-Z0-9]){3,18}[a-zA-Z0-9]$/;  
  if (nameValue.match(nameRegex)) {
    errorName.innerText = "Your name is Valid";
    errorName.style.color = "green";
  } else {
    errorName.innerText = "Your Name is inalid";
    errorName.style.color = "red";
  }
  if (nameValue == "") {
    errorName.innerText = " ";
  }
});
username.addEventListener("focus", function (event) {
  event.target.style.border = "2px solid green";
  event.target.style.outline = "none";
});


let emailField = document.getElementById("email");


emailField.addEventListener("keyup", function () {
  let emailValue = document.getElementById("email").value;
  let errorEmail = document.getElementById("text");
  let emailRegex =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (emailValue.match(emailRegex)) {
    errorEmail.innerText = "Your Email is Valid";
    errorEmail.style.color = "green";
  } else {
    errorEmail.innerText = "Your Email is inalid";
    errorEmail.style.color = "red";
  }

  if (emailValue == "") {
    errorEmail.innerText = " ";
  }
});
