document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let email = document.getElementById("email").value.trim();
  let password = document.getElementById("password").value.trim();

  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");

  let toast = document.getElementById("toast");

  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  // Email validation
  let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.match(emailPattern)) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  // Password validation
  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.length < 8) {
    passwordError.textContent = "Password must be at least 8 characters";
    isValid = false;
  }

  // Success message as toast
  if (isValid) {
    showToast("Login successful! Welcome " + email);
    document.getElementById("loginForm").reset();
  }
});

// Function to show toast
function showToast(message) {
  let toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("show");

  // Hide toast after 3 seconds
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}