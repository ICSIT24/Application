document.addEventListener('DOMContentLoaded', function () {
    // Create the aside element
    const aside = document.createElement('aside');
    aside.classList.add('aside2');
    
    // Create the logo image
    const logoImg = document.createElement('img');
    logoImg.src = './images/nbsc-logo.png';
    logoImg.alt = 'School Logo';

    // Create the heading for the sidebar
    const heading = document.createElement('h3');
    heading.textContent = 'NBSC Registrar';

    // Create the div for the buttons
    const buttonContainer = document.createElement('div');
    buttonContainer.classList.add('button-margin');
    
    // Create each button (link)
    const studentRegistrationButton = document.createElement('a');
    studentRegistrationButton.href = 'page1.php';
    studentRegistrationButton.classList.add('button1');
    studentRegistrationButton.textContent = 'Student Registration';
    
    const startEnrollmentButton = document.createElement('a');
    startEnrollmentButton.href = 'page2.php';
    startEnrollmentButton.classList.add('button1');
    startEnrollmentButton.textContent = 'Start Enrollment';
    
    const clearanceDistributionButton = document.createElement('a');
    clearanceDistributionButton.href = 'page6.html';
    clearanceDistributionButton.classList.add('button1');
    clearanceDistributionButton.textContent = 'Clearance Distribution';
    
    const archivesButton = document.createElement('a');
    archivesButton.href = 'page9.html';
    archivesButton.classList.add('button1');
    archivesButton.textContent = 'Archives';

    // Append the buttons to the button container
    buttonContainer.appendChild(studentRegistrationButton);
    buttonContainer.appendChild(startEnrollmentButton);
    buttonContainer.appendChild(clearanceDistributionButton);
    buttonContainer.appendChild(archivesButton);

    // Append the logo, heading, and button container to the aside element
    aside.appendChild(logoImg);
    aside.appendChild(heading);
    aside.appendChild(buttonContainer);

    // Get the sidebar container by ID and append the aside to it
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.appendChild(aside);
    } else {
        console.error("Sidebar container not found!");
    }
});
