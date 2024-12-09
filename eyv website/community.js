document.addEventListener('DOMContentLoaded', function() {
    const track = document.querySelector('.carousel-track');
    const items = document.querySelectorAll('.carousel-item');
    
    // Scroll functions
    const scrollAmount = 300; // Adjust this value as needed
    
    // Add click handlers to existing buttons
    document.querySelector('.carousel-nav.prev').addEventListener('click', () => {
        track.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    });
    
    document.querySelector('.carousel-nav.next').addEventListener('click', () => {
        track.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    });
    
    // Simple active state based on scroll position
    function updateActiveItem() {
        const scrollLeft = track.scrollLeft;
        const containerWidth = track.offsetWidth;
        const centerPosition = scrollLeft + (containerWidth / 2);
        
        items.forEach(item => {
            const itemLeft = item.offsetLeft;
            const itemWidth = item.offsetWidth;
            const itemCenter = itemLeft + (itemWidth / 2);
            
            if (Math.abs(itemCenter - centerPosition) < itemWidth / 2) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    track.addEventListener('scroll', updateActiveItem);
    updateActiveItem(); // Initial state
}); 