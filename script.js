const passwordField = document.getElementById('password');
const toggleVisibilityButton = document.getElementById('toggle-password-visibility');
const visibilityMessage = document.getElementById('password-visibility');
const passwordError = document.getElementById('password-error');

// password validation
function validatePassword() {
  const password = passwordField.value;
  if (!password) {
    passwordError.textContent = 'Password is required.';
    passwordField.setAttribute('aria-invalid', 'true');
    return false;
  } else if (password.length < 8) {
    passwordError.textContent = 'Password must be at least 8 characters.';
    passwordField.setAttribute('aria-invalid', 'true');
    return false;
  } else {
    passwordError.textContent = '';
    passwordField.setAttribute('aria-invalid', 'false');
    return true;
  }
}

// password visibility and state change announcements
toggleVisibilityButton.addEventListener('click', () => {
  const isPasswordVisible = passwordField.type === 'text';
  passwordField.type = isPasswordVisible ? 'password' : 'text';

  toggleVisibilityButton.textContent = isPasswordVisible ? 'Show' : 'Hide';
  toggleVisibilityButton.setAttribute('aria-label', isPasswordVisible ? 'Show password' : 'Hide password');
  visibilityMessage.textContent = isPasswordVisible
    ? 'Password is currently hidden.'
    : 'Password is currently visible.';
});

// handling form submission
document.getElementById('signup-form').addEventListener('submit', (event) => {
  event.preventDefault();
  if (validatePassword()) {
    alert('Form submitted successfully!');
  } else {
    passwordField.focus();
  }
});
