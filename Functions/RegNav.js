class Navbar {
    constructor() {
        this.navbarContainer = document.getElementById('navbar');
    }

    createNavbar() {
        document.addEventListener('DOMContentLoaded', () => {
            const navbar = this.createNavbarElement();
            const container = this.createContainer();

            const logoLink = this.createLogo();
            const navbarToggler = this.createNavbarToggler();
            const collapseDiv = this.createCollapseDiv();

            container.appendChild(logoLink);
            container.appendChild(navbarToggler);
            container.appendChild(collapseDiv);

            navbar.appendChild(container);
            this.navbarContainer.appendChild(navbar);
        });
    }

    createNavbarElement() {
        const navbar = document.createElement('nav');
        navbar.classList.add('navbar', 'navbar-expand-lg', 'navbar-dark');
        navbar.style.backgroundColor = '#003366';
        navbar.style.paddingTop = '0.1rem';
        navbar.style.paddingBottom = '0.1rem';
        navbar.style.fontSize = '0.7rem';
        return navbar;
    }

    createContainer() {
        const container = document.createElement('div');
        container.classList.add('container');
        return container;
    }

    createLogo() {
        const logoLink = document.createElement('a');
        logoLink.classList.add('navbar-brand');
        logoLink.href = '#';

        const logoImg = document.createElement('img');
        logoImg.src = '../images/nbsc-logo.png';
        logoImg.alt = 'Logo';
        logoImg.width = 20;
        logoImg.height = 20;
        logoImg.classList.add('d-inline-block', 'align-text-top');

        const schoolName = document.createElement('h5');
        schoolName.textContent = 'Evaluation';
        schoolName.style.fontSize = '0.7rem';

        logoLink.appendChild(logoImg);
        logoLink.appendChild(schoolName);
        return logoLink;
    }

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

    createCollapseDiv() {
        const collapseDiv = document.createElement('div');
        collapseDiv.classList.add('collapse', 'navbar-collapse');
        collapseDiv.id = 'navbarSupportedContent';

        const userDropdownLi = this.createUserDropdown();
        collapseDiv.appendChild(userDropdownLi);

        return collapseDiv;
    }

    createUserDropdown() {
        const userDropdownLi = document.createElement('li');
        userDropdownLi.classList.add('nav-item', 'dropdown');
        userDropdownLi.style.marginLeft = 'auto';

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

    createDropdownMenu() {
        const dropdownMenu = document.createElement('ul');
        dropdownMenu.classList.add('dropdown-menu');

        const menuItems = [
            { name: 'User', link: '/Student_interface/Home.html' },
            { name: 'Registrar', link: '/Registrar/page1.html' },
            { name: 'SAS', link: 'sas.html' },
            { name: 'ASO', link: 'aso.html' },
            { name: 'Medical', link: 'medical.html' },
            { name: 'Evaluator', link: 'evaluator.html' },
            { name: 'Billing', link: 'billing.html' },
            { name: 'About us', link: 'billing.html' }
        ];

        menuItems.forEach((item) => {
            const menuItem = document.createElement('li');
            const menuLink = document.createElement('a');
            menuLink.classList.add('dropdown-item');
            menuLink.href = item.link;  // Use the specific link
            menuLink.textContent = item.name;
            menuItem.appendChild(menuLink);
            dropdownMenu.appendChild(menuItem);
        });

        return dropdownMenu;
    }
}

const navbar = new Navbar();
navbar.createNavbar();
