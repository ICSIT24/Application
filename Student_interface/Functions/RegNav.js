// Navbar.js
class Navbar {
    constructor() {
        // Initialize properties if needed (e.g., settings, logo, etc.)
        this.navbarContainer = document.getElementById('navbar');
    }

    // Method to create the entire navbar
    createNavbar() {
        document.addEventListener('DOMContentLoaded', () => {
            // Create the navbar element
            const navbar = this.createNavbarElement();

            // Create the container div (Bootstrap's default fixed-width container)
            const container = this.createContainer();

            // Create the logo and school name
            const logoLink = this.createLogo();

            // Create the navbar-toggler button for mobile view (hamburger icon)
            const navbarToggler = this.createNavbarToggler();

            // Create the "Pages" dropdown
            const pagesDropdown = this.createPagesDropdown();

            // Create the collapse navbar-collapse div
            const collapseDiv = this.createCollapseDiv();

            // Append the logo, "Pages" dropdown, navbar toggler, and collapse div to the container
            container.appendChild(logoLink);
            container.appendChild(pagesDropdown);  // Add "Pages" dropdown here
            container.appendChild(navbarToggler);
            container.appendChild(collapseDiv);

            // Append the container to the navbar
            navbar.appendChild(container);

            // Finally, append the navbar to the navbar container in the DOM
            this.navbarContainer.appendChild(navbar);
        });
    }

    // Method to create the navbar element
    createNavbarElement() {
        const navbar = document.createElement('nav');
        navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark');
        navbar.style.backgroundColor = '#003366';  // Dark blue background
        navbar.style.paddingTop = '0.1rem';  // Reduced padding
        navbar.style.paddingBottom = '0.1rem';  // Reduced padding
        navbar.style.fontSize = '0.7rem';  // Reduced font size
        return navbar;
    }

    // Method to create the container div inside navbar
    createContainer() {
        const container = document.createElement('div');
        container.classList.add('container');
        return container;
    }

    // Method to create the logo with school name
    createLogo() {
        const logoLink = document.createElement('a');
        logoLink.classList.add('navbar-brand');
        logoLink.href = '#';

        const logoImg = document.createElement('img');
        logoImg.src = './images/nbsc-logo.png';  // Adjust to your logo source
        logoImg.alt = 'Logo';
        logoImg.width = 20;  // Smaller logo size
        logoImg.height = 20;  // Smaller logo size
        logoImg.classList.add('d-inline-block', 'align-text-top');

        const schoolName = document.createElement('h5');
        schoolName.textContent = 'Evaluation';  // Changed from 'NBSC SEE'
        schoolName.style.fontSize = '0.7rem';  // Reduced font size

        logoLink.appendChild(logoImg);
        logoLink.appendChild(schoolName);
        return logoLink;
    }

    // Method to create the "Pages" dropdown
    createPagesDropdown() {
        const pagesDropdownLi = document.createElement('li');
        pagesDropdownLi.classList.add('nav-item', 'dropdown', 'ms-3');  // Add margin-left (ms-3)

        const pagesDropdownLink = document.createElement('a');
        pagesDropdownLink.classList.add('nav-link', 'dropdown-toggle', 'text-white'); // Apply the Bootstrap text-white class
        pagesDropdownLink.href = '#';
        pagesDropdownLink.setAttribute('role', 'button');
        pagesDropdownLink.setAttribute('data-bs-toggle', 'dropdown');
        pagesDropdownLink.setAttribute('aria-expanded', 'false');
        pagesDropdownLink.textContent = 'Pages';  // Text for the dropdown

        const pagesDropdownMenu = this.createPagesDropdownMenu();

        pagesDropdownLi.appendChild(pagesDropdownLink);
        pagesDropdownLi.appendChild(pagesDropdownMenu);

        return pagesDropdownLi;
    }

