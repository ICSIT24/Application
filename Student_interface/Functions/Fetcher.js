   // Student Class Definition
   class Student {
    constructor(studentId, name, yearLevel) {
        this.studentId = studentId;
        this.name = name;
        this.yearLevel = yearLevel;
    }

    // Method to retrieve the student data from localStorage
    static getStudentFromLocalStorage() {
        const studentData = JSON.parse(localStorage.getItem('loggedInStudent'));
        if (studentData) {
            return new Student(studentData.studentId, studentData.name, studentData.yearLevel);
        } else {
            return null;
        }
    }

    // Method to populate the student data into the table
    static populateStudentTable(student) {
        const tableBody = document.getElementById('student-table-body');
        const studentRow = `
            <tr>
                <td>${student.studentId}</td>
                <td>${student.name}</td>
                <td>${student.yearLevel}</td>
            </tr>
        `;
        tableBody.innerHTML = studentRow;
    }
}

// On page load, retrieve the logged-in student from localStorage and populate the table
const loggedInStudent = Student.getStudentFromLocalStorage();

if (loggedInStudent) {
    Student.populateStudentTable(loggedInStudent);
} else {
    console.log('No student is logged in.');
}