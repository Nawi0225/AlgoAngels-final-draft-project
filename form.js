// Get references to form elements
const form = document.forms.contactForm;
const firstNameInput = form.elements.firstname;
const lastNameInput = form.elements.lastname;
const emailInput = form.elements.email;
const phoneInput = form.elements.phone;

// Function to validate the form
function validateForm() {
  // Reset any previous error messages
  clearErrors();

  // Flag to track if there are any validation errors
  let hasErrors = false;

  // Validation for first name 
  if (!isLettersOnly(firstNameInput.value)) {
    displayError(firstNameInput, "Please enter a valid first name.");
    hasErrors = true;
  }

  // Validation for last name 
  if (!isLettersOnly(lastNameInput.value)) {
    displayError(lastNameInput, "Please enter a valid last name.");
    hasErrors = true;
  }

  // Validation for email 
  if (!isValidEmail(emailInput.value)) {
    displayError(emailInput, "Please enter a valid email address.");
    hasErrors = true;
  }

  // Validation for phone number 
  if (!isValidPhoneNumber(phoneInput.value)) {
    displayError(phoneInput, "Please enter a valid phone number.");
    hasErrors = true;
  }

  // Check if there are any errors
  if (hasErrors) {
    return false; // Prevent form submission
  }

  // If there are no errors, the form will be submitted
  return true;
}

// Function to clear error messages
function clearErrors() {
  const errorElements = document.querySelectorAll(".error");
  errorElements.forEach((element) => {
    element.textContent = "";
  });
}

// Function to display an error message for a specific input
function displayError(input, message) {
  const errorElement = input.nextElementSibling; // Assuming error message is next to the input
  errorElement.textContent = message;
}

// Helper functions for validation
function isLettersOnly(text) {
  return /^[A-Za-z]+$/.test(text);
}

function isValidEmail(email) {
  // Use a regular expression for basic email validation
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhoneNumber(phone) {
  // Use a regular expression for numeric phone validation
  return /^\d{10}$/.test(phone);
}

// Add a form submit event listener
form.addEventListener("submit", validateForm);

