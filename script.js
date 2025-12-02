// Mobile menu toggle functionality
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
const mobileLinks = document.querySelectorAll('.mobile-nav-link, .mobile-cta-button');

// Toggle mobile menu
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar') && !e.target.closest('.mobile-menu')) {
        hamburger.classList.remove('active');
        mobileMenu.classList.remove('active');
    }
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect (optional - navbar can change on scroll)
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    const currentScroll = window.pageYOffset;
    
    // You can add additional effects here if needed
    // For example, change navbar opacity or add shadow on scroll
    
    lastScroll = currentScroll;
});
