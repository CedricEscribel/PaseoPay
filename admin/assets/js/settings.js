document.addEventListener("DOMContentLoaded", function() {
    // Initialize tooltips and popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    
    // Track changes for save functionality
    let hasUnsavedChanges = false;
    const originalValues = {};
    
    // Store original values
    function storeOriginalValues() {
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            if (input.type === 'checkbox') {
                originalValues[input.id] = input.checked;
            } else {
                originalValues[input.id] = input.value;
            }
        });
    }
    
    // Check for changes
    function checkForChanges() {
        const inputs = document.querySelectorAll('input, select, textarea');
        let changed = false;
        
        inputs.forEach(input => {
            const currentValue = input.type === 'checkbox' ? input.checked : input.value;
            if (originalValues[input.id] !== currentValue) {
                changed = true;
            }
        });
        
        hasUnsavedChanges = changed;
        updateSaveButton();
    }
    
    function updateSaveButton() {
        const saveBtn = document.getElementById('save-all-settings');
        if (hasUnsavedChanges) {
            saveBtn.classList.remove('btn-success');
            saveBtn.classList.add('btn-warning');
            saveBtn.innerHTML = '<i class="bi bi-exclamation-circle me-1"></i>Save Changes';
        } else {
            saveBtn.classList.remove('btn-warning');
            saveBtn.classList.add('btn-success');
            saveBtn.innerHTML = '<i class="bi bi-check-circle me-1"></i>All Saved';
        }
    }
    
    // Add change listeners to all inputs
    function addChangeListeners() {
        const inputs = document.querySelectorAll('input, select, textarea');
        inputs.forEach(input => {
            input.addEventListener('change', checkForChanges);
            input.addEventListener('input', checkForChanges);
        });
    }
    
    // Initialize
    storeOriginalValues();
    addChangeListeners();
    
    // Save all settings
    document.getElementById('save-all-settings').addEventListener('click', function() {
        if (!hasUnsavedChanges) {
            alert('No changes to save.');
            return;
        }
        
        const settings = collectAllSettings();
        console.log('Saving settings:', settings);
        
        // Simulate API call
        setTimeout(() => {
            alert('Settings saved successfully!');
            storeOriginalValues(); // Update original values
            hasUnsavedChanges = false;
            updateSaveButton();
            logAdminAction('Settings', 'Updated system settings');
        }, 1000);
    });
    
    // Reset settings
    document.getElementById('reset-settings').addEventListener('click', function() {
        if (confirm('Are you sure you want to reset all settings to default values? This action cannot be undone.')) {
            resetToDefaults();
            alert('Settings have been reset to default values.');
            logAdminAction('Settings', 'Reset all settings to default');
        }
    });
    
    function collectAllSettings() {
        return {
            payment: {
                hoaDues: {
                    monthlyRate: document.getElementById('hoa-monthly-rate').value,
                    penaltyRate: document.getElementById('hoa-penalty-rate').value,
                    gracePeriod: document.getElementById('hoa-grace-period').value,
                    dueDate: document.getElementById('hoa-due-date').value,
                    autoGenerate: document.getElementById('hoa-auto-generate').checked
                },
                garbageCollection: {
                    monthlyRate: document.getElementById('garbage-monthly-rate').value,
                    penaltyRate: document.getElementById('garbage-penalty-rate').value,
                    gracePeriod: document.getElementById('garbage-grace-period').value,
                    dueDate: document.getElementById('garbage-due-date').value,
                    autoGenerate: document.getElementById('garbage-auto-generate').checked
                },
                methods: {
                    cash: document.getElementById('payment-cash').checked,
                    bank: document.getElementById('payment-bank').checked,
                    gcash: document.getElementById('payment-gcash').checked,
                    paymaya: document.getElementById('payment-paymaya').checked,
                    check: document.getElementById('payment-check').checked,
                    processingFee: document.getElementById('payment-processing-fee').value,
                    autoReceipt: document.getElementById('auto-receipt').checked
                },
                bankDetails: {
                    bankName: document.getElementById('bank-name').value,
                    accountNumber: document.getElementById('account-number').value,
                    accountName: document.getElementById('account-name').value
                }
            },
            system: {
                community: {
                    name: document.getElementById('community-name').value,
                    address: document.getElementById('community-address').value,
                    contactNumber: document.getElementById('contact-number').value,
                    contactEmail: document.getElementById('contact-email').value
                },
                preferences: {
                    timezone: document.getElementById('timezone').value,
                    dateFormat: document.getElementById('date-format').value,
                    currency: document.getElementById('currency').value,
                    sessionTimeout: document.getElementById('session-timeout').value
                },
                dataManagement: {
                    logRetention: document.getElementById('log-retention').value,
                    autoCleanup: document.getElementById('auto-cleanup').checked
                }
            },
            security: {
                passwordPolicy: {
                    minLength: document.getElementById('min-password-length').value,
                    requireUppercase: document.getElementById('require-uppercase').checked,
                    requireLowercase: document.getElementById('require-lowercase').checked,
                    requireNumbers: document.getElementById('require-numbers').checked,
                    requireSpecial: document.getElementById('require-special').checked,
                    passwordExpiry: document.getElementById('password-expiry').value
                },
                accessControl: {
                    maxLoginAttempts: document.getElementById('max-login-attempts').value,
                    lockoutDuration: document.getElementById('lockout-duration').value,
                    enable2FA: document.getElementById('enable-2fa').checked,
                    ipWhitelist: document.getElementById('ip-whitelist').checked,
                    auditTrail: document.getElementById('audit-trail').checked
                }
            }
        };
    }
    
    function resetToDefaults() {
        // Payment settings defaults
        document.getElementById('hoa-monthly-rate').value = '400';
        document.getElementById('hoa-penalty-rate').value = '5';
        document.getElementById('hoa-grace-period').value = '15';
        document.getElementById('hoa-due-date').value = '5';
        document.getElementById('hoa-auto-generate').checked = true;
        
        document.getElementById('garbage-monthly-rate').value = '200';
        document.getElementById('garbage-penalty-rate').value = '3';
        document.getElementById('garbage-grace-period').value = '10';
        document.getElementById('garbage-due-date').value = '10';
        document.getElementById('garbage-auto-generate').checked = true;
        
        // System settings defaults
        document.getElementById('timezone').value = 'Asia/Manila';
        document.getElementById('date-format').value = 'MM/DD/YYYY';
        document.getElementById('currency').value = 'PHP';
        document.getElementById('session-timeout').value = '30';
        
        // Security defaults
        document.getElementById('min-password-length').value = '8';
        document.getElementById('max-login-attempts').value = '5';
        document.getElementById('lockout-duration').value = '15';
        
        storeOriginalValues();
        hasUnsavedChanges = false;
        updateSaveButton();
    }
    
    // Test email functionality
    document.getElementById('test-email').addEventListener('click', function() {
        const smtpServer = document.getElementById('smtp-server').value;
        const smtpUsername = document.getElementById('smtp-username').value;
        
        if (!smtpServer || !smtpUsername) {
            alert('Please configure SMTP settings first.');
            return;
        }
        
        this.disabled = true;
        this.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Sending...';
        
        // Simulate email test
        setTimeout(() => {
            alert('Test email sent successfully to ' + smtpUsername);
            this.disabled = false;
            this.innerHTML = '<i class="bi bi-send me-1"></i>Test Email';
            logAdminAction('Settings', 'Sent test email');
        }, 2000);
    });
    
    // Test SMS functionality
    document.getElementById('test-sms').addEventListener('click', function() {
        const smsProvider = document.getElementById('sms-provider').value;
        const apiKey = document.getElementById('sms-api-key').value;
        
        if (!apiKey) {
            alert('Please configure SMS API key first.');
            return;
        }
        
        this.disabled = true;
        this.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Sending...';
        
        // Simulate SMS test
        setTimeout(() => {
            alert('Test SMS sent successfully via ' + smsProvider);
            this.disabled = false;
            this.innerHTML = '<i class="bi bi-phone me-1"></i>Test SMS';
            logAdminAction('Settings', 'Sent test SMS');
        }, 2000);
    });
    
    // Data management functions
    document.getElementById('backup-data').addEventListener('click', function() {
        this.disabled = true;
        this.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Creating...';
        
        // Simulate backup creation
        setTimeout(() => {
            const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
            alert(`Backup created successfully: paseoverde_backup_${timestamp}.sql`);
            this.disabled = false;
            this.innerHTML = '<i class="bi bi-download me-1"></i>Create Backup';
            logAdminAction('System', 'Created data backup');
        }, 3000);
    });
    
    document.getElementById('clear-cache').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear the system cache?')) {
            this.disabled = true;
            this.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Clearing...';
            
            setTimeout(() => {
                alert('System cache cleared successfully.');
                this.disabled = false;
                this.innerHTML = '<i class="bi bi-arrow-clockwise me-1"></i>Clear Cache';
                logAdminAction('System', 'Cleared system cache');
            }, 1500);
        }
    });
    
    document.getElementById('optimize-db').addEventListener('click', function() {
        if (confirm('Are you sure you want to optimize the database? This may take a few minutes.')) {
            this.disabled = true;
            this.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Optimizing...';
            
            setTimeout(() => {
                alert('Database optimization completed successfully.');
                this.disabled = false;
                this.innerHTML = '<i class="bi bi-gear me-1"></i>Optimize Database';
                logAdminAction('System', 'Optimized database');
            }, 5000);
        }
    });
    
    // Restore data functionality
    document.getElementById('confirm-restore').addEventListener('change', function() {
        document.getElementById('confirm-restore-btn').disabled = !this.checked;
    });
    
    document.getElementById('confirm-restore-btn').addEventListener('click', function() {
        const fileInput = document.getElementById('backup-file');
        if (!fileInput.files.length) {
            alert('Please select a backup file first.');
            return;
        }
        
        if (confirm('This will permanently overwrite all current data. Are you absolutely sure?')) {
            this.disabled = true;
            this.innerHTML = '<i class="bi bi-hourglass-split me-1"></i>Restoring...';
            
            setTimeout(() => {
                alert('Data restored successfully from backup.');
                const modal = bootstrap.Modal.getInstance(document.getElementById('restoreModal'));
                modal.hide();
                this.disabled = false;
                this.innerHTML = 'Restore Data';
                document.getElementById('confirm-restore').checked = false;
                logAdminAction('System', 'Restored data from backup');
            }, 8000);
        }
    });
    
    // Admin user management
    document.getElementById('save-admin').addEventListener('click', function() {
        const form = document.getElementById('addAdminForm');
        const formData = new FormData(form);
        
        const adminData = {
            name: document.getElementById('admin-name').value,
            email: document.getElementById('admin-email').value,
            role: document.getElementById('admin-role').value,
            password: document.getElementById('admin-password').value,
            forcePasswordChange: document.getElementById('force-password-change').checked
        };
        
        if (!adminData.name || !adminData.email || !adminData.role || !adminData.password) {
            alert('Please fill in all required fields.');
            return;
        }
        
        // Simulate admin creation
        console.log('Creating admin user:', adminData);
        
        // Add to table
        const tbody = document.querySelector('#security-settings table tbody');
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${adminData.name}</td>
            <td>${adminData.email}</td>
            <td><span class="badge bg-${adminData.role === 'manager' ? 'warning' : 'info'}">${adminData.role.charAt(0).toUpperCase() + adminData.role.slice(1)}</span></td>
            <td>Never</td>
            <td><span class="badge bg-warning">Pending</span></td>
            <td>
                <button class="btn btn-sm btn-outline-primary" data-action="edit-admin">
                    <i class="bi bi-pencil"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger" data-action="deactivate-admin">
                    <i class="bi bi-x"></i>
                </button>
            </td>
        `;
        tbody.appendChild(newRow);
        
        // Close modal and reset form
        const modal = bootstrap.Modal.getInstance(document.getElementById('addAdminModal'));
        modal.hide();
        form.reset();
        
        alert(`Admin user "${adminData.name}" created successfully. Login credentials have been sent to ${adminData.email}.`);
        logAdminAction('User Management', `Created admin user: ${adminData.name} (${adminData.email})`);
    });
    
    // Admin action handlers
    document.addEventListener('click', function(e) {
        const target = e.target.closest('button');
        if (!target) return;
        
        const action = target.getAttribute('data-action');
        const row = target.closest('tr');
        
        if (action === 'edit-admin') {
            const name = row.cells[0].textContent;
            const email = row.cells[1].textContent;
            alert(`Edit admin functionality for ${name} (${email}) would be implemented here.`);
        } else if (action === 'deactivate-admin') {
            const name = row.cells[0].textContent;
            if (confirm(`Are you sure you want to deactivate admin user "${name}"?`)) {
                row.cells[4].innerHTML = '<span class="badge bg-danger">Inactive</span>';
                target.innerHTML = '<i class="bi bi-check"></i>';
                target.setAttribute('data-action', 'activate-admin');
                target.classList.remove('btn-outline-danger');
                target.classList.add('btn-outline-success');
                alert(`Admin user "${name}" has been deactivated.`);
                logAdminAction('User Management', `Deactivated admin user: ${name}`);
            }
        } else if (action === 'activate-admin') {
            const name = row.cells[0].textContent;
            if (confirm(`Are you sure you want to activate admin user "${name}"?`)) {
                row.cells[4].innerHTML = '<span class="badge bg-success">Active</span>';
                target.innerHTML = '<i class="bi bi-x"></i>';
                target.setAttribute('data-action', 'deactivate-admin');
                target.classList.remove('btn-outline-success');
                target.classList.add('btn-outline-danger');
                alert(`Admin user "${name}" has been activated.`);
                logAdminAction('User Management', `Activated admin user: ${name}`);
            }
        }
    });
    
    // Logs functionality
    const logFilter = document.getElementById('log-filter');
    const logSearch = document.getElementById('log-search');
    
    function filterLogs() {
        const filterValue = logFilter.value;
        const searchValue = logSearch.value.toLowerCase();
        const rows = document.querySelectorAll('#logs-table-body tr');
        
        rows.forEach(row => {
            const action = row.getAttribute('data-action');
            const text = row.textContent.toLowerCase();
            
            let showRow = true;
            
            // Apply filter
            if (filterValue !== 'all' && action !== filterValue) {
                showRow = false;
            }
            
            // Apply search
            if (searchValue && !text.includes(searchValue)) {
                showRow = false;
            }
            
            row.style.display = showRow ? '' : 'none';
        });
    }
    
    logFilter.addEventListener('change', filterLogs);
    logSearch.addEventListener('input', filterLogs);
    
    // Export logs
    document.getElementById('export-logs').addEventListener('click', function() {
        const visibleRows = Array.from(document.querySelectorAll('#logs-table-body tr')).filter(row => 
            row.style.display !== 'none'
        );
        
        const exportData = [];
        exportData.push(['Timestamp', 'Admin User', 'Action', 'Details', 'IP Address', 'Status']);
        
        visibleRows.forEach(row => {
            const cells = row.querySelectorAll('td');
            const rowData = [];
            cells.forEach(cell => {
                rowData.push(cell.textContent.trim());
            });
            exportData.push(rowData);
        });
        
        console.log('Exporting logs:', exportData);
        alert(`Exporting ${visibleRows.length} log entries... (This would download a CSV file in a real application)`);
        logAdminAction('System', 'Exported admin logs');
    });
    
    // Clear old logs
    document.getElementById('clear-logs').addEventListener('click', function() {
        if (confirm('Are you sure you want to clear logs older than the retention period? This action cannot be undone.')) {
            const retentionDays = document.getElementById('log-retention').value;
            alert(`Logs older than ${retentionDays} days have been cleared.`);
            logAdminAction('System', `Cleared logs older than ${retentionDays} days`);
        }
    });
    
    // Log admin actions
    function logAdminAction(category, details) {
        const now = new Date();
        const timestamp = now.toLocaleDateString('en-US', { 
            year: 'numeric', 
            month: 'short', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        });
        
        const logEntry = {
            timestamp: timestamp,
            user: 'admin@paseopay.com', // This would come from session
            category: category,
            details: details,
            ipAddress: '192.168.1.100', // This would come from request
            status: 'Success'
        };
        
        // Add to logs table
        const tbody = document.getElementById('logs-table-body');
        const newRow = document.createElement('tr');
        newRow.setAttribute('data-action', category.toLowerCase().replace(' ', '-'));
        
        const badgeClass = {
            'Login': 'bg-info',
            'Settings': 'bg-warning',
            'Payment': 'bg-primary',
            'User Management': 'bg-secondary',
            'Announcement': 'bg-danger',
            'System': 'bg-dark'
        };
        
        newRow.innerHTML = `
            <td>${logEntry.timestamp}</td>
            <td>${logEntry.user}</td>
            <td><span class="badge ${badgeClass[category] || 'bg-secondary'}">${category}</span></td>
            <td>${logEntry.details}</td>
            <td>${logEntry.ipAddress}</td>
            <td><span class="badge bg-success">${logEntry.status}</span></td>
        `;
        
        // Insert at the top
        tbody.insertBefore(newRow, tbody.firstChild);
        
        console.log('Logged admin action:', logEntry);
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
    
    // Warn about unsaved changes
    window.addEventListener('beforeunload', function(e) {
        if (hasUnsavedChanges) {
            e.preventDefault();
            e.returnValue = '';
        }
    });
    
    // Initialize with current settings loaded
    console.log('Settings page initialized');
    logAdminAction('System', 'Accessed system settings page');
});