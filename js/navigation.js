/* ============================================
   NEUROSTACK - NAVIGATION
   Active link detection based on current page
   ============================================ */

(function initNavigation() {
    // Get current page filename from URL
    const currentPath = window.location.pathname;
    const currentFile = currentPath.split('/').pop() || 'index.html';

    // Select all navigation links (sidebar, footer, bottom-nav)
    const allLinks = document.querySelectorAll('.side-link, .footer-links a, .bottom-link');

    allLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href) {
            // Extract filename from href
            const hrefFile = href.split('/').pop();
            if (hrefFile === currentFile) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        }
    });
})();