    // Method to create the "Pages" dropdown menu
    createPagesDropdownMenu() {
        const dropdownMenu = document.createElement('ul');
        dropdownMenu.classList.add('dropdown-menu');

        const page1Item = document.createElement('li');
        const page1Link = document.createElement('a');
        page1Link.classList.add('dropdown-item');
        page1Link.href = 'page1.php';  // Link to page 1
        page1Link.textContent = 'Page 1';
        page1Item.appendChild(page1Link);

        const page2Item = document.createElement('li');
        const page2Link = document.createElement('a');
        page2Link.classList.add('dropdown-item');
        page2Link.href = 'page2.php';  // Link to page 2
        page2Link.textContent = 'Page 2';
        page2Item.appendChild(page2Link);

        dropdownMenu.appendChild(page1Item);
        dropdownMenu.appendChild(page2Item);

        return dropdownMenu;
    }

    // Method to create the navbar-toggler button for mobile view
    createNavbarToggler() {
        const navbarToggler = document.createElement('button');
        navbarToggler.classList.add('navbar-toggler');
        navbarToggler.type = 'button';
        navbarToggler.setAttribute('data-bs-toggle', 'collapse');
        navbarToggler.setAttribute('data-bs-target', '#navbarSupportedContent');
        navbarToggler.setAttribute('aria-controls', 'navbarSupportedContent');
        navbarToggler.setAttribute('aria-expanded', 'false');
        navbarToggler.setAttribute('aria-label', 'Toggle navigation');

        const togglerIcon = document.createElement('span');
        togglerIcon.classList.add('navbar-toggler-icon');
        navbarToggler.appendChild(togglerIcon);

        return navbarToggler;
    }

    // Method to create the collapse div
    createCollapseDiv() {
        const collapseDiv = document.createElement('div');
        collapseDiv.classList.add('collapse', 'navbar-collapse');
        collapseDiv.id = 'navbarSupportedContent';

        // Add the user profile dropdown to the collapse div
        const userDropdownLi = this.createUserDropdown();
        collapseDiv.appendChild(userDropdownLi);

        return collapseDiv;
    }

    // Method to create the user profile dropdown
    createUserDropdown() {
        const userDropdownLi = document.createElement('li');
        userDropdownLi.classList.add('nav-item', 'dropdown');
        userDropdownLi.style.marginLeft = 'auto';  // Push to the right side

        const dropdownLink = document.createElement('a');
        dropdownLink.classList.add('nav-link', 'dropdown-toggle');
        dropdownLink.href = '#';
        dropdownLink.setAttribute('role', 'button');
        dropdownLink.setAttribute('data-bs-toggle', 'dropdown');
        dropdownLink.setAttribute('aria-expanded', 'false');

        const userIcon = this.createUserIcon();
        dropdownLink.appendChild(userIcon);

        const dropdownMenu = this.createDropdownMenu();

        userDropdownLi.appendChild(dropdownLink);
        userDropdownLi.appendChild(dropdownMenu);

        return userDropdownLi;
    }

    // Method to create the user icon (SVG)
    createUserIcon() {
        const userIcon = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        userIcon.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        userIcon.setAttribute('width', '20');
        userIcon.setAttribute('height', '20');
        userIcon.setAttribute('fill', 'currentColor');
        userIcon.classList.add('bi', 'bi-person-circle');
        userIcon.setAttribute('viewBox', '0 0 16 16');

        const path1 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path1.setAttribute('d', 'M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0');

        const path2 = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path2.setAttribute('fill-rule', 'evenodd');
        path2.setAttribute('d', 'M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1');

        userIcon.appendChild(path1);
        userIcon.appendChild(path2);

        return userIcon;
    }

    // Method to create the dropdown menu for the user profile
    createDropdownMenu() {
        const dropdownMenu = document.createElement('ul');
        dropdownMenu.classList.add('dropdown-menu');

        const profileItem = document.createElement('li');
        const profileLink = document.createElement('a');
        profileLink.classList.add('dropdown-item');
        profileLink.href = '#';
        profileLink.textContent = 'Profile';
        profileItem.appendChild(profileLink);

        const logoutItem = document.createElement('li');
        const logoutLink = document.createElement('a');
        logoutLink.classList.add('dropdown-item');
        logoutLink.href = './index.html';  // Link to logout page
        logoutLink.textContent = 'Log Out';
        logoutItem.appendChild(logoutLink);

        dropdownMenu.appendChild(profileItem);
        dropdownMenu.appendChild(logoutItem);

        return dropdownMenu;
    }
}

// Create an instance of the Navbar class and call createNavbar
const navbar = new Navbar();
navbar.createNavbar();
