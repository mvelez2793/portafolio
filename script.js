document.addEventListener('DOMContentLoaded', () => {
    // Current Year in Footer
    const yearEs = document.getElementById('current-year-es');
    const yearEn = document.getElementById('current-year-en');
    const currentYear = new Date().getFullYear();
    if (yearEs) {
        yearEs.textContent = currentYear;
    }
    if (yearEn) {
        yearEn.textContent = currentYear;
    }

    // Theme Toggle (Dark/Light Mode)
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    const icon = themeToggle.querySelector('i');

    function updateThemeIcon(mode) {
        if (mode === 'dark') {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
        body.classList.add('dark-mode');
        updateThemeIcon('dark');
    } else {
        body.classList.remove('dark-mode');
        updateThemeIcon('light');
    }

    themeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDark = body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
        updateThemeIcon(isDark ? 'dark' : 'light');
    });

    // Language Toggle (ES/EN)
    const langBtns = document.querySelectorAll('.lang-btn');
    const pageTitles = {
        es: "María Auxiliadora Vélez Mendoza | Portafolio de Ingeniería de Pruebas (QA)",
        en: "María Auxiliadora Vélez Mendoza | QA Engineering Portfolio"
    };

    function updateLanguage(lang) {
        document.documentElement.setAttribute('lang', lang);
        
        // Update browser tab title
        document.title = pageTitles[lang] || pageTitles.es;
        
        // Update HTML form placeholders
        document.querySelectorAll('[data-placeholder-' + lang + ']').forEach(el => {
            el.placeholder = el.getAttribute('data-placeholder-' + lang);
        });

        // Set active class on buttons
        langBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === lang) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        localStorage.setItem('lang', lang);
    }

    // Set initial language from storage or default to Spanish ('es')
    const savedLang = localStorage.getItem('lang') || 'es';
    updateLanguage(savedLang);

    langBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            updateLanguage(lang);
        });
    });

    // Mobile Menu
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburger && mobileMenu) {
        hamburger.addEventListener('click', () => {
            mobileMenu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });

        // Close menu when clicking a link
        document.querySelectorAll('.mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.remove('active');
                hamburger.classList.remove('active');
            });
        });
    }

    // Reveal Animations on Scroll
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // Project Category Filtering Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const categoryGroups = document.querySelectorAll('.project-category-group');

    if (filterButtons.length > 0 && categoryGroups.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Add active class to clicked button
                button.classList.add('active');

                const filterValue = button.getAttribute('data-filter');

                categoryGroups.forEach(group => {
                    const groupCategory = group.getAttribute('data-category');
                    
                    if (filterValue === 'all' || groupCategory === filterValue) {
                        group.classList.remove('hide');
                        group.classList.add('active');
                        // Ensure child cards are visible/active inside the section
                        group.querySelectorAll('.project-card').forEach(card => {
                            card.classList.add('active');
                        });
                    } else {
                        group.classList.add('hide');
                    }
                });
            });
        });
    }

    // Smooth Scroll for Anchor Links (Enhanced)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form Submission (Formspree Integration)
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            const btn = contactForm.querySelector('button');
            const originalTextEs = btn.querySelector('.lang-es')?.textContent || 'Enviar Mensaje';
            const originalTextEn = btn.querySelector('.lang-en')?.textContent || 'Send Message';
            const currentLang = document.documentElement.getAttribute('lang') || 'es';
            
            // Client-side sanitization and validation (XSS and input constraints)
            const nameInput = document.getElementById('name');
            const emailInput = document.getElementById('email');
            const messageInput = document.getElementById('message');

            const nameValue = nameInput.value.trim();
            const emailValue = emailInput.value.trim();
            const messageValue = messageInput.value.trim();

            const latinLettersRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑüÜ ]{2,50}$/;
            const emailComRegex = /^[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[cC][oO][mM]$/;
            const xssRegex = /<[^>]*>|javascript:|on\w+\s*=/i;

            if (xssRegex.test(nameValue) || xssRegex.test(emailValue) || xssRegex.test(messageValue)) {
                const xssAlert = currentLang === 'es'
                    ? 'Por razones de seguridad, no se permiten caracteres HTML o scripts.'
                    : 'For security reasons, HTML tags or scripts are not allowed.';
                alert(xssAlert);
                return;
            }

            if (!latinLettersRegex.test(nameValue)) {
                const nameAlert = currentLang === 'es'
                    ? 'El nombre solo debe contener letras latinas y espacios (máximo 50 caracteres).'
                    : 'The name must only contain Latin letters and spaces (maximum 50 characters).';
                alert(nameAlert);
                return;
            }

            if (!emailComRegex.test(emailValue)) {
                const emailAlert = currentLang === 'es'
                    ? 'Por favor, introduce un correo electrónico válido que termine en .com.'
                    : 'Please enter a valid email address ending in .com.';
                alert(emailAlert);
                return;
            }

            if (messageValue.length > 500) {
                const messageAlert = currentLang === 'es'
                    ? 'El mensaje no puede exceder los 500 caracteres.'
                    : 'The message cannot exceed 500 characters.';
                alert(messageAlert);
                return;
            }

            btn.disabled = true;
            btn.querySelector('.lang-es').textContent = 'Enviando...';
            btn.querySelector('.lang-en').textContent = 'Sending...';

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    btn.querySelector('.lang-es').textContent = '¡Mensaje Enviado!';
                    btn.querySelector('.lang-en').textContent = 'Message Sent!';
                    btn.style.backgroundColor = 'var(--accent-color)';
                    contactForm.reset();

                    setTimeout(() => {
                        btn.querySelector('.lang-es').textContent = originalTextEs;
                        btn.querySelector('.lang-en').textContent = originalTextEn;
                        btn.disabled = false;
                        btn.style.backgroundColor = '';
                    }, 3000);
                } else {
                    const data = await response.json();
                    const errMsg = data.message || (currentLang === 'es' ? 'Hubo un problema al enviar el formulario' : 'There was a problem sending the form');
                    throw new Error(errMsg);
                }
            } catch (error) {
                console.error('Error:', error);
                
                // Fallback to standard submission if running locally on file:// protocol
                if (error.name === 'TypeError' && window.location.protocol === 'file:') {
                     const alertFallback = currentLang === 'es'
                         ? 'Parece que estás probando desde un archivo local. El formulario se enviará de la forma tradicional.'
                         : 'It seems you are testing from a local file. The form will be sent in the traditional way.';
                     alert(alertFallback);
                     contactForm.submit();
                     return;
                }

                btn.querySelector('.lang-es').textContent = 'Error';
                btn.querySelector('.lang-en').textContent = 'Error';
                btn.style.backgroundColor = '#e74c3c';
                
                const errorAlert = currentLang === 'es'
                    ? 'Hubo un error al enviar el mensaje. Detalles: '
                    : 'There was an error sending the message. Details: ';
                alert(errorAlert + error.message);

                setTimeout(() => {
                    btn.querySelector('.lang-es').textContent = originalTextEs;
                    btn.querySelector('.lang-en').textContent = originalTextEn;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                }, 3000);
            }
        });
    }
});
