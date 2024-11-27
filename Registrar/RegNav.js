document.addEventListener('DOMContentLoaded', function () {
    // Create the navbar element
    const navbar = document.createElement('nav');
    navbar.classList.add('navbar', 'navbar-expand-lg', 'bg-body-tertiary');

    // Create the container-fluid div
    const container = document.createElement('div');
    container.classList.add('container-fluid');
    
    // Create the school logo link
    const logoLink = document.createElement('a');
    logoLink.classList.add('school-logo');
    logoLink.href = '#';

    // Create the logo image
    const logoImg = document.createElement('img');
    logoImg.src = './images/nbsc-logo.png';
    logoImg.alt = 'Logo';
    logoImg.width = 30;
    logoImg.height = 30;
    logoImg.classList.add('d-inline-block', 'align-text-top');

    // Create the school name heading
    const schoolName = document.createElement('h5');
    schoolName.textContent = 'NBSC SEE';

    // Append the image and heading to the logo link
    logoLink.appendChild(logoImg);
    logoLink.appendChild(schoolName);

    // Create the navbar-toggler button
    const navbarToggler = document.createElement('button');
    navbarToggler.classList.add('navbar-toggler');
    navbarToggler.type = 'button';
    navbarToggler.setAttribute('data-bs-toggle', 'collapse');
    navbarToggler.setAttribute('data-bs-target', '#navbarNavDropdown');
    navbarToggler.setAttribute('aria-controls', 'navbarNavDropdown');
    navbarToggler.setAttribute('aria-expanded', 'false');
    navbarToggler.setAttribute('aria-label', 'Toggle navigation');

    // Create the navbar-toggler-icon span
    const togglerIcon = document.createElement('span');
    togglerIcon.classList.add('navbar-toggler-icon');
    navbarToggler.appendChild(togglerIcon);

    // Create the collapse navbar-collapse div
    const collapseDiv = document.createElement('div');
    collapseDiv.classList.add('collapse', 'navbar-collapse');
    collapseDiv.id = 'navbarNavDropdown';

    // Create the dropdown item (li) with class 'nav-item'
    const dropdownLi = document.createElement('li');
    dropdownLi.classList.add('nav-item', 'dropdown');
    dropdownLi.style.marginLeft = '1rem';

    // Create the dropdown-toggle link
    const dropdownLink = document.createElement('a');
    dropdownLink.classList.add('nav-link', 'dropdown-toggle');
    dropdownLink.href = '#';
    dropdownLink.role = 'button';
    dropdownLink.setAttribute('data-bs-toggle', 'dropdown');
    dropdownLink.setAttribute('aria-expanded', 'false');

    // Create the SVG icon for the user profile
    const svgIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
    svgIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    svgIcon.setAttribute('width', '30');
    svgIcon.setAttribute('height', '30');
    svgIcon.setAttribute('fill', 'currentColor');
    svgIcon.classList.add('bi', 'bi-person-circle', 'text-light');
    svgIcon.setAttribute('viewBox', '0 0 16 16');

    const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path1.setAttribute('d', 'M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0');
    
    const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path2.setAttribute('fill-rule', 'evenodd');
    path2.setAttribute('d', 'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1');

    svgIcon.appendChild(path1);
    svgIcon.appendChild(path2);

    // Append the SVG icon to the dropdown link
    dropdownLink.appendChild(svgIcon);

    // Create the dropdown menu
    const dropdownMenu = document.createElement('ul');
    dropdownMenu.classList.add('dropdown-menu', 'text-left');
    dropdownMenu.style.width = '200px';
    dropdownMenu.style.padding = '1rem';
    dropdownMenu.style.position = 'absolute';
    dropdownMenu.style.left = '-10rem';

    // Create dropdown items
    const strong = document.createElement('li');
    strong.textContent = 'Registrar';
    const hr = document.createElement('hr');
    hr.classList.add('dropdown-divider');
    const logoutItem = document.createElement('li');
    const logoutLink = document.createElement('a');
    logoutLink.classList.add('dropdown-item');
    logoutLink.href = './index.html';
    logoutLink.textContent = 'Log Out';
    logoutItem.appendChild(logoutLink);

    // Append the elements to the dropdown menu
    dropdownMenu.appendChild(strong);
    dropdownMenu.appendChild(hr);
    dropdownMenu.appendChild(logoutItem);

    // Append the dropdown menu to the dropdown list item
    dropdownLi.appendChild(dropdownLink);
    dropdownLi.appendChild(dropdownMenu);

    // Append the dropdown list item to the collapse div
    collapseDiv.appendChild(dropdownLi);

    // Append the components to the container
    container.appendChild(logoLink);
    container.appendChild(navbarToggler);
    container.appendChild(collapseDiv);

    // Append the container to the navbar
    navbar.appendChild(container);

    // Select the div by ID and append the navbar inside it
    const navbarContainer = document.getElementById('navbar-container');
    navbarContainer.appendChild(navbar);
});