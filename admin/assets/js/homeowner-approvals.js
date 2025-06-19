document.addEventListener("DOMContentLoaded", function() {
    // Initialize tooltips and popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    
    // Current selected row for modal operations
    let currentRow = null;
    
    // Search functionality
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    
    if (searchBtn && searchInput) {
        searchBtn.addEventListener('click', function() {
            performSearch(searchInput.value);
        });
        
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch(this.value);
            }
        });
        
        searchInput.addEventListener('input', function() {
            performSearch(this.value);
        });
    }
    
    function performSearch(searchText) {
        const searchTerm = searchText.toLowerCase();
        const rows = document.querySelectorAll('table tbody tr');
        
        rows.forEach(row => {
            const text = row.textContent.toLowerCase();
            const currentFilter = document.getElementById('status-filter').value;
            const phaseFilter = document.getElementById('phase-filter').value;
            const rowStatus = row.getAttribute('data-status');
            
            let showRow = true;
            
            // Apply search filter
            if (searchTerm && !text.includes(searchTerm)) {
                showRow = false;
            }
            
            // Apply status filter
            if (currentFilter !== 'all' && rowStatus !== currentFilter) {
                showRow = false;
            }
            
            // Apply phase filter
            if (phaseFilter !== 'all') {
                const phaseCell = row.cells[5].textContent.trim();
                if (phaseCell !== phaseFilter) {
                    showRow = false;
                }
            }
            
            row.style.display = showRow ? '' : 'none';
        });
        
        updateVisibleRowsCount();
    }
    
    // Filter functionality
    const statusFilter = document.getElementById('status-filter');
    const phaseFilter = document.getElementById('phase-filter');
    
    [statusFilter, phaseFilter].forEach(filter => {
        filter.addEventListener('change', function() {
            performSearch(searchInput.value);
        });
    });
    
    // Select all checkbox functionality
    const selectAllCheckbox = document.getElementById('select-all');
    const rowCheckboxes = document.querySelectorAll('.row-checkbox');
    
    selectAllCheckbox.addEventListener('change', function() {
        const visibleCheckboxes = Array.from(rowCheckboxes).filter(cb => 
            cb.closest('tr').style.display !== 'none'
        );
        
        visibleCheckboxes.forEach(checkbox => {
            checkbox.checked = this.checked;
        });
        
        updateBulkActionButtons();
    });
    
    rowCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('change', function() {
            updateSelectAllState();
            updateBulkActionButtons();
        });
    });
    
    function updateSelectAllState() {
        const visibleCheckboxes = Array.from(rowCheckboxes).filter(cb => 
            cb.closest('tr').style.display !== 'none'
        );
        const checkedVisible = visibleCheckboxes.filter(cb => cb.checked);
        
        selectAllCheckbox.indeterminate = checkedVisible.length > 0 && checkedVisible.length < visibleCheckboxes.length;
        selectAllCheckbox.checked = visibleCheckboxes.length > 0 && checkedVisible.length === visibleCheckboxes.length;
    }
    
    function updateBulkActionButtons() {
        const checkedBoxes = document.querySelectorAll('.row-checkbox:checked');
        const approveAllBtn = document.getElementById('approve-all-btn');
        
        if (checkedBoxes.length > 0) {
            approveAllBtn.textContent = `Approve Selected (${checkedBoxes.length})`;
            approveAllBtn.disabled = false;
        } else {
            approveAllBtn.textContent = 'Approve All';
            approveAllBtn.disabled = false;
        }
    }
    
    // Bulk approve functionality
    const approveAllBtn = document.getElementById('approve-all-btn');
    approveAllBtn.addEventListener('click', function() {
        const checkedBoxes = document.querySelectorAll('.row-checkbox:checked');
        
        if (checkedBoxes.length > 0) {
            // Approve selected
            if (confirm(`Are you sure you want to approve ${checkedBoxes.length} selected applications?`)) {
                checkedBoxes.forEach(checkbox => {
                    const row = checkbox.closest('tr');
                    approveApplication(row);
                });
                alert(`${checkedBoxes.length} applications approved successfully!`);
            }
        } else {
            // Approve all pending
            const pendingRows = document.querySelectorAll('tr[data-status="pending"]');
            const visiblePending = Array.from(pendingRows).filter(row => row.style.display !== 'none');
            
            if (visiblePending.length > 0) {
                if (confirm(`Are you sure you want to approve all ${visiblePending.length} pending applications?`)) {
                    visiblePending.forEach(row => {
                        approveApplication(row);
                    });
                    alert(`${visiblePending.length} applications approved successfully!`);
                }
            } else {
                alert('No pending applications to approve.');
            }
        }
    });
    
    // Export functionality
    const exportBtn = document.getElementById('export-approvals');
    exportBtn.addEventListener('click', function() {
        const visibleRows = Array.from(document.querySelectorAll('table tbody tr')).filter(row => 
            row.style.display !== 'none'
        );
        
        const exportData = [];
        exportData.push(['Name', 'Email', 'Contact', 'Block/Lot', 'Phase', 'Registration Date', 'Documents', 'Status']);
        
        visibleRows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const rowData = [];
            for (let i = 1; i < cells.length - 1; i++) { // Skip checkbox and actions columns
                rowData.push(cells[i].textContent.trim());
            }
            exportData.push(rowData);
        });
        
        console.log('Exporting approval data:', exportData);
        alert(`Exporting ${visibleRows.length} records... (This would download an Excel file in a real application)`);
    });
    
    // Action button handlers
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button');
        if (!target) return;
        
        const action = target.getAttribute('data-action');
        const row = target.closest('tr');
        
        if (action === 'view') {
            currentRow = row;
            populateModal(row);
        } else if (action === 'approve') {
            if (confirm('Are you sure you want to approve this application?')) {
                approveApplication(row);
            }
        } else if (action === 'reject') {
            currentRow = row;
            showRejectionModal();
        }
    });
    
    function populateModal(row) {
        const cells = row.querySelectorAll('td');
        
        document.getElementById('modal-name').textContent = cells[1].textContent;
        document.getElementById('modal-email').textContent = cells[2].textContent;
        document.getElementById('modal-phone').textContent = cells[3].textContent;
        document.getElementById('modal-block-lot').textContent = cells[4].textContent;
        document.getElementById('modal-phase').textContent = cells[5].textContent;
        document.getElementById('modal-reg-date').textContent = cells[6].textContent;
        
        // Set additional property info (simulated)
        document.getElementById('modal-property-type').textContent = 'Single Detached';
        document.getElementById('modal-purchase-date').textContent = 'Nov 15, 2024';
        
        // Update modal buttons based on status
        const status = row.getAttribute('data-status');
        const approveBtn = document.getElementById('modal-approve-btn');
        const rejectBtn = document.getElementById('modal-reject-btn');
        
        if (status === 'approved' || status === 'rejected') {
            approveBtn.style.display = 'none';
            rejectBtn.style.display = 'none';
        } else {
            approveBtn.style.display = 'inline-block';
            rejectBtn.style.display = 'inline-block';
            
            // Disable approve button if documents are incomplete
            const documentsStatus = cells[7].textContent.trim();
            approveBtn.disabled = documentsStatus.includes('Incomplete');
        }
    }
    
    function approveApplication(row) {
        const cells = row.querySelectorAll('td');
        const name = cells[1].textContent;
        
        // Update row status
        row.setAttribute('data-status', 'approved');
        cells[8].innerHTML = '<span class="badge bg-success">Approved</span>';
        
        // Disable action buttons
        const actionButtons = row.querySelectorAll('.btn-group button');
        actionButtons[1].disabled = true; // Approve button
        actionButtons[1].classList.remove('btn-success');
        actionButtons[1].classList.add('btn-secondary');
        actionButtons[2].disabled = true; // Reject button
        actionButtons[2].classList.remove('btn-danger');
        actionButtons[2].classList.add('btn-secondary');
        
        // Update statistics
        updateStatistics();
        
        console.log(`Approved application for ${name}`);
        
        // In a real application, this would make an API call
        // and send approval email to the homeowner
    }
    
    function rejectApplication(row, reason, details) {
        const cells = row.querySelectorAll('td');
        const name = cells[1].textContent;
        
        // Update row status
        row.setAttribute('data-status', 'rejected');
        cells[8].innerHTML = '<span class="badge bg-danger">Rejected</span>';
        
        // Disable action buttons
        const actionButtons = row.querySelectorAll('.btn-group button');
        actionButtons[1].disabled = true; // Approve button
        actionButtons[1].classList.remove('btn-success');
        actionButtons[1].classList.add('btn-secondary');
        actionButtons[2].disabled = true; // Reject button
        actionButtons[2].classList.remove('btn-danger');
        actionButtons[2].classList.add('btn-secondary');
        
        // Update statistics
        updateStatistics();
        
        console.log(`Rejected application for ${name}. Reason: ${reason}. Details: ${details}`);
        
        // In a real application, this would make an API call
        // and send rejection email to the homeowner
    }
    
    // Modal action handlers
    document.getElementById('modal-approve-btn').addEventListener('click', function() {
        if (currentRow) {
            const notes = document.getElementById('admin-notes').value;
            approveApplication(currentRow);
            
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('approvalModal'));
            modal.hide();
            
            alert('Application approved successfully!');
        }
    });
    
    document.getElementById('modal-reject-btn').addEventListener('click', function() {
        showRejectionModal();
    });
    
    function showRejectionModal() {
        // Close approval modal
        const approvalModal = bootstrap.Modal.getInstance(document.getElementById('approvalModal'));
        if (approvalModal) {
            approvalModal.hide();
        }
        
        // Show rejection modal
        const rejectionModal = new bootstrap.Modal(document.getElementById('rejectionModal'));
        rejectionModal.show();
    }
    
    document.getElementById('confirm-reject-btn').addEventListener('click', function() {
        const reason = document.getElementById('rejection-reason').value;
        const details = document.getElementById('rejection-details').value;
        const notifyApplicant = document.getElementById('notify-applicant').checked;
        
        if (!reason) {
            alert('Please select a reason for rejection.');
            return;
        }
        
        if (currentRow) {
            rejectApplication(currentRow, reason, details);
            
            // Close modal
            const modal = bootstrap.Modal.getInstance(document.getElementById('rejectionModal'));
            modal.hide();
            
            // Reset form
            document.getElementById('rejection-reason').value = '';
            document.getElementById('rejection-details').value = '';
            document.getElementById('notify-applicant').checked = true;
            
            const message = notifyApplicant ? 
                'Application rejected and notification sent to applicant.' :
                'Application rejected successfully.';
            alert(message);
        }
    });
    
    // Document view handlers
    document.addEventListener('click', function(e) {
        if (e.target.closest('.btn-outline-primary') && e.target.closest('#documents-list')) {
            const documentItem = e.target.closest('.list-group-item');
            const documentName = documentItem.querySelector('strong').textContent;
            alert(`Viewing document: ${documentName}\n(This would open the document in a new window in a real application)`);
        }
    });
    
    function updateStatistics() {
        const allRows = document.querySelectorAll('table tbody tr');
        const pendingCount = Array.from(allRows).filter(row => row.getAttribute('data-status') === 'pending').length;
        const approvedTodayCount = 2; // This would be calculated based on today's approvals
        const monthTotalCount = 12; // This would be calculated based on current month
        const rejectedCount = Array.from(allRows).filter(row => row.getAttribute('data-status') === 'rejected').length;
        
        document.getElementById('pending-stat').textContent = pendingCount;
        document.getElementById('pending-count').textContent = pendingCount;
        document.getElementById('approved-today-stat').textContent = approvedTodayCount;
        document.getElementById('month-total-stat').textContent = monthTotalCount;
        document.getElementById('rejected-stat').textContent = rejectedCount;
    }
    
    function updateVisibleRowsCount() {
        const visibleRows = Array.from(document.querySelectorAll('table tbody tr')).filter(row => 
            row.style.display !== 'none'
        );
        console.log(`Showing ${visibleRows.length} records`);
    }
    
    // Initialize statistics
    updateStatistics();
    
    // Auto-refresh pending count every 30 seconds (simulation)
    setInterval(function() {
        // In a real application, this would fetch updated data from the server
        console.log('Checking for new applications...');
    }, 30000);
    
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