document.addEventListener('DOMContentLoaded', function () {
  // Sidebar Creation
  const sidebar = document.createElement('aside');
  sidebar.classList.add('position-fixed', 'top-0', 'start-0', 'text-white', 'p-4', 'vh-100', 'w-25'); 
  // Applying gradient background using inline style (same as navbar)
  sidebar.style.background = 'linear-gradient(to bottom, #0043ae, #00235d)';

  // Create the logo image for the sidebar
  const sidebarLogoImg = document.createElement('img');
  sidebarLogoImg.src = './images/nbsc-logo.png';
  sidebarLogoImg.alt = 'School Logo';
  sidebarLogoImg.classList.add('d-block', 'mx-auto', 'mb-4');
  
  // Create the heading for the sidebar
  const sidebarHeading = document.createElement('h3');
  sidebarHeading.textContent = 'NBSC Registrar';

  // Create the div for the buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.classList.add('d-grid', 'gap-3');

  // Create the buttons for the sidebar
  const studentRegistrationButton = document.createElement('a');
  studentRegistrationButton.href = 'page1.php';
  studentRegistrationButton.classList.add('btn', 'btn-light');
  studentRegistrationButton.textContent = 'Student Registration';

  const startEnrollmentButton = document.createElement('a');
  startEnrollmentButton.href = 'page2.php';
  startEnrollmentButton.classList.add('btn', 'btn-light');
  startEnrollmentButton.textContent = 'Start Enrollment';

  const clearanceDistributionButton = document.createElement('a');
  clearanceDistributionButton.href = 'page6.html';
  clearanceDistributionButton.classList.add('btn', 'btn-light');
  clearanceDistributionButton.textContent = 'Clearance Distribution';

  const archivesButton = document.createElement('a');
  archivesButton.href = 'page9.html';
  archivesButton.classList.add('btn', 'btn-light');
  archivesButton.textContent = 'Archives';

  // Append buttons to the button container
  buttonContainer.appendChild(studentRegistrationButton);
  buttonContainer.appendChild(startEnrollmentButton);
  buttonContainer.appendChild(clearanceDistributionButton);
  buttonContainer.appendChild(archivesButton);

  // Append the logo, heading, and button container to the sidebar
  sidebar.appendChild(sidebarLogoImg);
  sidebar.appendChild(sidebarHeading);
  sidebar.appendChild(buttonContainer);

  // Select the sidebar container and append the sidebar
  const sidebarContainer = document.getElementById('sidebar-container');
  if (sidebarContainer) {
      sidebarContainer.appendChild(sidebar);
  } else {
      console.error("Sidebar container not found!");
  }
});
