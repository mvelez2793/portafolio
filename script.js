<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description"
        content="Portafolio profesional de María Auxiliadora Vélez Mendoza - QA Engineer especializada en pruebas manuales y automatizadas.">
    <title>María Auxiliadora Vélez Mendoza | QA Engineer Portfolio</title>

    <!-- Google Fonts: Inter -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet">

    <!-- Font Awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">

    <!-- Custom CSS -->
    <link rel="stylesheet" href="styles.css">
</head>

<body class="light-mode">
    <!-- Header/Navigation -->
    <header id="header">
        <nav class="container">
            <div class="logo">
                <i class="fas fa-shield-alt"></i>
                <span>MAVM<span>.QA</span></span>
            </div>

            <ul class="nav-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#about">Perfil</a></li>
                <li><a href="#certifications">Títulos</a></li>
                <li><a href="#projects">Proyectos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>

            <div class="nav-actions">
                <button id="theme-toggle" aria-label="Cambiar modo de color">
                    <i class="fas fa-moon"></i>
                </button>
                <div class="hamburger">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
        <!-- Mobile Menu Overlay -->
        <div class="mobile-menu">
            <a href="#home">Inicio</a>
            <a href="#about">Perfil</a>
            <a href="#certifications">Títulos</a>
            <a href="#projects">Proyectos</a>
            <a href="#contact">Contacto</a>
        </div>
    </header>

    <main>
        <!-- Hero Section -->
        <section id="home" class="hero">
            <div class="container hero-container">
                <div class="hero-content">
                    <div class="badge-opener reveal">QA Engineer & Project Manager</div>
                    <h1 class="reveal delay-100">Hola, soy <span>María Auxiliadora Vélez Mendoza</span></h1>
                    <h2 class="reveal delay-200">Ingeniera en Sistemas | MBA in Project Management | Manual & Automated
                        Testing</h2>
                    <p class="reveal delay-300">
                        QA Engineer con enfoque en calidad y mejora continua. Experiencia en pruebas manuales y
                        automatizadas, API testing con Postman, gestión de bugs en JIRA y validación de bases de datos
                        con SQL. Combinando sólidos conocimientos técnicos con gestión de proyectos para entregar
                        software de alta calidad.
                    </p>
                    <div class="hero-btns reveal delay-400">
                        <a href="#projects" class="btn btn-primary">Ver Proyectos <i class="fas fa-arrow-right"></i></a>
                        <a href="#" class="btn btn-outline">Descargar CV <i class="fas fa-download"></i></a>
                    </div>

                    <div class="social-hero reveal delay-500">
                        <a href="https://linkedin.com/in/maria-auxiliadora-velez-mendoza" target="_blank"
                            title="LinkedIn"><i class="fab fa-linkedin-in"></i></a>
                        <a href="https://github.com/mvelez2793" target="_blank" title="GitHub"><i
                                class="fab fa-github"></i></a>
                        <a href="mailto:mvelez2793@gmail.com" title="Email"><i class="fas fa-envelope"></i></a>
                    </div>
                </div>
                <div class="hero-image reveal delay-300">
                    <div class="image-wrapper">
                        <!-- Placeholder avatar icon as requested if no image -->
                        <img src="imagen.jpg" alt="María Auxiliadora Vélez Mendoza">
                    </div>
                    <div class="exp-badge floating-badge">
                        <i class="fas fa-check-circle"></i>
                        <span>QA Certified</span>
                    </div>
                </div>
            </div>
        </section>

        <!-- Technical Stack Section -->
        <section id="stack" class="stack-section">
            <div class="container">
                <div class="stack-wrapper reveal">
                    <h3>Tech Stack & Herramientas</h3>
                    <div class="stack-icons">
                        <div class="stack-item" title="Selenium WebDriver">
                            <i class="fas fa-robot"></i>
                            <span>Selenium</span>
                        </div>
                        <div class="stack-item" title="Postman API Testing">
                            <i class="fas fa-rocket"></i>
                            <span>Postman</span>
                        </div>
                        <div class="stack-item" title="JIRA Bug Tracking">
                            <i class="fab fa-jira"></i>
                            <span>JIRA</span>
                        </div>
                        <div class="stack-item" title="SQL Database">
                            <i class="fas fa-database"></i>
                            <span>SQL</span>
                        </div>
                        <div class="stack-item" title="Python Programming">
                            <i class="fab fa-python"></i>
                            <span>Python</span>
                        </div>
                        <div class="stack-item" title="Android Studio">
                            <i class="fab fa-android"></i>
                            <span>Android</span>
                        </div>
                        <div class="stack-item" title="Git Version Control">
                            <i class="fab fa-git-alt"></i>
                            <span>Git</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Key Competencies Section -->
        <section id="about" class="competencies section-padding">
            <div class="container">
                <div class="section-title">
                    <h2 class="reveal">Competencias Clave</h2>
                    <div class="underline"></div>
                </div>

                <div class="competencies-grid reveal">
                    <span class="skill-tag">Diseño de casos de prueba</span>
                    <span class="skill-tag">Pruebas funcionales y de regresión</span>
                    <span class="skill-tag">Gestión de bugs (JIRA)</span>
                    <span class="skill-tag">API Testing (Postman)</span>
                    <span class="skill-tag">Automatización (Selenium)</span>
                    <span class="skill-tag">Validación de datos (SQL)</span>
                    <span class="skill-tag">Metodologías Ágiles (Scrum/Kanban)</span>
                    <span class="skill-tag">Documentación técnica</span>
                    <span class="skill-tag">Python</span>
                    <span class="skill-tag">Android Studio</span>
                </div>
            </div>
        </section>

        <!-- Certifications Section -->
        <section id="certifications" class="certifications section-padding bg-alt">
            <div class="container">
                <div class="section-title">
                    <h2 class="reveal">Títulos Profesionales y Certificaciones</h2>
                    <div class="underline"></div>
                </div>

                <div class="certs-grid">
                    <!-- MBA -->
                    <div class="cert-card reveal">
                        <div class="cert-header">
                            <div class="cert-icon"><i class="fas fa-user-graduate"></i></div>
                            <span class="cert-year">2021 - 2023</span>
                        </div>
                        <h3>Maestría en Dirección General</h3>
                        <h4>Énfasis en Gerencia de Proyectos</h4>
                        <p class="institution">Universidad Europea de Monterrey</p>
                        <p class="cert-desc">MBA especializado en Gestión de Proyectos. Áreas clave: Gestión de
                            proyectos ágiles y tradicionales, Scrum, Kanban, análisis de negocio y liderazgo de equipos.
                        </p>
                    </div>

                    <!-- Ingeniería -->
                    <div class="cert-card reveal">
                        <div class="cert-header">
                            <div class="cert-icon"><i class="fas fa-laptop-code"></i></div>
                            <span class="cert-year">2012 - 2018</span>
                        </div>
                        <h3>Ingeniera en Sistemas Informáticos</h3>
                        <p class="institution">Universidad Técnica de Manabí</p>
                        <p class="cert-desc">Formación integral en ingeniería de software: fundamentos de programación
                            sólidos, bases de datos, arquitectura de software y redes.</p>
                    </div>

                    <!-- Bootcamp -->
                    <div class="cert-card reveal">
                        <div class="cert-header">
                            <div class="cert-icon"><i class="fas fa-bug"></i></div>
                            <span class="cert-year">2024 - 2025</span>
                        </div>
                        <h3>QA Engineer (Bootcamp)</h3>
                        <p class="institution">TripleTen LatAm</p>
                        <p class="cert-desc">Bootcamp intensivo en Quality Assurance Engineering. Stack técnico:
                            Selenium WebDriver, Postman, Jira, SQL, Android Studio. Metodologías ágiles. Integrante
                            activa de la comunidad de aprendizaje (Grupo 31).</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Projects Section -->
        <section id="projects" class="projects section-padding">
            <div class="container">
                <div class="section-title">
                    <h2 class="reveal">Proyectos Destacados</h2>
                    <div class="underline"></div>
                </div>

                <div class="projects-grid">
                    <!-- Project 1: Urban Grocers -->
                    <div class="project-card reveal">
                        <div class="project-img">
                            <div class="img-placeholder grocers-bg">
                                <i class="fas fa-shopping-cart"></i>
                            </div>
                        </div>
                        <div class="project-content">
                            <div class="project-header">
                                <h3>Urban Grocers – QA Testing</h3>
                                <div class="tech-badge-container">
                                    <span class="tech-badge">QA Manual</span>
                                    <span class="tech-badge">JIRA</span>
                                    <span class="tech-badge">Equivalencia</span>
                                    <span class="tech-badge">POSTMAN</span>
                                </div>
                            </div>
                            <p>Validación de campos críticos, lógica de negocio y flujos funcionales. Diseño y ejecución
                                exhaustiva de casos de prueba, reporte detallado de bugs en JIRA y ejecución de pruebas
                                de regresión para asegurar la estabilidad.</p>
                            <div class="project-cta">
                                <a href="https://github.com/mvelez2793/qa-project-Urban-Grocers-app-es" target="_blank"
                                    class="btn-link">
                                    Ver en GitHub <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- Project 2: Urban Routes -->
                    <div class="project-card reveal">
                        <div class="project-img">
                            <div class="img-placeholder routes-bg">
                                <i class="fas fa-map-marked-alt"></i>
                            </div>
                        </div>
                        <div class="project-content">
                            <div class="project-header">
                                <h3>Urban Routes – QA Testing</h3>
                                <div class="tech-badge-container">
                                    <span class="tech-badge">Funcional</span>
                                    <span class="tech-badge">Análisis</span>
                                    <span class="tech-badge">Docs</span>
                                    <span class="tech-badge"></span>
                                </div>
                            </div>
                            <p>Validación integral de funcionalidades web. Análisis profundo de requisitos, ejecución de
                                pruebas manuales, reporte de defectos y elaboración de documentación técnica para el
                                equipo de desarrollo.</p>
                            <p>Proyecto de testing integral donde apliqué diseño de pruebas, validación funcional,
                                pruebas de API REST y verificación de base de datos utilizando SQL.
                                Incluye pruebas Web, Mobile y Backend, documentación estructurada de defectos y
                                validación de arquitectura cliente-servidor.</p>
                            <div class="project-cta">
                                <a href="https://github.com/mvelez2793/qa-project-Urban-Routes-es" target="_blank"
                                    class="btn-link">
                                    Ver en GitHub <i class="fab fa-github"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Contact Section -->
        <section id="contact" class="contact section-padding bg-alt">
            <div class="container">
                <div class="section-title">
                    <h2 class="reveal">Contacto</h2>
                    <div class="underline"></div>
                </div>

                <div class="contact-wrapper reveal">
                    <div class="contact-info">
                        <h3>¿Listo para trabajar juntos?</h3>
                        <p>Estoy disponible para posiciones remotas o híbridas. Hablemos sobre cómo puedo aportar valor
                            a tu equipo de QA.</p>

                        <div class="contact-item">
                            <div class="icon-box">
                                <i class="fas fa-envelope"></i>
                            </div>
                            <div class="info-content">
                                <span>Email</span>
                                <a href="mailto:mvelez2793@gmail.com">mvelez2793@gmail.com</a>
                            </div>
                        </div>

                        <div class="contact-item">
                            <div class="icon-box">
                                <i class="fas fa-map-marker-alt"></i>
                            </div>
                            <div class="info-content">
                                <span>Ubicación</span>
                                <p>Remote / LatAm</p>
                            </div>
                        </div>

                        <div class="social-links-big">
                            <a href="https://linkedin.com/in/maria-auxiliadora-velez-mendoza" target="_blank"
                                class="social-btn linkedin">
                                <i class="fab fa-linkedin-in"></i> LinkedIn
                            </a>
                            <a href="https://github.com/mvelez2793" target="_blank" class="social-btn github">
                                <i class="fab fa-github"></i> GitHub
                            </a>
                        </div>
                    </div>

                    <form class="contact-form" action="https://formspree.io/f/mkovbqgl" method="POST">
                        <div class="form-group">
                            <label for="name">Nombre Completo</label>
                            <input type="text" id="name" name="name" placeholder="Ej. Juan Pérez" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Correo Electrónico</label>
                            <input type="email" id="email" name="email" placeholder="ejemplo@correo.com" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Mensaje</label>
                            <textarea id="message" name="message" rows="5" placeholder="¿En qué puedo ayudarte?" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary full-width">Enviar Mensaje</button>
                    </form>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-brand">
                    <span>MAVM<span>.QA</span></span>
                </div>
                <div class="footer-nav">
                    <a href="#home">Inicio</a>
                    <a href="#about">Perfil</a>
                    <a href="#projects">Proyectos</a>
                </div>
                <p class="copyright">&copy; <span id="current-year"></span> María Auxiliadora Vélez Mendoza. Todos los
                    derechos reservados.</p>
            </div>
        </div>
    </footer>

    <!-- Custom JS -->
    <script src="script.js"></script>
</body>

</html>
