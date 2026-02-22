// Menu toggle logic for mobile
export function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

// Simple scroll animation observer
export function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                if (entry.target.classList.contains('img-reveal-wrapper')) {
                    entry.target.classList.add('revealed');
                } else {
                    entry.target.classList.add('animate-slide-up');
                }
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        // initialize opacity to 0
        el.style.opacity = '0';
        observer.observe(el);
    });

    document.querySelectorAll('.img-reveal-wrapper').forEach(el => {
        observer.observe(el);
    });
}

document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
    initScrollAnimations();
});
