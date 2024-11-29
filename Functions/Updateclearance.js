class ClearanceUpdater {
    constructor(studentManager) {
        this.studentManager = studentManager; // Reference to the StudentManager instance
        this.clearanceOrder = ["SAS", "ASO", "Medical", "Evaluator", "Billing", "Registrar"]; // Define clearance order
        this.initializeEventListeners(); // Attach event listeners
    }

    initializeEventListeners() {
        // Add click event listeners to all "Signed" buttons
        document.querySelectorAll("#sidebar-container button.btn-success").forEach(button => {
            button.addEventListener("click", this.handleButtonClick.bind(this));
        });
    }

    handleButtonClick(event) {
        const studentId = document.getElementById("additionalInfo").value;

        if (!studentId) {
            this.showAlert("Please enter a Student ID to proceed.", "warning");
            return;
        }

        const student = this.studentManager.findStudent(studentId);
        if (!student) {
            this.showAlert("Student not found!", "danger");
            return;
        }

        // Extract the clearance type from the button text
        const clearanceType = event.target.textContent.split(" ")[0];
        this.updateClearanceStatus(student, clearanceType);
    }

    updateClearanceStatus(student, clearanceType) {
        const currentIndex = this.clearanceOrder.indexOf(clearanceType);

        // Check if the clearance type exists and if the previous step is Signed
        if (currentIndex === 0 || student.clearanceData[this.clearanceOrder[currentIndex - 1]] === "Signed") {
            student.clearanceData[clearanceType] = "Signed";

            // If the current step is "Registrar", update the DateSigned
            if (clearanceType === "Registrar") {
                student.clearanceData.DateSigned = this.getCurrentDate();
            }

            // Save and refresh
            this.studentManager.saveStudentsToStorage();
            this.studentManager.populateTable();

            // Success message
            this.showAlert(`${clearanceType} marked as Signed for Student ID: ${student.studentId}.`, "success");
        } else {
            // Error message
            this.showAlert(`Cannot sign ${clearanceType} as the previous step is not yet signed.`, "danger");
        }
    }

    getCurrentDate() {
        const currentDate = new Date();
        return currentDate.toLocaleDateString("en-US", {
            year: "2-digit",
            month: "2-digit",
            day: "2-digit"
        });
    }

    showAlert(message, type) {
        const alert = new Alert();
        alert.showAlert(message, type);
    }
}

// Instantiate the ClearanceUpdater
const clearanceUpdater = new ClearanceUpdater(studentManager);
