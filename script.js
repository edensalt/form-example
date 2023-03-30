// Select the form and all the input fields
const submitButton = document.getElementById('submit-button');
const inputFields = document.querySelectorAll('input');

// Add an event listener to the form for the submit event
submitButton.addEventListener('click', (e) => {

    // Loop through each input field and check if it's valid
    inputFields.forEach((input) => {

        // Define password values
        const pwd1 = document.getElementById('pwd').value;
        console.log(pwd1);

        const pwd2 = document.getElementById('confirm-pwd').value;
        console.log(pwd2);

        // Remove error messages if they exist and the new input is valid

        if (input.checkValidity()) {
            const existingErrorMessage = input.nextElementSibling;
            if (existingErrorMessage && existingErrorMessage.classList.contains('error-message')) {
                existingErrorMessage.remove(); // remove the existing error message
            }
        }

        else if (!input.checkValidity() || pwd1 !== pwd2) {
            // If the input is not valid, add the error class to the input field
            input.classList.add('error');
            // Display a message explaining the error
            const errorMessage = document.createElement('div');
            errorMessage.classList.add('error-message');
            errorMessage.innerText = input.validationMessage;
            // Style the error message
            errorMessage.style.fontSize = '0.7rem';
            errorMessage.style.fontFamily = `'titillium_webregular', Arial, Helvetica, sans-serif`;
            errorMessage.style.maxWidth = '210px'
            errorMessage.style.marginTop = '-30px';
            errorMessage.style.marginBottom = '5px';
            errorMessage.style.marginRight = '0px';

            // Remove previous messages

            const existingErrorMessage = input.nextElementSibling;
            if (existingErrorMessage && existingErrorMessage.classList.contains('error-message')) {
                existingErrorMessage.remove(); // remove the existing error message
            }

            // Insert the message
            input.insertAdjacentElement('afterend', errorMessage);
            // Prevent the form from submitting
            e.preventDefault();
        }
    });

});

console.log('hi');