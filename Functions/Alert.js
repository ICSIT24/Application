class Alert {
    constructor() {
        this.alertContainer = document.getElementById('alert-container');
    }

    showAlert(message, type) {
        // Create a new div element for the alert
        const alertElement = document.createElement('div');
        alertElement.classList.add('alert', `alert-${type}`, 'alert-dismissible', 'fade', 'show');
        alertElement.role = 'alert';

        // Set the alert message
        alertElement.textContent = message;

        // Create a close button for the alert
        const closeButton = document.createElement('button');
        closeButton.type = 'button';
        closeButton.classList.add('btn-close');
        closeButton.setAttribute('data-bs-dismiss', 'alert');
        closeButton.setAttribute('aria-label', 'Close');

        // Append close button and alert message to the alert
        alertElement.appendChild(closeButton);

        // Append the alert to the alert container
        this.alertContainer.appendChild(alertElement);
    }
}
