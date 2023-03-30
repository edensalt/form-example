// Select the form and all the input fields
const submitButton = document.getElementById('submit-button');
const inputFields = document.querySelectorAll('input');

// Add an event listener to the form for the submit event
submitButton.addEventListener('click', (e) => {
  // Loop through each input field and check if it's valid
  inputFields.forEach((input) => {
    if (!input.checkValidity()) {
      // If the input is not valid, add the error class to the input field
      input.classList.add('error');
      // Display a message explaining the error
      const errorMessage = document.createElement('div');
      errorMessage.innerText = input.validationMessage;
      input.insertAdjacentElement('afterend', errorMessage);
      // Prevent the form from submitting
      e.preventDefault();
    }
  });
});

console.log('hi');