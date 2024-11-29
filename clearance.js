// Create a Student class to manage individual student data
class Student {
    constructor(studentId, name, yearLevel) {
        this.studentId = studentId;
        this.name = name;
        this.yearLevel = yearLevel;
        this.clearanceData = {};
    }

    createClearance() {
        this.clearanceData = {
            SAS: 'Next',
            ASO: 'Unsigned',
            Medical: 'Unsigned',
            Evaluator: 'Unsigned',
            Billing: 'Unsigned',
            Registrar: 'Unsigned',
            DateSigned: ''
        };
    }

    getClearanceData() {
        return [
            this.studentId,
            this.clearanceData.SAS,
            this.clearanceData.ASO,
            this.clearanceData.Medical,
            this.clearanceData.Evaluator,
            this.clearanceData.Billing,
            this.clearanceData.Registrar,
            this.clearanceData.DateSigned
        ];
    }
}

class StudentManager {
    constructor() {
        this.students = new Map();
        this.loadStudentsFromStorage();
    }

    loadStudentsFromStorage() {
        const storedData = localStorage.getItem('students');
        if (storedData) {
            const parsedData = JSON.parse(storedData);
            parsedData.forEach(student => {
                const newStudent = new Student(student.studentId, student.name, student.yearLevel);
                newStudent.clearanceData = student.clearanceData;
                this.students.set(student.studentId, newStudent);
            });
        }
    }

    saveStudentsToStorage() {
        const studentsArray = Array.from(this.students.values());
        localStorage.setItem('students', JSON.stringify(studentsArray));
    }

    addStudent(studentId, name, yearLevel) {
        if (this.students.has(studentId)) {
            console.log(`Student with ID ${studentId} already exists.`);
            return;
        }
        const newStudent = new Student(studentId, name, yearLevel);
        this.students.set(studentId, newStudent);
        this.saveStudentsToStorage();
        console.log(`Student with ID ${studentId} added successfully.`);
    }

    findStudent(studentId) {
        return this.students.get(studentId) || null;
    }

    createClearanceForStudent(studentId) {
        const student = this.findStudent(studentId);
        if (student) {
            student.createClearance();
            console.log(`Clearance created for Student ID: ${studentId}`);
            this.saveStudentsToStorage();
            return student.getClearanceData();
        } else {
            console.log("Student not found!");
            return null;
        }
    }

    // Populate the table when the page loads or refreshes
    populateTable() {
        const tableBody = document.querySelector("#student-table-body");
        tableBody.innerHTML = ""; // Clear any existing rows
        this.students.forEach(student => {
            const clearanceData = student.getClearanceData();
            const newRow = document.createElement("tr");
            clearanceData.forEach(data => {
                const newCell = document.createElement("td");
                newCell.textContent = data;
                newRow.appendChild(newCell);
            });
            tableBody.appendChild(newRow);
        });
    }
}

const studentManager = new StudentManager();

// Add some sample students if not already added
if (!studentManager.findStudent("2023176")) {
    studentManager.addStudent("2023176", "Arky Roel Balaga", "Freshman");
}
if (!studentManager.findStudent("2023177")) {
    studentManager.addStudent("2023177", "Shiela Idul Dulshie", "Freshman");
}

// Event listener for "Create Clearance" button
document.getElementById("createClearanceBtn").addEventListener("click", function () {
    const studentId = document.getElementById("additionalInfo").value;
    const clearanceData = studentManager.createClearanceForStudent(studentId);
    if (clearanceData) {
        studentManager.populateTable(); // Re-populate table after creating clearance
    }
});

// Populate table on page load
window.onload = function() {
    studentManager.populateTable();
};
