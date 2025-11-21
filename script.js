// ============================================
// Navigation & Scroll Effects
// ============================================

// Mobile menu toggle
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');

mobileMenuToggle.addEventListener('click', () => {
    mobileMenuToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenuToggle.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    lastScroll = currentScroll;
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (window.pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));

        if (target) {
            const navbarHeight = navbar.offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ============================================
// Contact Form Handler
// ============================================

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    // Get form data
    const formData = {
        name: document.getElementById('name').value.trim(),
        email: document.getElementById('email').value.trim(),
        phone: document.getElementById('phone').value.trim(),
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value.trim()
    };

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
        showFormMessage('Please fill in all required fields.', 'error');
        return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
        showFormMessage('Please enter a valid email address.', 'error');
        return;
    }

    // Create email body
    const emailBody = createEmailBody(formData);

    // Create mailto link
    const mailtoLink = `mailto:info@barrettsquarry.ie?subject=${encodeURIComponent(getSubjectText(formData.subject))}&body=${encodeURIComponent(emailBody)}`;

    // Try to open email client
    try {
        window.location.href = mailtoLink;

        // Show success message
        showFormMessage('Opening your email client... Please send the email to complete your inquiry.', 'success');

        // Reset form after a delay
        setTimeout(() => {
            contactForm.reset();
            hideFormMessage();
        }, 5000);

    } catch (error) {
        showFormMessage('Unable to open email client. Please email us directly at info@barrettsquarry.ie', 'error');
    }
});

// Helper function to create email body
function createEmailBody(formData) {
    return `
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}

Subject: ${getSubjectText(formData.subject)}

Message:
${formData.message}

---
This inquiry was submitted via the Barrett's Quarry website contact form.
`;
}

// Helper function to get subject text
function getSubjectText(subjectValue) {
    const subjects = {
        'bulk-quote': 'Bulk Order Quote Request',
        'domestic-order': 'Domestic Order Inquiry',
        'visit-inquiry': 'Visit Inquiry',
        'general': 'General Inquiry'
    };
    return subjects[subjectValue] || 'Contact Form Inquiry';
}

// Show form message
function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';

    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Hide form message
function hideFormMessage() {
    formMessage.style.display = 'none';
    formMessage.className = 'form-message';
}

// ============================================
// Animations on Scroll
// ============================================

// Fade in elements on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to elements
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.product-card, .feature, .info-block, .contact-method');

    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
});

// ============================================
// Form Enhancement: Character Counter for Message
// ============================================

const messageTextarea = document.getElementById('message');
const messageMinLength = 10;

messageTextarea.addEventListener('input', () => {
    const length = messageTextarea.value.length;

    if (length > 0 && length < messageMinLength) {
        messageTextarea.style.borderColor = '#e74c3c';
    } else if (length >= messageMinLength) {
        messageTextarea.style.borderColor = '#27ae60';
    } else {
        messageTextarea.style.borderColor = '';
    }
});

// ============================================
// Print Current Year in Footer
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const currentYear = new Date().getFullYear();
    const footerText = document.querySelector('.footer-bottom p');
    if (footerText) {
        footerText.innerHTML = footerText.innerHTML.replace('2024', currentYear);
    }
});

// ============================================
// Accessibility: Keyboard Navigation
// ============================================

// Add keyboard support for mobile menu
mobileMenuToggle.addEventListener('keypress', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        mobileMenuToggle.click();
    }
});

// Focus management for form submission
contactForm.addEventListener('submit', () => {
    // Focus on form message after submission
    setTimeout(() => {
        if (formMessage.style.display === 'block') {
            formMessage.setAttribute('tabindex', '-1');
            formMessage.focus();
        }
    }, 100);
});

// ============================================
// Performance: Lazy Loading Effect
// ============================================

// Add loading class to images when they're in viewport
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('loaded');
            imageObserver.unobserve(entry.target);
        }
    });
});

document.querySelectorAll('.image-placeholder, .map-placeholder').forEach(img => {
    imageObserver.observe(img);
});

// ============================================
// Console Welcome Message
// ============================================

console.log('%c🏔️ Barrett\'s Quarry', 'font-size: 20px; font-weight: bold; color: #3498db;');
console.log('%cPremium White Quartzite - Bangor, County Mayo', 'font-size: 14px; color: #7f8c8d;');
console.log('%cWebsite built with care for a family business', 'font-size: 12px; color: #95a5a6;');
