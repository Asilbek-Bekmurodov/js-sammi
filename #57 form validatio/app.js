const elForm = document.querySelector("#form");
const elEmail = document.querySelector("#email");
const elPassword = document.querySelector("#password");
const errorMessages = document.querySelectorAll(".error-message");
const errorIcons = document.querySelectorAll(".fa-exclamation-circle");
const elFormInputs = document.querySelectorAll(".form__input");

// Xatoliklarni ko'rsatish funksiyasi
function showError(index, message) {
  errorMessages[index].textContent = message;
  errorMessages[index].classList.remove("hide");
  errorIcons[index].classList.remove("hide");
  elFormInputs[index].classList.add("form__input-error");
}

// Xatoliklarni yashirish funksiyasi
function hideError(index) {
  errorMessages[index].classList.add("hide");
  errorIcons[index].classList.add("hide");
  elFormInputs[index].classList.remove("form__input-error");
}

// Form submit event
elForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let isValid = true;

  if (elEmail.value.trim() === "") {
    showError(0, "Email can't be blank");
    isValid = false;
  } else {
    hideError(0);
  }

  if (!elEmail.value.includes("@gmail.com")) {
    showError(0, "Enter a valid email address");
    isValid = false;
  } else {
    hideError(0);
  }

  if (elPassword.value.trim() === "") {
    showError(1, "Password can't be blank");
    isValid = false;
  } else {
    hideError(1);
  }

  if (isValid) {
    console.log("Form successfully submitted");
    console.log(isValid)
    elForm.reset(); // Formni tozalash
  }
});

// Inputlarni real vaqtda tekshirish
elEmail.addEventListener("input", (e) => {
  if (e.target.value.trim() === "") {
    showError(0, "Email can't be blank");
  } else {
    hideError(0);
  }
});

elPassword.addEventListener("input", (e) => {
  if (e.target.value.trim() === "") {
    showError(1, "Password can't be blank");
  } else {
    hideError(1);
  }
});
