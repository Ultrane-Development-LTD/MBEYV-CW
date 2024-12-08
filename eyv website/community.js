document.addEventListener('DOMContentLoaded', function() {
    // Just initialize the items to be visible
    const items = document.querySelectorAll('.carousel-item');
    const track = document.querySelector('.carousel-track');
    
    let currentIndex = Math.floor(items.length / 2); // Start with middle item active
    
    function updateActiveState() {
        items.forEach((item, index) => {
            item.classList.toggle('active', index === currentIndex);
        });
    }
    
    // Click handlers for items
    items.forEach((item, index) => {
        item.addEventListener('click', () => {
            currentIndex = index;
            updateActiveState();
        });
    });
    
    // Initialize
    updateActiveState();
}); 