document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const hamburgers = document.querySelectorAll('.hamburger');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        menuToggle.classList.toggle('active');
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.nav-container') && 
            !e.target.closest('.mobile-menu') &&
            mobileMenu.classList.contains('active')) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Close menu when clicking links
    document.querySelectorAll('.mobile-menu a').forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        });
    });

    // Handle window resize
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            menuToggle.classList.remove('active');
            mobileMenu.classList.remove('active');
        }
    });

    // Add hover effect delay for mobile
    let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
    if (isMobile) {
        document.querySelectorAll('a').forEach(link => {
            link.style.touchAction = 'manipulation';
        });
    }
});