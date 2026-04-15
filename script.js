// Typing Animation
const typingText = document.querySelector('.typing-text');
const roles = [
    'Web Developer',
    'UI/UX Designer',
    'Frontend Engineer',
    'Creative Developer'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
    const currentRole = roles[roleIndex];
    if (isDeleting) {
        typingText.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typingText.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === currentRole.length) {
        // Pause at end of word
        setTimeout(() => isDeleting = true, 1500);
    } else if (isDeleting && charIndex === 0) {
        // Move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500);
    } else {
        setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
    }
}

// Theme Toggle
const themeToggle = document.getElementById('themeToggle');
const htmlElement = document.documentElement;

// Check for saved theme preference or use system preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);
} else {
    // Check system preference
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        htmlElement.setAttribute('data-theme', 'dark');
        updateThemeIcon('dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
        updateThemeIcon('light');
    }
}

themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector('i');
    if (theme === 'dark') {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
}

// Start typing animation when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(type, 500);

    // Initialize scroll spy
    initScrollSpy();
    initScrollAnimations();
    initScrollTopButton();
    initForm();
});

// Scroll Animations (Fade-in-up)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-up');
                // Remove observer after animation
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe all sections and elements that should animate
    const elementsToAnimate = document.querySelectorAll(
        '.section, .hero-content, .about-content > *, .skill-card, .project-card, .experience-card, .contact-content > *'
    );

    elementsToAnimate.forEach(el => {
        observer.observe(el);
    });
}

// Mobile Menu Toggle
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileNav.classList.toggle('active');
});

// Close mobile menu when clicking a link
mobileNav.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
    });
});

// Scroll Spy for Navigation
function initScrollSpy() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        const scrollY = window.pageYOffset;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 80;
            const sectionHeight = section.offsetHeight;
            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
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
}

// Scroll to Top Button
function initScrollTopButton() {
    const scrollTopBtn = document.getElementById('scrollTopBtn');

    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 300) {
            scrollTopBtn.classList.add('active');
        } else {
            scrollTopBtn.classList.remove('active');
        }
    });

    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Contact Form (UI only - no actual submission)
function initForm() {
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Show success message (for demo)
            alert('Thank you for your message! I will get back to you soon.');
            form.reset();
        });
    }
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if (targetId !== '#') {
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Mobile hamburger menu (if we decide to add it later, but we removed it for now)
// We'll keep the hamburger commented out in HTML, but if we want to add it back, we can.
// For now, we have a navbar menu that is always visible on desktop and can be hidden on mobile with a hamburger.
// Since we removed the hamburger from HTML, we don't need to initialize it.
// If we want to add it back, we would uncomment the hamburger in HTML and add the initHamburgerMenu function.

// For completeness, let's leave a placeholder for hamburger menu initialization.
// function initHamburgerMenu() {
//     const hamburger = document.getElementById('hamburger');
//     const navbarMenu = document.getElementById('navbarMenu');
//
//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('active');
//         navbarMenu.classList.toggle('active');
//     });
//
//     // Close menu when clicking a link
//     document.querySelectorAll('.navbar-menu a').forEach(link => {
//         link.addEventListener('click', () => {
//             hamburger.classList.remove('active');
//             navbarMenu.classList.remove('active');
//         });
//     });
// }