document.addEventListener('DOMContentLoaded', () => {
    // 1. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navLinks) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            // Toggle icon between bars and times
            const icon = mobileBtn.querySelector('i');
            if (icon.classList.contains('fa-bars')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // 2. Form Submission Prevention (Basic)
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Basic validation check
            const btn = contactForm.querySelector('button[type="submit"]');
            const originalText = btn.textContent;
            
            btn.textContent = 'Sending...';
            btn.disabled = true;

            // Simulate sending delay
            setTimeout(() => {
                btn.textContent = 'Message Sent Successfully!';
                btn.style.backgroundColor = '#2e7d32'; // Green
                contactForm.reset();
                
                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                }, 3000);
            }, 1000);
        });
    }

    // 3. Highlight current nav link
    const currentLocation = location.href;
    const navItems = document.querySelectorAll('.nav-links a');
    const navLength = navItems.length;
    for (let i = 0; i < navLength; i++) {
        if (navItems[i].href === currentLocation) {
            navItems[i].className = "active";
        }
    }
});
