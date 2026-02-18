const header = document.getElementById('header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.section-header, .service-card, .client-card, .about-text, .team-leader, .contact-info, .contact-form').forEach(el => {
    observer.observe(el);
});

document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = 80;
            const targetPosition = target.offsetTop - headerHeight;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

const serviceCards = document.querySelectorAll('.service-card');
serviceCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.1}s`;
});

const clientCards = document.querySelectorAll('.client-card');
clientCards.forEach((card, index) => {
    card.style.transitionDelay = `${index * 0.15}s`;
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('⚠️ CONFIGURAR: Necesitas conectar este formulario con un servicio de email (Formspree, EmailJS, etc.)');
});
