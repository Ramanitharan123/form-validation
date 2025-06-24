document.getElementById("myForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formSuccess = document.getElementById("formSuccess");

  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formSuccess.textContent = "";

  let isValid = true;

  if (name === "" || !/^[A-Za-z\s]+$/.test(name)) {
    nameError.textContent = "Enter a valid name (letters only).";
    isValid = false;
  }

  if (email === "" || !/^\S+@\S+\.\S+$/.test(email)) {
    emailError.textContent = "Enter a valid email address.";
    isValid = false;
  }

  if (password.length < 6 || !/[A-Za-z]/.test(password) || !/[0-9]/.test(password)) {
    passwordError.textContent =
      "Password must be at least 6 characters, with letters and numbers.";
    isValid = false;
  }

  if (isValid) {
    formSuccess.textContent = "Form submitted successfully!";
  }
});