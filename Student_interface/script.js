function validateLogin() {
    const studentId = document.getElementById('student-id').value;
    const password = document.getElementById('password').value;
    const correctStudentId = "1685"; // Example Student ID
    const correctPassword = "123"; // Example Password

    if (!studentId || !password) {
        alert("Please Enter All Fields");
        return false;
    } else if (password !== correctPassword) {
        alert("Invalid ID/Password");
        return false;
    } else if (studentId === correctStudentId && password === correctPassword) {
        alert("You have successfully logged in");
        // Proceed to the next page
        window.location.href = "./Student_interface/main-page1.html"; // Replace with your next page URL
        return false; // Prevent form submission
    }
}

function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
}

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}