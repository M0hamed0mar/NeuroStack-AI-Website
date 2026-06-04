/* ============================================
   NEUROSTACK - THEME TOGGLE
   Light mode (white bg) = WHITE logo
   Dark mode (dark bg) = BLACK logo
   ============================================ */

(function initTheme() {
    const themeBtn = document.getElementById('themeBtn');
    const body = document.body;
    const savedTheme = localStorage.getItem('neurostack-theme');

    // Get all logo elements
    const sidebarLogo = document.getElementById('sidebarLogo');
    const footerLogo = document.getElementById('footerLogo');
    const mobLogo = document.getElementById('mobLogoImg');

    function updateLogos() {
        const isDark = body.classList.contains('dark');

        // Light mode (white bg) = white logo
        // Dark mode (dark bg) = black logo
        let logoPath;
        if (isDark) {
            logoPath = '../assets/logo-black.png';
        } else {
            logoPath = '../assets/logo-white.png';
        }

        if (sidebarLogo) sidebarLogo.src = logoPath;
        if (footerLogo) footerLogo.src = logoPath;
        if (mobLogo) mobLogo.src = logoPath;
    }

    // Apply saved theme or default to light
    if (savedTheme === 'dark') {
        body.classList.add('dark');
    } else {
        body.classList.remove('dark');
    }
    updateLogos();

    // Toggle theme on button click
    if (themeBtn) {
        themeBtn.addEventListener('click', function () {
            if (body.classList.contains('dark')) {
                body.classList.remove('dark');
                localStorage.setItem('neurostack-theme', 'light');
            } else {
                body.classList.add('dark');
                localStorage.setItem('neurostack-theme', 'dark');
            }
            updateLogos();
        });
    }
})();