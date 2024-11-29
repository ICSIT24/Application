class StudentTable {
    constructor(tableBodyId, searchInputId) {
        this.tableBody = document.querySelector(tableBodyId);
        this.searchInput = document.querySelector(searchInputId);
        this.setupSearchListener();
    }

    // Method to handle search input
    setupSearchListener() {
        this.searchInput.addEventListener('input', () => this.filterAndSortTable());
    }

    // Method to filter and sort the table
    filterAndSortTable() {
        const searchTerm = this.searchInput.value.trim();
        this.filterRows(searchTerm); // First, filter rows based on the search term
        this.sortRows(); // Then, sort the rows based on Student ID
    }

    // Method to filter rows based on the search term (Student ID)
    filterRows(searchTerm) {
        const rows = this.tableBody.querySelectorAll('tr');
        rows.forEach(row => {
            const studentId = row.querySelector('td').textContent.trim();
            row.style.display = studentId.includes(searchTerm) ? '' : 'none'; // Show or hide rows
        });
    }

    // Method to sort rows by Student ID (directly from the DOM)
    sortRows() {
        const rows = Array.from(this.tableBody.querySelectorAll('tr')); // Get all rows
        rows.sort((a, b) => {
            const studentIdA = a.querySelector('td').textContent.trim();
            const studentIdB = b.querySelector('td').textContent.trim();
            return studentIdA.localeCompare(studentIdB); // String comparison for sorting
        });

        // Rebuild the table by appending sorted rows
        rows.forEach(row => {
            this.tableBody.appendChild(row); // Re-append each row in sorted order
        });
    }
}

// Initialize the StudentTable class and pass the IDs of the elements
const studentTable = new StudentTable('#student-table-body', '#additionalInfo');
