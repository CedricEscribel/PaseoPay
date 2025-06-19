document.addEventListener("DOMContentLoaded", function() {
    // Initialize tooltips and popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    
    // Import/Export Button Handlers
    const importButton = document.getElementById("import-garbage");
    const exportButton = document.getElementById("export-garbage");
    
    if (importButton) {
        importButton.addEventListener("click", function() {
            const importModal = new bootstrap.Modal(document.getElementById("importModal"));
            importModal.show();
        });
    }
    
    if (exportButton) {
        exportButton.addEventListener("click", function() {
            // Simulate export functionality
            const tableData = [];
            const rows = document.querySelectorAll('table tbody tr');
            
            // Add headers
            tableData.push(['Name', 'Block/Lot', 'Monthly Fee', 'Last Payment', 'Next Payment', 'Status']);
            
            // Add data rows
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                const rowData = [];
                for (let i = 0; i < cells.length - 1; i++) { // Exclude actions column
                    rowData.push(cells[i].textContent.trim());
                }
                tableData.push(rowData);
            });
            
            console.log('Exporting garbage collection data:', tableData);
            alert("Exporting garbage collection data... (This would download an Excel file in a real application)");
        });
    }
    
    // Search functionality
    const searchInput = document.querySelector('.input-group input[type="text"]');
    const searchButton = document.querySelector('.input-group .btn-outline-secondary');
    
    if (searchButton && searchInput) {
        searchButton.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
    }
    
    function performSearch(searchText) {
        const searchTerm = searchText.toLowerCase();
        const rows = document.querySelectorAll('table tbody tr');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            if (searchTerm === '' || text.includes(searchTerm)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
        
        // Show results count
        const visibleRows = document.querySelectorAll('table tbody tr[style=""], table tbody tr:not([style])');
        console.log(`Found ${visibleRows.length} matching records`);
    }
    
    // Record Payment Button in Modal
    document.querySelectorAll('.modal .btn-success').forEach(btn => {
        if (btn.textContent.trim() === 'Record Payment') {
            btn.addEventListener('click', function() {
                const modalTitle = this.closest('.modal').querySelector('.modal-title').textContent;
                const homeowner = modalTitle.split(' - ')[1] || 'Unknown';
                
                // Simulate payment recording
                alert(`Recording garbage collection payment for ${homeowner}... (This would open a payment form in a real application)`);
                
                // Close modal after recording
                const modal = bootstrap.Modal.getInstance(this.closest('.modal'));
                if (modal) {
                    modal.hide();
                }
            });
        }
    });
    
    // View button handlers
    document.querySelectorAll('table .btn-primary').forEach(btn => {
        if (btn.textContent.trim() === 'View') {
            btn.addEventListener('click', function() {
                const row = this.closest('tr');
                const name = row.cells[0].textContent;
                const blockLot = row.cells[1].textContent;
                const monthlyFee = row.cells[2].textContent;
                const lastPayment = row.cells[3].textContent;
                const nextPayment = row.cells[4].textContent;
                const status = row.cells[5].textContent;
                
                // Update modal content with selected homeowner data
                const modal = document.getElementById('garbageModal');
                const modalTitle = modal.querySelector('.modal-title');
                modalTitle.textContent = `Garbage Collection - ${name}`;
                
                console.log(`Viewing garbage collection for ${name} (${blockLot})`);
            });
        }
    });
    
    // Import modal functionality
    const importModalBtn = document.querySelector('#importModal .btn-primary');
    if (importModalBtn) {
        importModalBtn.addEventListener('click', function() {
            const fileInput = document.getElementById('formFile');
            if (fileInput.files.length > 0) {
                const fileName = fileInput.files[0].name;
                alert(`Importing garbage collection data from ${fileName}... (This would process the Excel file in a real application)`);
                
                // Close modal
                const modal = bootstrap.Modal.getInstance(document.getElementById('importModal'));
                if (modal) {
                    modal.hide();
                }
            } else {
                alert('Please select a file to import.');
            }
        });
    }
    
    // Status badge click handlers for quick actions
    document.querySelectorAll('.badge').forEach(badge => {
        badge.addEventListener('click', function(e) {
            e.stopPropagation();
            const status = this.textContent.trim();
            const row = this.closest('tr');
            const name = row.cells[0].textContent;
            
            if (status === 'Overdue') {
                if (confirm(`Send collection reminder to ${name}?`)) {
                    alert(`Collection reminder sent to ${name}`);
                }
            } else if (status === 'Paid') {
                alert(`${name} has already paid for this period`);
            }
        });
    });
    
    // Collection schedule management
    function showCollectionSchedule() {
        const scheduleInfo = `
            Garbage Collection Schedule:
            - Monday & Thursday: Blocks 1-5
            - Tuesday & Friday: Blocks 6-10
            - Wednesday & Saturday: Blocks 11-15
            
            Collection Time: 6:00 AM - 10:00 AM
        `;
        alert(scheduleInfo);
    }
    
    // Add collection schedule button if needed
    const cardHeader = document.querySelector('.card-header .d-flex');
    if (cardHeader) {
        const scheduleBtn = document.createElement('button');
        scheduleBtn.className = 'btn btn-sm btn-info me-2';
        scheduleBtn.innerHTML = '<i class="bi bi-calendar-week me-1"></i>Schedule';
        scheduleBtn.addEventListener('click', showCollectionSchedule);
        cardHeader.querySelector('div:last-child').prepend(scheduleBtn);
    }
    
    // Initialize mobile sidebar toggle
    const sidebarToggle = document.createElement('button');
    sidebarToggle.classList.add('btn', 'btn-primary', 'd-md-none', 'position-fixed');
    sidebarToggle.style.bottom = '20px';
    sidebarToggle.style.right = '20px';
    sidebarToggle.style.zIndex = '1050';
    sidebarToggle.innerHTML = '<i class="bi bi-list"></i>';
    document.body.appendChild(sidebarToggle);
    
    sidebarToggle.addEventListener('click', function() {
        const sidebar = document.getElementById('sidebar');
        sidebar.classList.toggle('d-block');
    });
    
    // Responsive behavior
    function handleResize() {
        const sidebar = document.getElementById('sidebar');
        if (window.innerWidth < 768) {
            sidebar.classList.remove('d-md-block');
            sidebar.classList.add('d-none');
        } else {
            sidebar.classList.add('d-md-block');
            sidebar.classList.remove('d-none', 'd-block');
        }
    }
    
    handleResize();
    window.addEventListener('resize', handleResize);
});