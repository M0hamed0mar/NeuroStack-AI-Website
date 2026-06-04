/* ============================================
   NEUROSTACK - MAIN JAVASCRIPT
   Initializes all modules
   ============================================ */

// Initialize all modules when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
    // Theme is initialized in theme.js (loaded separately)
    // Navigation is initialized in navigation.js (loaded separately)
    // Animations are initialized in animations.js (loaded separately)

    // Mobile header shadow on scroll
    const mobHeader = document.getElementById('mobHeader');
    if (mobHeader) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 10) {
                mobHeader.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.08)';
            } else {
                mobHeader.style.boxShadow = 'none';
            }
        });
    }

    // Smooth scroll for anchor links (if any)
    const anchorLinks = document.querySelectorAll('a[href^="#"]:not([href="#"])');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Simple page fade-in
    const main = document.querySelector('.main');
    if (main) {
        main.style.opacity = '0';
        main.style.transition = 'opacity 0.15s ease';
        setTimeout(() => {
            main.style.opacity = '1';
        }, 10);
    }

    console.log('NeuroStack website loaded | Fast animations | Dark mode ready');
});