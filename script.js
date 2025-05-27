function togglePassword() {
    const passwordInput = document.getElementById("passwordInput");
    const icon = document.querySelector(".toggle-password");

    if (passwordInput.type === "password") {
      passwordInput.type = "text";
      icon.textContent = "🙈";
    } else {
      passwordInput.type = "password";
      icon.textContent = "👁";
    }
  }

  function validateInputs() {
    const login = document.getElementById("loginInput").value.trim();
    const password = document.getElementById("passwordInput").value.trim();
    const button = document.getElementById("submitBtn");

    if (login && password) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }

  document.getElementById("loginInput").addEventListener("input", validateInputs);
  document.getElementById("passwordInput").addEventListener("input", validateInputs);