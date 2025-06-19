document.addEventListener("DOMContentLoaded", function() {
    // Initialize tooltips and popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    
    // Add Homeowner button
    const addHomeownerBtn = document.querySelector('.btn-primary');
    if (addHomeownerBtn && addHomeownerBtn.textContent.includes('Add Homeowner')) {
        addHomeownerBtn.addEventListener('click', function() {
            // Simulate add homeowner form
            const homeownerData = {
                name: prompt("Enter homeowner name:"),
                email: prompt("Enter email address:"),
                phone: prompt("Enter contact number:"),
                blockLot: prompt("Enter block/lot (e.g., Block 1, Lot 5):"),
                phase: prompt("Enter phase (e.g., Phase 1):")
            };
            
            if (homeownerData.name && homeownerData.email) {
                alert(`Adding new homeowner: ${homeownerData.name} (This would save to database in a real application)`);
                console.log('New homeowner data:', homeownerData);
                
                // In a real app, this would make an API call to save the data
                // and then refresh the table or add the new row dynamically
            } else {
                alert("Name and email are required fields.");
            }
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
        console.log(`Found ${visibleRows.length} matching homeowners`);
    }
    
    // View button handlers
    document.querySelectorAll('table .btn-primary').forEach(btn => {
        if (btn.textContent.trim() === 'View') {
            btn.addEventListener('click', function() {
                const row = this.closest('tr');
                const name = row.cells[0].textContent;
                const email = row.cells[1].textContent;
                const phone = row.cells[2].textContent;
                const blockLot = row.cells[3].textContent;
                const phase = row.cells[4].textContent;
                const regDate = row.cells[5].textContent;
                
                // Update modal content with selected homeowner data
                const modal = document.getElementById('homeownerModal');
                const modalTitle = modal.querySelector('.modal-title');
                modalTitle.textContent = `Homeowner Details - ${name}`;
                
                // Update personal information in modal
                const personalInfo = modal.querySelector('.col-md-6:first-child');
                personalInfo.innerHTML = `
                    <h6>Personal Information</h6>
                    <p><strong>Full Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <p><strong>Contact Number:</strong> ${phone}</p>
                    <p><strong>Registration Date:</strong> ${regDate}</p>
                `;
                
                // Update property information in modal
                const propertyInfo = modal.querySelector('.col-md-6:last-child');
                propertyInfo.innerHTML = `
                    <h6>Property Information</h6>
                    <p><strong>Block/Lot:</strong> ${blockLot}</p>
                    <p><strong>Phase:</strong> ${phase}</p>
                    <p><strong>House Type:</strong> Single Detached</p>
                    <p><strong>Property Status:</strong> Active</p>
                `;
                
                console.log(`Viewing details for ${name} (${blockLot})`);
            });
        }
    });
    
    // Edit button handlers
    document.querySelectorAll('table .btn-warning').forEach(btn => {
        if (btn.textContent.trim() === 'Edit') {
            btn.addEventListener('click', function() {
                const row = this.closest('tr');
                const name = row.cells[0].textContent;
                const email = row.cells[1].textContent;
                const phone = row.cells[2].textContent;
                const blockLot = row.cells[3].textContent;
                const phase = row.cells[4].textContent;
                
                // Simulate edit form
                const updatedData = {
                    name: prompt("Edit name:", name) || name,
                    email: prompt("Edit email:", email) || email,
                    phone: prompt("Edit phone:", phone) || phone,
                    blockLot: prompt("Edit block/lot:", blockLot) || blockLot,
                    phase: prompt("Edit phase:", phase) || phase
                };
                
                if (confirm(`Save changes for ${updatedData.name}?`)) {
                    // Update the table row with new data
                    row.cells[0].textContent = updatedData.name;
                    row.cells[1].textContent = updatedData.email;
                    row.cells[2].textContent = updatedData.phone;
                    row.cells[3].textContent = updatedData.blockLot;
                    row.cells[4].textContent = updatedData.phase;
                    
                    alert(`Changes saved for ${updatedData.name}`);
                    console.log('Updated homeowner data:', updatedData);
                }
            });
        }
    });
    
    // Modal action buttons
    document.querySelectorAll('.modal .btn-warning').forEach(btn => {
        if (btn.textContent.trim() === 'Edit Information') {
            btn.addEventListener('click', function() {
                const modalTitle = this.closest('.modal').querySelector('.modal-title').textContent;
                const homeowner = modalTitle.split(' - ')[1] || 'Unknown';
                
                alert(`Opening edit form for ${homeowner}... (This would open a detailed edit form in a real application)`);
                
                // Close modal
                const modal = bootstrap.Modal.getInstance(this.closest('.modal'));
                if (modal) {
                    modal.hide();
                }
            });
        }
    });
    
    // Payment summary card buttons in modal
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('btn-primary') && e.target.textContent.trim() === 'View Details') {
            const cardHeader = e.target.closest('.card').querySelector('.card-header').textContent;
            const modalTitle = document.querySelector('#homeownerModal .modal-title').textContent;
            const homeowner = modalTitle.split(' - ')[1] || 'Unknown';
            
            if (cardHeader.includes('Amortization')) {
                alert(`Redirecting to amortization details for ${homeowner}...`);
                // In a real app: window.location.href = `amortization.html?homeowner=${encodeURIComponent(homeowner)}`;
            } else if (cardHeader.includes('HOA')) {
                alert(`Redirecting to HOA dues for ${homeowner}...`);
                // In a real app: window.location.href = `hoa-dues.html?homeowner=${encodeURIComponent(homeowner)}`;
            } else if (cardHeader.includes('Garbage')) {
                alert(`Redirecting to garbage collection for ${homeowner}...`);
                // In a real app: window.location.href = `garbage-collection.html?homeowner=${encodeURIComponent(homeowner)}`;
            }
        }
    });
    
    // Table sorting functionality
    document.querySelectorAll('th').forEach(header => {
        header.style.cursor = 'pointer';
        header.addEventListener('click', function() {
            const table = this.closest('table');
            const tbody = table.querySelector('tbody');
            const rows = Array.from(tbody.querySelectorAll('tr'));
            const columnIndex = Array.from(this.parentNode.children).indexOf(this);
            
            // Skip sorting for Actions column
            if (this.textContent.trim() === 'Actions') return;
            
            const isAscending = this.classList.contains('sort-asc');
            
            // Remove sort classes from all headers
            table.querySelectorAll('th').forEach(th => {
                th.classList.remove('sort-asc', 'sort-desc');
            });
            
            // Add appropriate sort class
            this.classList.add(isAscending ? 'sort-desc' : 'sort-asc');
            
            // Sort rows
            rows.sort((a, b) => {
                const aText = a.cells[columnIndex].textContent.trim();
                const bText = b.cells[columnIndex].textContent.trim();
                
                if (isAscending) {
                    return bText.localeCompare(aText);
                } else {
                    return aText.localeCompare(bText);
                }
            });
            
            // Reorder rows in DOM
            rows.forEach(row => tbody.appendChild(row));
        });
    });
    
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