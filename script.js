// Define a Student class
class Student {
    constructor(studentId, name, yearLevel, password) {
        this.studentId = studentId;
        this.name = name;
        this.yearLevel = yearLevel;
        this.password = password;
    }

    // Method to display student information
    displayInfo() {
        return `Student ID: ${this.studentId}, Name: ${this.name}, Year Level: ${this.yearLevel}`;
    }
}

// Define a StudentManager class to manage the collection of students
class StudentManager {
    constructor() {
        this.students = new Map();
    }

    // Method to add a new student
    addStudent(studentId, name, yearLevel, password) {
        if (this.students.has(studentId)) {
            console.log(`Student with ID ${studentId} already exists.`);
            return;
        }
        const newStudent = new Student(studentId, name, yearLevel, password);
        this.students.set(studentId, newStudent);
        console.log(`Student with ID ${studentId} added successfully.`);
    }

    // Method to display all students
    displayAllStudents() {
        if (this.students.size === 0) {
            console.log("No students in the system.");
            return;
        }
        this.students.forEach((student) => {
            console.log(student.displayInfo());
        });
    }

    // Method to find a student by ID
    findStudent(studentId) {
        if (this.students.has(studentId)) {
            const student = this.students.get(studentId);
            console.log(student.displayInfo());
        } else {
            console.log(`Student with ID ${studentId} not found.`);
        }
    }

    // Method to remove a student by ID
    removeStudent(studentId) {
        if (this.students.delete(studentId)) {
            console.log(`Student with ID ${studentId} removed successfully.`);
        } else {
            console.log(`Student with ID ${studentId} does not exist.`);
        }
    }
}

// Create a StudentManager instance
const studentManager = new StudentManager();

// Add students
studentManager.addStudent("2023176", "Arky Roel Balaga", "Freshman", "0955955260");
studentManager.addStudent("2023177", "Shiela Idul Dulshie", "Freshman", "09363066170");
studentManager.addStudent("2023178", "Apollo Quibs Quiboloy", "Freshman", "09363066171");

// Function to handle login
function handleLogin(event) {
    event.preventDefault(); // Prevent form submission from refreshing the page
    const studentId = document.getElementById("student-id").value;
    const password = document.getElementById("password").value;

    if (studentManager.students.has(studentId) && studentManager.students.get(studentId).password === password) {
        alert("Login successful! Redirecting...");
        
        // Store the student data in localStorage
        const student = studentManager.students.get(studentId);
        localStorage.setItem('loggedInStudent', JSON.stringify(student));

        // Redirect to Home.html
        window.location.href = "/Student_interface/Home.html";
    } else {
        alert("Invalid Student ID or Password. Please try again.");
    }
}

// Function to toggle password visibility
function togglePasswordVisibility() {
    const passwordField = document.getElementById("password");
    passwordField.type = passwordField.type === "password" ? "text" : "password";
}
