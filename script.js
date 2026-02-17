document.addEventListener('DOMContentLoaded', () => {
    // Current Year in Footer
    const yearElement = document.getElementById('current-year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
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
                // Optional: Stop observing once revealed
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

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
            const originalText = btn.textContent;
            
            // Check if the user hasn't replaced the placeholder ID yet
            if (contactForm.action.includes('TU_ID_DE_FORMSPREE')) {
                alert('Para que el formulario funcione, necesitas registrarte en Formspree (https://formspree.io) y reemplazar "TU_ID_DE_FORMSPREE" en el archivo index.html con tu ID de formulario.');
                return;
            }

            btn.textContent = 'Enviando...';
            btn.disabled = true;

            try {
                const response = await fetch(contactForm.action, {
                    method: 'POST',
                    body: new FormData(contactForm),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    btn.textContent = '¡Mensaje Enviado!';
                    btn.style.backgroundColor = 'var(--accent-color)';
                    contactForm.reset();

                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.disabled = false;
                        btn.style.backgroundColor = '';
                    }, 3000);
                } else {
                    const data = await response.json();
                    if (data.errors) {
                         throw new Error(data.errors.map(error => error.message).join(", "));
                    } else {
                        throw new Error('Hubo un problema al enviar el formulario');
                    }
                }
            } catch (error) {
                console.error('Error:', error);
                
                // If fetch failed deeply (like CORS error on local file), try standard submission
                // This is common when testing from file://
                if (error.name === 'TypeError' && window.location.protocol === 'file:') {
                     alert('Parece que estás probando desde un archivo local. El formulario se enviará de la forma tradicional.');
                     contactForm.submit(); // Fallback to standard submit
                     return;
                }

                btn.textContent = 'Error';
                btn.style.backgroundColor = '#e74c3c';
                alert('Hubo un error al enviar el mensaje. Detalles: ' + error.message);

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.disabled = false;
                    btn.style.backgroundColor = '';
                }, 3000);
            }
        });
    }
});
