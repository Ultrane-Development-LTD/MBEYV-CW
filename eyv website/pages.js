document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    
    // Always show the nav logo and solid background on other pages
    navbar.classList.remove('transparent');
    navbar.classList.add('scrolled');
    
    // Make nav logo visible
    const navLogo = document.querySelector('.nav-logo');
    if (navLogo) {
        navLogo.style.opacity = '1';
    }
}); 