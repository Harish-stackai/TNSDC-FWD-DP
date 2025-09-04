const toggleBtn = document.getElementById('theme-toggle');
toggleBtn.addEventListener('click', () => {
    const currentTheme = document.body.getAttribute('data-theme');
    if (currentTheme === 'light') {
        document.body.setAttribute('data-theme', 'dark');
        toggleBtn.textContent = '🌙';
    } else {
        document.body.setAttribute('data-theme', 'light');
        toggleBtn.textContent = '🌞';
    }
});

const texts = [
    "FullStack Developer",
    "AI Enthusiast"
];
let index = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById('typing');

function type() {
    const currentText = texts[index];
    if (isDeleting) {
        charIndex--;
        typingElement.textContent = currentText.substring(0, charIndex);
        if (charIndex === 0) {
            isDeleting = false;
            index = (index + 1) % texts.length;
        }
    } else {
        charIndex++;
        typingElement.textContent = currentText.substring(0, charIndex);
        if (charIndex === currentText.length) {
            isDeleting = true;
        }
    }
    setTimeout(type, isDeleting ? 50 : 150);
}
type();

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('show');
            }, i * 120); 
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.section').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});
document.querySelectorAll('.skill-card').forEach((el, i) => {
    if (i % 2 === 0) {
        el.classList.add('stem-left', 'hidden');
    } else {
        el.classList.add('stem-right', 'hidden');
    }
    observer.observe(el);
});
document.querySelectorAll('.project-card, .certificate-card, .contact-form').forEach(el => {
    el.classList.add('hidden');
    observer.observe(el);
});

const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

