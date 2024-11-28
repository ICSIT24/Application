class FormValidator {
    constructor(formId, buttonId) {
        this.form = document.getElementById(formId);  // Form element
        this.button = document.getElementById(buttonId);  // Button element

        // Attach submit event listener
        this.form.addEventListener('submit', this.validateForm.bind(this));
    }

    // Method to validate the form submission
    validateForm(event) {
        const buttonText = this.button.innerText;  // Get the button text

        if (buttonText === "Register") {
            // If the button text is "Register", allow form submission
            return true;
        } else {
            // If the button text is anything else (e.g., "Update"), prevent form submission
            event.preventDefault();
            alert('Please make sure the button text is "Register" before submitting!');
            return false;
        }
    }
}

// Instantiate the class and validate the form
document.addEventListener('DOMContentLoaded', function() {
    new FormValidator('registrationForm', 'registerButton');
});
