document.addEventListener("DOMContentLoaded", function() {
    // Initialize tooltips and popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    
    // Export Report Button
    const exportButton = document.getElementById("export-report");
    if (exportButton) {
        exportButton.addEventListener("click", function() {
            const reportType = document.getElementById('report-type').value;
            const dateFrom = document.getElementById('date-from').value;
            const dateTo = document.getElementById('date-to').value;
            
            // Simulate export functionality
            const tableData = [];
            const rows = document.querySelectorAll('table tbody tr');
            
            // Add headers
            tableData.push(['Payment ID', 'Homeowner', 'Payment Type', 'Amount', 'Payment Date', 'Payment Method', 'Status']);
            
            // Add data rows
            rows.forEach(row => {
                const cells = row.querySelectorAll('td');
                const rowData = [];
                cells.forEach(cell => {
                    rowData.push(cell.textContent.trim());
                });
                tableData.push(rowData);
            });
            
            console.log('Exporting report data:', {
                type: reportType,
                dateRange: `${dateFrom} to ${dateTo}`,
                data: tableData
            });
            
            alert(`Exporting ${reportType} report from ${dateFrom} to ${dateTo}... (This would download an Excel file in a real application)`);
        });
    }
    
    // Generate Report Button
    const generateReportBtn = document.getElementById("generate-report");
    if (generateReportBtn) {
        generateReportBtn.addEventListener("click", function() {
            const reportType = document.getElementById('report-type').value;
            const dateFrom = document.getElementById('date-from').value;
            const dateTo = document.getElementById('date-to').value;
            
            if (!dateFrom || !dateTo) {
                alert("Please select both start and end dates.");
                return;
            }
            
            if (new Date(dateFrom) > new Date(dateTo)) {
                alert("Start date cannot be later than end date.");
                return;
            }
            
            // Simulate report generation
            filterReportData(reportType, dateFrom, dateTo);
            
            alert(`Generating ${reportType} report from ${dateFrom} to ${dateTo}...`);
            console.log(`Report generated: ${reportType} from ${dateFrom} to ${dateTo}`);
        });
    }
    
    function filterReportData(reportType, dateFrom, dateTo) {
        const rows = document.querySelectorAll('table tbody tr');
        const startDate = new Date(dateFrom);
        const endDate = new Date(dateTo);
        
        rows.forEach(row => {
            const paymentType = row.cells[2].textContent.trim();
            const paymentDateText = row.cells[4].textContent.trim();
            
            // Parse payment date (assuming format like "Apr 5, 2025")
            const paymentDate = new Date(paymentDateText);
            
            let showRow = true;
            
            // Filter by report type
            if (reportType !== 'All Payments') {
                if (reportType === 'Amortization Payments' && !paymentType.includes('Amortization')) {
                    showRow = false;
                } else if (reportType === 'HOA Dues' && !paymentType.includes('HOA')) {
                    showRow = false;
                } else if (reportType === 'Garbage Collection' && !paymentType.includes('Garbage')) {
                    showRow = false;
                } else if (reportType === 'Overdue Payments') {
                    const status = row.cells[6].textContent.trim();
                    if (!status.includes('Overdue')) {
                        showRow = false;
                    }
                }
            }
            
            // Filter by date range
            if (showRow && (paymentDate < startDate || paymentDate > endDate)) {
                showRow = false;
            }
            
            // Show/hide row
            row.style.display = showRow ? '' : 'none';
        });
        
        // Update results count
        const visibleRows = document.querySelectorAll('table tbody tr[style=""], table tbody tr:not([style])');
        console.log(`Filtered results: ${visibleRows.length} records`);
    }
    
    // Report type change handler
    const reportType = document.getElementById('report-type');
    if (reportType) {
        reportType.addEventListener('change', function() {
            console.log(`Report type changed to: ${this.value}`);
            
            // Auto-generate report if dates are selected
            const dateFrom = document.getElementById('date-from').value;
            const dateTo = document.getElementById('date-to').value;
            
            if (dateFrom && dateTo) {
                filterReportData(this.value, dateFrom, dateTo);
            }
        });
    }
    
    // Date input handlers
    const dateFrom = document.getElementById('date-from');
    const dateTo = document.getElementById('date-to');
    
    if (dateFrom && dateTo) {
        // Set default dates (current month)
        const now = new Date();
        const firstDay = new Date(now.getFullYear(), now.getMonth(), 1);
        const lastDay = new Date(now.getFullYear(), now.getMonth() + 1, 0);
        
        dateFrom.valueAsDate = firstDay;
        dateTo.valueAsDate = lastDay;
        
        // Auto-filter when dates change
        [dateFrom, dateTo].forEach(input => {
            input.addEventListener('change', function() {
                const reportTypeValue = document.getElementById('report-type').value;
                const fromValue = dateFrom.value;
                const toValue = dateTo.value;
                
                if (fromValue && toValue) {
                    filterReportData(reportTypeValue, fromValue, toValue);
                }
            });
        });
    }
    
    // Table row click handlers for detailed view
    document.querySelectorAll('table tbody tr').forEach(row => {
        row.addEventListener('click', function() {
            const paymentId = this.cells[0].textContent;
            const homeowner = this.cells[1].textContent;
            const paymentType = this.cells[2].textContent;
            const amount = this.cells[3].textContent;
            const paymentDate = this.cells[4].textContent;
            const paymentMethod = this.cells[5].textContent;
            const status = this.cells[6].textContent;
            
            const details = `
                Payment Details:
                
                Payment ID: ${paymentId}
                Homeowner: ${homeowner}
                Type: ${paymentType}
                Amount: ${amount}
                Date: ${paymentDate}
                Method: ${paymentMethod}
                Status: ${status}
            `;
            
            alert(details);
        });
    });
    
    // Summary statistics
    function calculateSummaryStats() {
        const visibleRows = document.querySelectorAll('table tbody tr[style=""], table tbody tr:not([style])');
        let totalAmount = 0;
        let completedCount = 0;
        let pendingCount = 0;
        
        visibleRows.forEach(row => {
            const amountText = row.cells[3].textContent.replace('₱', '').replace(',', '');
            const amount = parseFloat(amountText);
            if (!isNaN(amount)) {
                totalAmount += amount;
            }
            
            const status = row.cells[6].textContent.trim();
            if (status.includes('Completed')) {
                completedCount++;
            } else {
                pendingCount++;
            }
        });
        
        return {
            totalRecords: visibleRows.length,
            totalAmount: totalAmount,
            completedCount: completedCount,
            pendingCount: pendingCount
        };
    }
    
    // Add summary display
    function updateSummaryDisplay() {
        const stats = calculateSummaryStats();
        
        // Remove existing summary if present
        const existingSummary = document.querySelector('.report-summary');
        if (existingSummary) {
            existingSummary.remove();
        }
        
        // Create summary element
        const summaryDiv = document.createElement('div');
        summaryDiv.className = 'report-summary alert alert-info mt-3';
        summaryDiv.innerHTML = `
            <strong>Report Summary:</strong>
            Total Records: ${stats.totalRecords} | 
            Total Amount: ₱${stats.totalAmount.toLocaleString()} | 
            Completed: ${stats.completedCount} | 
            Pending: ${stats.pendingCount}
        `;
        
        // Insert after the table
        const table = document.querySelector('.table-responsive');
        table.parentNode.insertBefore(summaryDiv, table.nextSibling);
    }
    
    // Update summary when report is generated
    const originalFilterFunction = filterReportData;
    filterReportData = function(reportType, dateFrom, dateTo) {
        originalFilterFunction(reportType, dateFrom, dateTo);
        updateSummaryDisplay();
    };
    
    // Initialize summary on page load
    updateSummaryDisplay();
    
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