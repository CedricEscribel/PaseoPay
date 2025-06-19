document.addEventListener("DOMContentLoaded", function() {
    // Initialize tooltips and popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    
    // Current announcement being edited
    let currentAnnouncementId = null;
    let isEditMode = false;
    
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
            const statusFilter = document.getElementById('status-filter').value;
            const priorityFilter = document.getElementById('priority-filter').value;
            const rowStatus = row.getAttribute('data-status');
            const rowPriority = row.getAttribute('data-priority');
            
            let showRow = true;
            
            // Apply search filter
            if (searchTerm && !text.includes(searchTerm)) {
                showRow = false;
            }
            
            // Apply status filter
            if (statusFilter !== 'all' && rowStatus !== statusFilter) {
                showRow = false;
            }
            
            // Apply priority filter
            if (priorityFilter !== 'all' && rowPriority !== priorityFilter) {
                showRow = false;
            }
            
            row.style.display = showRow ? '' : 'none';
        });
        
        updateVisibleRowsCount();
    }
    
    // Filter functionality
    const statusFilter = document.getElementById('status-filter');
    const priorityFilter = document.getElementById('priority-filter');
    
    [statusFilter, priorityFilter].forEach(filter => {
        filter.addEventListener('change', function() {
            performSearch(searchInput.value);
        });
    });
    
    // Target audience change handler
    const targetAudience = document.getElementById('target-audience');
    const specificBlocksContainer = document.getElementById('specific-blocks-container');
    
    targetAudience.addEventListener('change', function() {
        if (this.value === 'specific-blocks') {
            specificBlocksContainer.style.display = 'block';
        } else {
            specificBlocksContainer.style.display = 'none';
        }
    });
    
    // New announcement button
    const newAnnouncementBtn = document.getElementById('new-announcement-btn');
    newAnnouncementBtn.addEventListener('click', function() {
        resetAnnouncementForm();
        isEditMode = false;
        currentAnnouncementId = null;
        document.getElementById('announcementModalLabel').textContent = 'Create New Announcement';
    });
    
    // Action button handlers
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button');
        if (!target) return;
        
        const action = target.getAttribute('data-action');
        const row = target.closest('tr');
        
        if (action === 'view') {
            populateViewModal(row);
        } else if (action === 'edit') {
            populateEditModal(row);
        } else if (action === 'archive') {
            archiveAnnouncement(row);
        } else if (action === 'restore') {
            restoreAnnouncement(row);
        } else if (action === 'delete') {
            deleteAnnouncement(row);
        } else if (action === 'publish') {
            publishAnnouncement(row);
        }
    });
    
    function populateViewModal(row) {
        const cells = row.querySelectorAll('td');
        const title = cells[0].querySelector('strong').textContent;
        const content = cells[0].querySelector('.small').textContent;
        const category = cells[1].textContent.trim();
        const priority = cells[2].textContent.trim();
        const audience = cells[3].textContent.trim();
        const publishDate = cells[5].textContent.trim();
        const status = cells[6].textContent.trim();
        
        document.getElementById('view-title').textContent = title;
        document.getElementById('view-category').textContent = category;
        document.getElementById('view-priority').textContent = priority;
        document.getElementById('view-status').textContent = status;
        document.getElementById('view-audience').textContent = audience;
        document.getElementById('view-publish-date').textContent = publishDate;
        document.getElementById('view-content').textContent = content;
        document.getElementById('view-created-by').textContent = 'Admin User';
        document.getElementById('view-count').textContent = Math.floor(Math.random() * 100) + ' views';
        
        // Update category badge color
        const categoryBadge = document.getElementById('view-category');
        categoryBadge.className = 'badge ' + getCategoryBadgeClass(category);
        
        // Update priority badge color
        const priorityBadge = document.getElementById('view-priority');
        priorityBadge.className = 'badge ' + getPriorityBadgeClass(priority);
        
        // Update status badge color
        const statusBadge = document.getElementById('view-status');
        statusBadge.className = 'badge ' + getStatusBadgeClass(status);
    }
    
    function populateEditModal(row) {
        const cells = row.querySelectorAll('td');
        const title = cells[0].querySelector('strong').textContent;
        const content = cells[0].querySelector('.small').textContent;
        const category = cells[1].textContent.trim().toLowerCase();
        const priority = cells[2].textContent.trim().toLowerCase();
        const audience = cells[3].textContent.trim();
        
        isEditMode = true;
        currentAnnouncementId = row.dataset.id || Date.now().toString();
        
        document.getElementById('announcementModalLabel').textContent = 'Edit Announcement';
        document.getElementById('announcement-title').value = title;
        document.getElementById('announcement-content').value = content;
        document.getElementById('announcement-category').value = category;
        document.getElementById('announcement-priority').value = priority;
        
        // Set target audience
        const audienceSelect = document.getElementById('target-audience');
        if (audience === 'All Residents') {
            audienceSelect.value = 'all-residents';
        } else if (audience === 'All Homeowners') {
            audienceSelect.value = 'all-homeowners';
        } else if (audience.includes('Phase')) {
            audienceSelect.value = audience.toLowerCase().replace(' ', '-');
        }
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('announcementModal'));
        modal.show();
    }
    
    function archiveAnnouncement(row) {
        const title = row.querySelector('strong').textContent;
        
        if (confirm(`Are you sure you want to archive "${title}"?`)) {
            // Update row status
            row.setAttribute('data-status', 'archived');
            const statusCell = row.cells[6];
            statusCell.innerHTML = '<span class="badge bg-secondary">Archived</span>';
            
            // Update action buttons
            const actionButtons = row.querySelector('.btn-group');
            actionButtons.innerHTML = `
                <button class="btn btn-sm btn-primary" data-action="view" data-bs-toggle="modal" data-bs-target="#viewModal">
                    <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-sm btn-success" data-action="restore">
                    <i class="bi bi-arrow-clockwise"></i>
                </button>
                <button class="btn btn-sm btn-danger" data-action="delete">
                    <i class="bi bi-trash"></i>
                </button>
            `;
            
            updateStatistics();
            alert(`"${title}" has been archived.`);
        }
    }
    
    function restoreAnnouncement(row) {
        const title = row.querySelector('strong').textContent;
        
        if (confirm(`Are you sure you want to restore "${title}"?`)) {
            // Update row status
            row.setAttribute('data-status', 'active');
            const statusCell = row.cells[6];
            statusCell.innerHTML = '<span class="badge bg-success">Active</span>';
            
            // Update action buttons
            const actionButtons = row.querySelector('.btn-group');
            actionButtons.innerHTML = `
                <button class="btn btn-sm btn-primary" data-action="view" data-bs-toggle="modal" data-bs-target="#viewModal">
                    <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-sm btn-warning" data-action="edit" data-bs-toggle="modal" data-bs-target="#announcementModal">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-secondary" data-action="archive">
                    <i class="bi bi-archive"></i>
                </button>
                <button class="btn btn-sm btn-danger" data-action="delete">
                    <i class="bi bi-trash"></i>
                </button>
            `;
            
            updateStatistics();
            alert(`"${title}" has been restored.`);
        }
    }
    
    function deleteAnnouncement(row) {
        const title = row.querySelector('strong').textContent;
        
        if (confirm(`Are you sure you want to permanently delete "${title}"? This action cannot be undone.`)) {
            row.remove();
            updateStatistics();
            alert(`"${title}" has been deleted.`);
        }
    }
    
    function publishAnnouncement(row) {
        const title = row.querySelector('strong').textContent;
        
        if (confirm(`Are you sure you want to publish "${title}" now?`)) {
            // Update row status
            row.setAttribute('data-status', 'active');
            const statusCell = row.cells[6];
            statusCell.innerHTML = '<span class="badge bg-success">Active</span>';
            
            // Update publish date
            const publishDateCell = row.cells[5];
            const now = new Date();
            publishDateCell.textContent = now.toLocaleDateString('en-US', { 
                year: 'numeric', 
                month: 'short', 
                day: 'numeric' 
            });
            
            // Update action buttons
            const actionButtons = row.querySelector('.btn-group');
            actionButtons.innerHTML = `
                <button class="btn btn-sm btn-primary" data-action="view" data-bs-toggle="modal" data-bs-target="#viewModal">
                    <i class="bi bi-eye"></i>
                </button>
                <button class="btn btn-sm btn-warning" data-action="edit" data-bs-toggle="modal" data-bs-target="#announcementModal">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-secondary" data-action="archive">
                    <i class="bi bi-archive"></i>
                </button>
                <button class="btn btn-sm btn-danger" data-action="delete">
                    <i class="bi bi-trash"></i>
                </button>
            `;
            
            updateStatistics();
            alert(`"${title}" has been published successfully!`);
        }
    }
    
    // Form submission handlers
    const publishBtn = document.getElementById('publish-announcement-btn');
    const saveDraftBtn = document.getElementById('save-draft-btn');
    
    publishBtn.addEventListener('click', function() {
        if (validateForm()) {
            saveAnnouncement('active');
        }
    });
    
    saveDraftBtn.addEventListener('click', function() {
        if (validateForm(false)) {
            saveAnnouncement('draft');
        }
    });
    
    function validateForm(requireContent = true) {
        const title = document.getElementById('announcement-title').value.trim();
        const content = document.getElementById('announcement-content').value.trim();
        
        if (!title) {
            alert('Please enter a title for the announcement.');
            return false;
        }
        
        if (requireContent && !content) {
            alert('Please enter content for the announcement.');
            return false;
        }
        
        return true;
    }
    
    function saveAnnouncement(status) {
        const formData = {
            title: document.getElementById('announcement-title').value.trim(),
            content: document.getElementById('announcement-content').value.trim(),
            category: document.getElementById('announcement-category').value,
            priority: document.getElementById('announcement-priority').value,
            targetAudience: document.getElementById('target-audience').value,
            publishDate: document.getElementById('publish-date').value,
            expiryDate: document.getElementById('expiry-date').value,
            sendEmail: document.getElementById('send-email').checked,
            sendSMS: document.getElementById('send-sms').checked,
            pinAnnouncement: document.getElementById('pin-announcement').checked,
            status: status
        };
        
        // Handle specific blocks if selected
        if (formData.targetAudience === 'specific-blocks') {
            const selectedBlocks = [];
            document.querySelectorAll('#specific-blocks-container input:checked').forEach(checkbox => {
                selectedBlocks.push(checkbox.value);
            });
            formData.specificBlocks = selectedBlocks;
        }
        
        console.log('Saving announcement:', formData);
        
        if (isEditMode) {
            updateAnnouncementInTable(formData);
            alert(`Announcement "${formData.title}" has been updated successfully!`);
        } else {
            addAnnouncementToTable(formData);
            alert(`Announcement "${formData.title}" has been ${status === 'active' ? 'published' : 'saved as draft'} successfully!`);
        }
        
        // Close modal
        const modal = bootstrap.Modal.getInstance(document.getElementById('announcementModal'));
        modal.hide();
        
        // Reset form
        resetAnnouncementForm();
        updateStatistics();
    }
    
    function addAnnouncementToTable(data) {
        const tbody = document.querySelector('table tbody');
        const newRow = document.createElement('tr');
        newRow.setAttribute('data-status', data.status);
        newRow.setAttribute('data-priority', data.priority);
        newRow.dataset.id = Date.now().toString();
        
        const publishDate = data.publishDate ? 
            new Date(data.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' }) :
            new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        
        const createdDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
        
        newRow.innerHTML = `
            <td>
                <div>
                    <strong>${data.title}</strong>
                    <div class="small text-muted">${data.content.substring(0, 50)}...</div>
                </div>
            </td>
            <td><span class="badge ${getCategoryBadgeClass(data.category)}">${capitalizeFirst(data.category)}</span></td>
            <td><span class="badge ${getPriorityBadgeClass(data.priority)}">${capitalizeFirst(data.priority)}</span></td>
            <td>${getAudienceDisplayText(data.targetAudience)}</td>
            <td>${createdDate}</td>
            <td>${publishDate}</td>
            <td><span class="badge ${getStatusBadgeClass(data.status)}">${capitalizeFirst(data.status)}</span></td>
            <td>
                <div class="btn-group" role="group">
                    <button class="btn btn-sm btn-primary" data-action="view" data-bs-toggle="modal" data-bs-target="#viewModal">
                        <i class="bi bi-eye"></i>
                    </button>
                    <button class="btn btn-sm btn-warning" data-action="edit" data-bs-toggle="modal" data-bs-target="#announcementModal">
                        <i class="bi bi-pencil"></i>
                    </button>
                    ${data.status === 'scheduled' ? 
                        '<button class="btn btn-sm btn-success" data-action="publish"><i class="bi bi-send"></i></button>' :
                        '<button class="btn btn-sm btn-secondary" data-action="archive"><i class="bi bi-archive"></i></button>'
                    }
                    <button class="btn btn-sm btn-danger" data-action="delete">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </td>
        `;
        
        tbody.insertBefore(newRow, tbody.firstChild);
    }
    
    function updateAnnouncementInTable(data) {
        const row = document.querySelector(`tr[data-id="${currentAnnouncementId}"]`);
        if (!row) return;
        
        const cells = row.querySelectorAll('td');
        cells[0].innerHTML = `
            <div>
                <strong>${data.title}</strong>
                <div class="small text-muted">${data.content.substring(0, 50)}...</div>
            </div>
        `;
        cells[1].innerHTML = `<span class="badge ${getCategoryBadgeClass(data.category)}">${capitalizeFirst(data.category)}</span>`;
        cells[2].innerHTML = `<span class="badge ${getPriorityBadgeClass(data.priority)}">${capitalizeFirst(data.priority)}</span>`;
        cells[3].textContent = getAudienceDisplayText(data.targetAudience);
        
        if (data.publishDate) {
            const publishDate = new Date(data.publishDate).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
            cells[5].textContent = publishDate;
        }
        
        row.setAttribute('data-status', data.status);
        row.setAttribute('data-priority', data.priority);
        cells[6].innerHTML = `<span class="badge ${getStatusBadgeClass(data.status)}">${capitalizeFirst(data.status)}</span>`;
    }
    
    function resetAnnouncementForm() {
        document.getElementById('announcementForm').reset();
        document.getElementById('specific-blocks-container').style.display = 'none';
        
        // Set default values
        document.getElementById('announcement-priority').value = 'medium';
        document.getElementById('target-audience').value = 'all-residents';
        document.getElementById('send-email').checked = true;
        document.getElementById('send-sms').checked = false;
        document.getElementById('pin-announcement').checked = false;
    }
    
    // Helper functions
    function getCategoryBadgeClass(category) {
        const classes = {
            'general': 'bg-success',
            'emergency': 'bg-danger',
            'meeting': 'bg-info',
            'maintenance': 'bg-warning',
            'event': 'bg-primary',
            'payment': 'bg-secondary'
        };
        return classes[category.toLowerCase()] || 'bg-success';
    }
    
    function getPriorityBadgeClass(priority) {
        const classes = {
            'low': 'bg-secondary',
            'medium': 'bg-warning',
            'high': 'bg-danger'
        };
        return classes[priority.toLowerCase()] || 'bg-warning';
    }
    
    function getStatusBadgeClass(status) {
        const classes = {
            'active': 'bg-success',
            'scheduled': 'bg-warning',
            'archived': 'bg-secondary',
            'draft': 'bg-info'
        };
        return classes[status.toLowerCase()] || 'bg-success';
    }
    
    function getAudienceDisplayText(audience) {
        const texts = {
            'all-residents': 'All Residents',
            'all-homeowners': 'All Homeowners',
            'phase-1': 'Phase 1 Only',
            'phase-2': 'Phase 2 Only',
            'phase-3': 'Phase 3 Only',
            'specific-blocks': 'Specific Blocks'
        };
        return texts[audience] || 'All Residents';
    }
    
    function capitalizeFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }
    
    function updateStatistics() {
        const allRows = document.querySelectorAll('table tbody tr');
        const totalCount = allRows.length;
        const activeCount = Array.from(allRows).filter(row => row.getAttribute('data-status') === 'active').length;
        const scheduledCount = Array.from(allRows).filter(row => row.getAttribute('data-status') === 'scheduled').length;
        const archivedCount = Array.from(allRows).filter(row => row.getAttribute('data-status') === 'archived').length;
        
        document.getElementById('total-announcements').textContent = totalCount;
        document.getElementById('active-announcements').textContent = activeCount;
        document.getElementById('scheduled-announcements').textContent = scheduledCount;
        document.getElementById('archived-announcements').textContent = archivedCount;
    }
    
    function updateVisibleRowsCount() {
        const visibleRows = Array.from(document.querySelectorAll('table tbody tr')).filter(row => 
            row.style.display !== 'none'
        );
        console.log(`Showing ${visibleRows.length} announcements`);
    }
    
    // Export functionality
    const exportBtn = document.getElementById('export-announcements');
    exportBtn.addEventListener('click', function() {
        const visibleRows = Array.from(document.querySelectorAll('table tbody tr')).filter(row => 
            row.style.display !== 'none'
        );
        
        const exportData = [];
        exportData.push(['Title', 'Category', 'Priority', 'Target Audience', 'Created Date', 'Publish Date', 'Status']);
        
        visibleRows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const rowData = [];
            for (let i = 0; i < cells.length - 1; i++) { // Skip actions column
                if (i === 0) {
                    // Extract title from first cell
                    rowData.push(cells[i].querySelector('strong').textContent);
                } else {
                    rowData.push(cells[i].textContent.trim());
                }
            }
            exportData.push(rowData);
        });
        
        console.log('Exporting announcement data:', exportData);
        alert(`Exporting ${visibleRows.length} announcements... (This would download an Excel file in a real application)`);
    });
    
    // Edit from view modal
    document.getElementById('edit-from-view-btn').addEventListener('click', function() {
        // Close view modal
        const viewModal = bootstrap.Modal.getInstance(document.getElementById('viewModal'));
        viewModal.hide();
        
        // Find the row and populate edit modal
        // This would need the announcement ID to find the correct row
        // For now, we'll just open the edit modal
        setTimeout(() => {
            const editModal = new bootstrap.Modal(document.getElementById('announcementModal'));
            editModal.show();
        }, 300);
    });
    
    // Initialize statistics
    updateStatistics();
    
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