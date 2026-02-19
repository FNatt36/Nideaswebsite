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

const params = new URLSearchParams(window.location.search);
if (params.get('enviado') === '1') {
    const form = document.getElementById('contactForm');
    if (form) {
        const notice = document.createElement('div');
        notice.textContent = 'Mensaje enviado correctamente. Te responderemos a la brevedad.';
        notice.style.cssText = 'margin-bottom:12px;padding:12px;border-radius:8px;background:#0ea5a5;color:#0f172a;font-weight:600;text-align:center;';
        form.parentElement.insertBefore(notice, form);
    }
}

const i18n = {
    es: {
        'nav.services': 'Servicios',
        'nav.clients': 'Clientes',
        'nav.about': 'Nosotros',
        'nav.contact': 'Contacto',
        'hero.title': 'Ciberseguridad y Compliance para el Mundo Digital',
        'hero.subtitle': 'Soluciones profesionales en ISO 27001, SOC 2, y DevSecOps. Protegemos tu empresa con estándares internacionales.',
        'cta.primary': 'Agendar Reunión',
        'cta.secondary': 'Ver Servicios',
        'services.title': 'Nuestros Servicios',
        'services.subtitle': 'Soluciones integrales de ciberseguridad y compliance adaptadas a las necesidades de tu organización',
        'services.iso.title': 'Consultoría ISO 27001',
        'services.iso.desc': 'Implementación y certificación de sistemas de gestión de seguridad de la información. Te guiamos en cada etapa del proceso hasta obtener tu certificación internacional.',
        'services.soc2.title': 'Consultoría SOC 2',
        'services.soc2.desc': 'Preparación y auditoría para cumplimiento SOC 2 Type I y Type II. Aseguramos que tus controles cumplan con los más altos estándares de confianza.',
        'services.audits.title': 'Auditorías de Seguridad',
        'services.audits.desc': 'Evaluaciones exhaustivas de tu infraestructura y procesos de seguridad. Identificamos vulnerabilidades y proporcionamos planes de acción concretos.',
        'services.controls.title': 'Implementación de Controles',
        'services.controls.desc': 'Diseño e implementación de controles técnicos y organizacionales. Fortalecemos tu postura de seguridad con soluciones prácticas y efectivas.',
        'services.devsecops.title': 'DevSecOps',
        'services.devsecops.desc': 'Integración de seguridad en tus pipelines de desarrollo y operaciones. Automatizamos controles y mejoramos la seguridad sin sacrificar velocidad.',
        'services.risk.title': 'Gestión de Riesgos',
        'services.risk.desc': 'Análisis y gestión continua de riesgos de ciberseguridad. Te ayudamos a tomar decisiones informadas sobre la protección de tus activos.',
        'services.nist.title': 'NIST Cybersecurity Framework',
        'services.nist.desc': 'Implementación y mejora continua según el CSF de NIST (Identify, Protect, Detect, Respond, Recover). Alineamos tus capacidades de seguridad con un marco reconocido internacionalmente.',
        'services.gdpr.title': 'Cumplimiento GDPR',
        'services.gdpr.desc': 'Evaluación de cumplimiento, inventario de datos, DPIA, y recomendaciones para privacidad por diseño. Reducimos riesgos legales y fortalecemos la confianza de tus usuarios.',
        'services.hipaa.title': 'Cumplimiento HIPAA',
        'services.hipaa.desc': 'Asesoramiento para proteger información de salud (PHI), políticas, salvaguardas técnicas y administrativas. Adaptamos controles para organizaciones de salud y tecnología.',
        'clients.title': 'Clientes que Confían en Nosotros',
        'clients.subtitle': 'Empresas líderes que han fortalecido su seguridad con nuestras soluciones',
        'about.title': 'Sobre Nosotros',
        'about.subtitle': 'Un equipo multidisciplinario con pasión por la ciberseguridad',
        'about.p1': 'Fundados en 2020, en N ideas somos un equipo multidisciplinario dedicado a transformar la ciberseguridad y el compliance de empresas en todo el mundo. Combinamos experiencia técnica profunda con un enfoque práctico y orientado al negocio.',
        'about.p2': 'Nuestra misión es hacer que la seguridad de la información sea accesible, comprensible y efectiva. Más que cumplir estándares, construimos culturas de seguridad sostenibles que generen confianza y habiliten el crecimiento.',
        'stats.consultas': 'Consultorías Completadas',
        'stats.clientes': 'Clientes Satisfechos',
        'stats.experiencia': 'Años de Experiencia',
        'stats.fundacion': 'Año de Fundación',
        'ceo.title': 'Fundador y CEO',
        'ceo.bio1': 'Arquitecto de Seguridad y especialista en DevSecOps con más de 10 años de experiencia en ERP y procesos críticos, 15+ años en sistemas Unix, 8+ años en administración de bases de datos y 15+ años en automatización. Experiencia liderando iniciativas de cumplimiento y preparación para auditorías SOC, ISO 27001 y marcos internacionales.',
        'ceo.bio2': 'Enfocado en traducir requerimientos de seguridad y regulatorios en soluciones técnicas concretas y sostenibles, con una visión pragmática orientada a resultados.',
        'contact.title': 'Hablemos de tu Proyecto',
        'contact.subtitle': 'Estamos listos para ayudarte a fortalecer tu seguridad',
        'contact.email': 'Email',
        'contact.phone': 'Teléfono / WhatsApp',
        'contact.location': 'Ubicación',
        'contact.location_desc': 'Buenos Aires, Argentina\nTrabajamos con clientes globalmente',
        'contact.linkedin': 'LinkedIn',
        'form.name': 'Nombre',
        'form.email': 'Email',
        'form.company': 'Empresa',
        'form.message': 'Mensaje',
        'form.submit': 'Enviar Mensaje',
        'footer.tagline': 'Ciberseguridad y Compliance | ISO 27001 | SOC 2 | DevSecOps',
        'footer.copyright': '© 2025 N ideas. Todos los derechos reservados.'
    },
    en: {
        'nav.services': 'Services',
        'nav.clients': 'Clients',
        'nav.about': 'About',
        'nav.contact': 'Contact',
        'hero.title': 'Cybersecurity and Compliance for the Digital World',
        'hero.subtitle': 'Professional solutions in ISO 27001, SOC 2, and DevSecOps. We protect your company with international standards.',
        'cta.primary': 'Book a Meeting',
        'cta.secondary': 'View Services',
        'services.title': 'Our Services',
        'services.subtitle': 'End‑to‑end cybersecurity and compliance tailored to your organization',
        'services.iso.title': 'ISO 27001 Consulting',
        'services.iso.desc': 'Implementation and certification of information security management systems. We guide you through every step until certification.',
        'services.soc2.title': 'SOC 2 Consulting',
        'services.soc2.desc': 'Readiness and assessments for SOC 2 Type I and II. Ensure your controls meet top trust standards.',
        'services.audits.title': 'Security Audits',
        'services.audits.desc': 'Comprehensive assessments of your security infrastructure and processes. We identify gaps and deliver concrete action plans.',
        'services.controls.title': 'Controls Implementation',
        'services.controls.desc': 'Design and implementation of technical and organizational controls. We strengthen your security posture with practical solutions.',
        'services.devsecops.title': 'DevSecOps',
        'services.devsecops.desc': 'Security integrated into development and operations pipelines. Automation without sacrificing delivery speed.',
        'services.risk.title': 'Risk Management',
        'services.risk.desc': 'Ongoing cybersecurity risk analysis and management. Make informed decisions to protect your assets.',
        'services.nist.title': 'NIST Cybersecurity Framework',
        'services.nist.desc': 'CSF-based implementation and continuous improvement (Identify, Protect, Detect, Respond, Recover).',
        'services.gdpr.title': 'GDPR Compliance',
        'services.gdpr.desc': 'Compliance assessment, data inventory, DPIA, and privacy-by-design recommendations.',
        'services.hipaa.title': 'HIPAA Compliance',
        'services.hipaa.desc': 'Advisory to protect PHI with administrative and technical safeguards for health and tech orgs.',
        'clients.title': 'Trusted by Clients',
        'clients.subtitle': 'Leading companies strengthening their security with our solutions',
        'about.title': 'About Us',
        'about.subtitle': 'A multidisciplinary team passionate about cybersecurity',
        'about.p1': 'Founded in 2020, N ideas is a multidisciplinary team transforming cybersecurity and compliance worldwide, combining deep technical expertise with practical, business‑oriented execution.',
        'about.p2': 'Our mission is to make information security accessible, understandable, and effective — building sustainable security cultures that enable growth.',
        'stats.consultas': 'Consultancies Completed',
        'stats.clientes': 'Satisfied Clients',
        'stats.experiencia': 'Years of Experience',
        'stats.fundacion': 'Year Founded',
        'ceo.title': 'Founder & CEO',
        'ceo.bio1': 'Security Architect and DevSecOps specialist with 10+ years in ERP and critical processes, 15+ years in Unix systems, 8+ in database administration, and 15+ in automation. Leads compliance readiness for SOC, ISO 27001 and international frameworks.',
        'ceo.bio2': 'Focused on translating regulatory and security requirements into sustainable, results‑oriented technical solutions.',
        'contact.title': 'Let’s Talk About Your Project',
        'contact.subtitle': 'We’re ready to help you strengthen your security',
        'contact.email': 'Email',
        'contact.phone': 'Phone / WhatsApp',
        'contact.location': 'Location',
        'contact.location_desc': 'Buenos Aires, Argentina\nWe work with clients globally',
        'contact.linkedin': 'LinkedIn',
        'form.name': 'Name',
        'form.email': 'Email',
        'form.company': 'Company',
        'form.message': 'Message',
        'form.submit': 'Send Message',
        'footer.tagline': 'Cybersecurity & Compliance | ISO 27001 | SOC 2 | DevSecOps',
        'footer.copyright': '© 2025 N ideas. All rights reserved.'
    }
};

function applyTranslations(lang) {
    const dict = i18n[lang] || i18n.es;
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            const value = dict[key];
            if (value.includes('\n')) {
                el.innerHTML = value.replace(/\n/g, '<br>');
            } else {
                el.textContent = value;
            }
        }
    });
    localStorage.setItem('lang', lang);
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === lang));
}

const savedLang = localStorage.getItem('lang') || 'es';
applyTranslations(savedLang);

document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyTranslations(btn.dataset.lang);
    });
});
