document.addEventListener("DOMContentLoaded", function() {
    // Initialize tooltips and popovers
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
    const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
    
    const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
    const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
    
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
    
    // Call once on load
    handleResize();
    
    // Set up resize listener
    window.addEventListener('resize', handleResize);
    
    // Dashboard specific functionality
    // Auto-refresh dashboard data every 30 seconds (simulation)
    setInterval(function() {
        // In a real application, this would fetch updated data from the server
        console.log('Dashboard data refreshed');
    }, 30000);
    
    // Click handlers for dashboard cards
    document.querySelectorAll('.card').forEach(card => {
        card.addEventListener('click', function() {
            const cardTitle = this.querySelector('.h5, .card-header');
            if (cardTitle) {
                const title = cardTitle.textContent.trim();
                if (title.includes('Homeowners')) {
                    window.location.href = 'homeowners.html';
                } else if (title.includes('Payment')) {
                    window.location.href = 'reports.html';
                }
            }
        });
    });
    
    // Recent activity list interactions
    document.querySelectorAll('.list-group-item').forEach(item => {
        item.addEventListener('click', function() {
            const activityType = this.querySelector('strong').textContent;
            if (activityType.includes('Amortization')) {
                window.location.href = 'amortization.html';
            } else if (activityType.includes('HOA')) {
                window.location.href = 'hoa-dues.html';
            } else if (activityType.includes('Garbage')) {
                window.location.href = 'garbage-collection.html';
            }
        });
    });
});