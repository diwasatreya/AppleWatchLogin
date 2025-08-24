  const togglePassword = document.getElementById("togglePassword");
  const passwordInput = document.getElementById("password");
  togglePassword.addEventListener("click", () => {
    const type =
      passwordInput.getAttribute("type") === "password" ? "text" : "password";
    passwordInput.setAttribute("type", type);
    togglePassword.classList.toggle("ri-eye-off-fill");
  });

  const toggleConfirmPassword = document.getElementById(
    "toggleConfirmPassword"
  );
  const confirmPasswordInput = document.getElementById("confirmPassword");
  toggleConfirmPassword.addEventListener("click", () => {
    const type =
      confirmPasswordInput.getAttribute("type") === "password"
        ? "text"
        : "password";
    confirmPasswordInput.setAttribute("type", type);
    toggleConfirmPassword.classList.toggle("ri-eye-off-fill");
  });