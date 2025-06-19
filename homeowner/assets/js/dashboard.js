

const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function(e) {
        e.preventDefault(); // Prevent the default link behavior
        
        // Clear the login status
        sessionStorage.removeItem('isLoggedIn');
        
        // Redirect to login page
        window.location.href = "..../welcomepage/welcomepage.html";  // Adjust path as needed to point to your login page
    });
}
