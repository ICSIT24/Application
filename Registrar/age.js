// age.js
window.onload = function() {
    const ageCells = document.querySelectorAll('.age');  // Select all age cells
    const birthdayCells = document.querySelectorAll('td:nth-child(4)');  // Select all birthday cells (4th column)

    // Iterate over each birthday and calculate the age
    birthdayCells.forEach((birthdayCell, index) => {
        const birthDate = new Date(birthdayCell.textContent);  // Parse the birthday into a Date object
        
        // Ensure the birthDate is valid
        if (isNaN(birthDate)) {
            console.error("Invalid date:", birthdayCell.textContent);
            return; // Skip invalid dates
        }

        const age = calculateAge(birthDate);

        // Set the corresponding age cell's value
        if (ageCells[index]) {
            ageCells[index].textContent = age;
        }
    });

    // Calculate age based on the birthdate
    function calculateAge(birthDate) {
        const today = new Date();
        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();
        
        if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        return age;
    }
};
