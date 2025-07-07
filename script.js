let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            })
        }
    })
}

document.addEventListener('DOMContentLoaded', function() {
    // Enhanced contact form validation and clearing
    const contactForm = document.querySelector('.contact-form');
    const contactSubmit = document.querySelector('.contact-submit');

    function validateEmail(email) {
        // Simple email regex
        return /^\S+@\S+\.\S+$/.test(email);
    }

    if (contactForm && contactSubmit) {
        contactSubmit.addEventListener('click', function(event) {
            event.preventDefault();
            let valid = true;
            // Remove previous error styles
            contactForm.querySelectorAll('input, textarea').forEach(el => {
                el.style.borderColor = '#e5e7eb';
            });
            // Validate required fields
            const nameInput = contactForm.querySelector('input[placeholder="Your Name"]');
            const emailInput = contactForm.querySelector('input[type="email"]');
            const messageInput = contactForm.querySelector('textarea');
            if (!nameInput.value.trim()) {
                nameInput.style.borderColor = 'red';
                valid = false;
            }
            if (!emailInput.value.trim() || !validateEmail(emailInput.value.trim())) {
                emailInput.style.borderColor = 'red';
                valid = false;
            }
            if (!messageInput.value.trim()) {
                messageInput.style.borderColor = 'red';
                valid = false;
            }
            if (valid) {
                contactForm.querySelectorAll('input, textarea').forEach(el => el.value = '');
            }
        });
    }
});
 