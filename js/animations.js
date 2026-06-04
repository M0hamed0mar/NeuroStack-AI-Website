/* ============================================
   NEUROSTACK - FAST SCROLL ANIMATIONS
   Intersection Observer with fast transitions
   ============================================ */

(function initScrollAnimations() {
    // Elements to animate on scroll
    const animatedElements = document.querySelectorAll(
        '.stat-card, .hero-content, .value-card, .coverage-item, ' +
        '.reason-card, .different-card, .mod-card, .phase-card, ' +
        '.project-card, .project-category, .outcome-card, .contact-card'
    );

    // If no elements found, exit early
    if (animatedElements.length === 0) return;

    // Create observer with fast threshold
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -20px 0px'
    });

    // Set initial state and observe each element
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(12px)';
        el.style.transition = 'opacity 0.1s ease, transform 0.1s ease';
        observer.observe(el);
    });

    // Add CSS for animated class
    const style = document.createElement('style');
    style.textContent = `
        .stat-card.animated,
        .hero-content.animated,
        .value-card.animated,
        .coverage-item.animated,
        .reason-card.animated,
        .different-card.animated,
        .mod-card.animated,
        .phase-card.animated,
        .project-card.animated,
        .project-category.animated,
        .outcome-card.animated,
        .contact-card.animated {
            opacity: 1 !important;
            transform: translateY(0) !important;
        }
    `;
    document.head.appendChild(style);
})();