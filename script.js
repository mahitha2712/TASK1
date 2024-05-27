document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Change navbar background color on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.style.backgroundColor = '#222';
        } else {
            navbar.style.backgroundColor = '#333';
        }
    });

    // Add hover effect to navigation links
    navLinks.forEach(link => {
        link.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#555';
            this.style.color = '#ff0';
        });

        link.addEventListener('mouseleave', function() {
            this.style.backgroundColor = 'transparent';
            this.style.color = 'white';
        });
    });

    // Smooth scroll for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
