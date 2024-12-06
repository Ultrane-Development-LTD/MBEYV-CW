document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const heroSection = document.querySelector('#hero');
    const heroLogo = document.querySelector('.hero-logo');
    const navLogo = document.querySelector('.nav-logo');
    const navBrand = document.querySelector('.navbar-brand');
    
    // Add transparent class initially
    navbar.classList.add('transparent');
    navbar.classList.remove('scrolled');

    // Initial logo state
    navLogo.style.opacity = '0';
    
    // Set initial position
    heroLogo.style.transform = 'translate(-50%, -50%)';
    
    window.addEventListener('scroll', function() {
        const heroHeight = heroSection.offsetHeight;
        const scrollPosition = window.scrollY;
        const scrollProgress = Math.min(scrollPosition / (heroHeight * 0.8), 1);

        // Calculate scale
        const startScale = 1;
        const endScale = 0.3;
        const scale = startScale - (scrollProgress * (startScale - endScale));
        
        // Move upward to header position
        const moveDistance = scrollProgress * 400;
        
        // Apply transformations to hero logo
        heroLogo.style.transform = `translate(-50%, calc(-50% - ${moveDistance}px)) scale(${scale})`;
        
        // Delay the fade transition (changed from 0.9 to 0.95)
        if (scrollProgress > 0.95) {
            heroLogo.style.opacity = '0';
            navLogo.style.opacity = '1';
        } else {
            heroLogo.style.opacity = Math.max(1 - scrollProgress * 1.5, 0);
            navLogo.style.opacity = '0';
        }

        // Handle navbar background
        if (scrollPosition >= heroHeight - navbar.offsetHeight) {
            navbar.classList.remove('transparent');
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.add('transparent');
            navbar.classList.remove('scrolled');
        }
    });
});