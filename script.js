/* ============================================
   Rithwik Reddy — Portfolio
   This page is 100% JavaScript-rendered.
   All content comes from data.js (PORTFOLIO).
   ============================================ */

(function () {
    'use strict';

    /* ---------- Tiny DOM helpers ---------- */
    const $ = (sel, root) => (root || document).querySelector(sel);
    const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

    /* ---------- Inline SVG icon library ---------- */
    const ICONS = {
        github: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.28-.01-1.02-.02-2-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.68-1.28-1.68-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.18-3.09-.12-.29-.51-1.46.11-3.05 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.19-1.49 3.15-1.18 3.15-1.18.62 1.59.23 2.76.11 3.05.73.81 1.18 1.83 1.18 3.09 0 4.41-2.69 5.38-5.25 5.67.41.35.77 1.05.77 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.67.8.56A10.52 10.52 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z"/></svg>',
        linkedin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.36V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/></svg>',
        mail: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>',
        pin: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg>',
        arrow: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"/></svg>',
        send: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2.01 21 23 12 2.01 3 2 10l15 2-15 2z"/></svg>',
        external: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7zm-9 3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7h-2v7H5V8h7V6H5z"/></svg>',
        app: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z"/></svg>',
        db: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M2 20h20v-4H2v4zm2-3h2v2H4v-2zM2 4v4h20V4H2zm4 3H4V5h2v2zm-4 7h20v-4H2v4zm2-3h2v2H4v-2z"/></svg>',
        chip: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M15 9H9v6h6V9zm-2 4h-2v-2h2v2zm8-2V9h-2V7c0-1.1-.9-2-2-2h-2V3h-2v2h-2V3H9v2H7c-1.1 0-2 .9-2 2v2H3v2h2v2H3v2h2v2c0 1.1.9 2 2 2h2v2h2v-2h2v2h2v-2h2c1.1 0 2-.9 2-2v-2h2v-2h-2v-2h2zm-4 6H7V7h10v10z"/></svg>',
        sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32 1.41 1.41M2 12h2m16 0h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41"/></svg>',
        moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
        copy: '<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M16 1H4a2 2 0 0 0-2 2v14h2V3h12V1zm3 4H8a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2zm0 16H8V7h11v14z"/></svg>'
    };

    /* ---------- Section header builder ---------- */
    function sectionHead(tag, title, sub) {
        return `
            <div class="section-head reveal">
                <p class="section-tag">${tag}</p>
                <h2 class="section-title">${title}</h2>
                ${sub ? `<p class="section-sub">${sub}</p>` : ''}
            </div>`;
    }

    /* ---------- Social buttons builder ---------- */
    function socialButtons(socials) {
        return socials.map(s => {
            const placeholder = s.placeholder
                ? ` class="social-btn placeholder-link" data-toast="${s.toast}"`
                : ' class="social-btn"';
            return `<a href="${s.url}"${placeholder} aria-label="${s.name}">${ICONS[s.key]}</a>`;
        }).join('');
    }

    /* ============================================
       RENDER: NAVBAR
       ============================================ */
    function renderNav(app) {
        const links = PORTFOLIO.nav.map((item, i) => `
            <li><a href="#${item.id}" class="nav-link${i === 0 ? ' active' : ''}" data-nav="${item.id}">${item.label}</a></li>`).join('');

        app.insertAdjacentHTML('afterbegin', `
            <nav class="navbar" id="navbar">
                <div class="container nav-inner">
                    <a href="#home" class="logo">${PORTFOLIO.personal.firstName}<span>.</span></a>
                    <ul class="nav-links" id="navLinks">
                        ${links}
                    </ul>
                    <div class="nav-actions">
                        <button class="theme-toggle" id="themeToggle" aria-label="Toggle theme"></button>
                        <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
                            <span></span><span></span><span></span>
                        </button>
                    </div>
                </div>
            </nav>`);
    }

    /* ============================================
       RENDER: HERO
       ============================================ */
    function renderHero(app) {
        app.insertAdjacentHTML('beforeend', `
            <header id="home" class="hero">
                <div class="hero-glow" aria-hidden="true"></div>
                <div class="hero-stars" aria-hidden="true">
                    <div class="layer stars-sm"></div>
                    <div class="layer stars-md"></div>
                    <div class="layer stars-lg"></div>
                    <div class="shooting-star"></div>
                </div>
                <div class="container hero-inner">
                    <div class="hero-text">
                        <p class="hero-greeting reveal">Hello, I'm</p>
                        <h1 class="hero-name reveal">${PORTFOLIO.personal.name}</h1>
                        <div class="hero-role reveal">
                            <span class="typing" id="typing"></span><span class="cursor" aria-hidden="true">|</span>
                        </div>
                        <p class="hero-desc reveal">${PORTFOLIO.personal.tagline}</p>
                        <div class="hero-actions reveal">
                            <a href="#projects" class="btn btn-primary">View My Work ${ICONS.arrow}</a>
                            <a href="#contact" class="btn btn-ghost">Get In Touch</a>
                        </div>
                        <div class="hero-meta reveal">
                            <div class="clock" id="clock" title="Local time">
                                <span class="clock-time" id="clockTime">--:--:--</span>
                                <span class="clock-info"><span id="clockZone">${PORTFOLIO.personal.timezoneLabel}</span> &middot; <span id="clockDate">&mdash;</span></span>
                            </div>
                            <div class="hero-socials">
                                ${socialButtons(PORTFOLIO.socials)}
                            </div>
                        </div>
                    </div>
                </div>
                <a href="#about" class="scroll-down" aria-label="Scroll to about section"><span></span></a>
            </header>`);
    }

    /* ============================================
       RENDER: ABOUT
       ============================================ */
    function renderAbout(app) {
        const { about, stats } = PORTFOLIO;
        const facts = about.facts.map(f => `<li><span>${f.label}</span>${f.value}</li>`).join('');
        const statCards = stats.map(s => `
            <div class="stat">
                <span class="stat-num" data-count="${s.value}" data-suffix="${s.suffix}">0</span>
                <span class="stat-label">${s.label}</span>
            </div>`).join('');

        app.insertAdjacentHTML('beforeend', `
            <section id="about" class="section">
                <div class="container">
                    ${sectionHead(about.tag, about.title, about.sub)}
                    <div class="about-grid">
                        <div class="about-text reveal">
                            ${about.paragraphs.map(p => `<p>${p}</p>`).join('')}
                        </div>
                        <div class="about-card reveal">
                            <h3>Quick Facts</h3>
                            <ul class="facts">${facts}</ul>
                        </div>
                    </div>
                    <div class="stats reveal">${statCards}</div>
                </div>
            </section>`);
    }

    /* ============================================
       RENDER: SKILLS
       ============================================ */
    function renderSkills(app) {
        const groups = PORTFOLIO.skills.map(g => `
            <div class="skill-group reveal">
                <h3>${g.group}</h3>
                ${g.items.map(item => `
                    <div class="skill">
                        <div class="skill-top"><span>${item.name}</span><span>${item.level}%</span></div>
                        <div class="skill-bar"><span data-width="${item.level}"></span></div>
                    </div>`).join('')}
            </div>`).join('');

        app.insertAdjacentHTML('beforeend', `
            <section id="skills" class="section">
                <div class="container">
                    ${sectionHead('02 · Skills', 'Tools &amp; technologies I <span>work with</span>', 'A blend of software engineering and hardware design expertise.')}
                    <div class="skills-grid">${groups}</div>
                </div>
            </section>`);
    }

    /* ============================================
       RENDER: EXPERIENCE
       ============================================ */
    function renderExperience(app) {
        const items = PORTFOLIO.experience.map(exp => `
            <div class="timeline-item reveal">
                <div class="timeline-dot" aria-hidden="true"></div>
                <div class="timeline-card${exp.badge ? ' current' : ''}">
                    <div class="timeline-head">
                        <div>
                            <h3>${exp.role}</h3>
                            <p class="timeline-org">${exp.org}</p>
                        </div>
                        ${exp.badge ? `<span class="timeline-badge">${exp.badge}</span>` : ''}
                    </div>
                    <span class="timeline-date">${exp.period}</span>
                    <ul class="timeline-list">
                        ${exp.points.map(p => `<li>${p}</li>`).join('')}
                    </ul>
                </div>
            </div>`).join('');

        app.insertAdjacentHTML('beforeend', `
            <section id="experience" class="section">
                <div class="container">
                    ${sectionHead('03 · Experience', "Where I've <span>worked</span>", 'My professional journey so far.')}
                    <div class="timeline">${items}</div>
                </div>
            </section>`);
    }

    /* ============================================
       RENDER: PROJECTS
       ============================================ */
    function renderProjects(app) {
        const filters = [
            { key: 'all', label: 'All' },
            { key: 'web', label: 'Web Apps' },
            { key: 'backend', label: 'Backend' },
            { key: 'vlsi', label: 'VLSI' }
        ];
        const filterBtns = filters.map((f, i) =>
            `<button class="filter-btn${i === 0 ? ' active' : ''}" data-filter="${f.key}">${f.label}</button>`).join('');

        const cards = PORTFOLIO.projects.map(p => `
            <article class="project-card reveal" data-category="${p.category}">
                <div class="project-top">
                    <span class="project-icon">${ICONS[p.icon]}</span>
                    <span class="project-links">
                        <a href="#" class="placeholder-link" aria-label="View code" data-toast="Project demo coming soon!">${ICONS.external}</a>
                    </span>
                </div>
                <h3>${p.title}</h3>
                <p>${p.description}</p>
                <div class="project-tags">${p.tags.map(t => `<span>${t}</span>`).join('')}</div>
            </article>`).join('');

        app.insertAdjacentHTML('beforeend', `
            <section id="projects" class="section">
                <div class="container">
                    ${sectionHead('04 · Projects', "Things I've <span>built</span>", 'A selection of personal and professional work.')}
                    <div class="filter-bar reveal">${filterBtns}</div>
                    <div class="projects-grid">${cards}</div>
                </div>
            </section>`);
    }

    /* ============================================
       RENDER: EDUCATION
       ============================================ */
    function renderEducation(app) {
        const cards = PORTFOLIO.education.map(e => `
            <div class="edu-card reveal">
                <div class="edu-degree">${e.degree}</div>
                <p class="edu-school">${e.school}</p>
                <span class="edu-date">${e.period}</span>
                <p class="edu-score">${e.score}</p>
                <p class="edu-desc">${e.desc}</p>
            </div>`).join('');

        const chips = PORTFOLIO.coursework.map(c => `<span>${c}</span>`).join('');

        app.insertAdjacentHTML('beforeend', `
            <section id="education" class="section">
                <div class="container">
                    ${sectionHead('05 · Education', 'My academic <span>background</span>', 'Where I built my engineering foundation.')}
                    <div class="edu-grid">${cards}</div>
                    <div class="coursework reveal">
                        <h3>Relevant Coursework</h3>
                        <div class="course-tags">${chips}</div>
                    </div>
                </div>
            </section>`);
    }

    /* ============================================
       RENDER: CONTACT
       ============================================ */
    function renderContact(app) {
        const { contact } = PORTFOLIO;
        app.insertAdjacentHTML('beforeend', `
            <section id="contact" class="section contact-section">
                <div class="container">
                    ${sectionHead(contact.tag, contact.title, contact.sub)}
                    <div class="contact-grid">
                        <div class="contact-info reveal">
                            <h3>Get in touch</h3>
                            <p>${contact.blurb}</p>
                            <ul class="contact-list">
                                <li>
                                    <span class="contact-icon">${ICONS.mail}</span>
                                    <div>
                                        <strong>Email</strong>
                                        <a href="mailto:${contact.email}" class="copy-email" data-copy="${contact.email}">${contact.email}</a>
                                    </div>
                                </li>
                                <li>
                                    <span class="contact-icon">${ICONS.pin}</span>
                                    <div><strong>Location</strong><span>${contact.location}</span></div>
                                </li>
                            </ul>
                            <div class="contact-socials">
                                ${socialButtons(PORTFOLIO.socials)}
                            </div>
                        </div>
                        <form class="contact-form reveal" id="contactForm" novalidate>
                            <div class="form-row">
                                <div class="form-field">
                                    <label for="name">Name</label>
                                    <input type="text" id="name" name="name" placeholder="Your name" required>
                                </div>
                                <div class="form-field">
                                    <label for="email">Email</label>
                                    <input type="email" id="email" name="email" placeholder="you@example.com" required>
                                </div>
                            </div>
                            <div class="form-field">
                                <label for="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="What's this about?" required>
                            </div>
                            <div class="form-field">
                                <label for="message">Message</label>
                                <textarea id="message" name="message" rows="5" placeholder="Tell me about your project or opportunity..." required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-block">Send Message ${ICONS.send}</button>
                        </form>
                    </div>
                </div>
            </section>`);
    }

    /* ============================================
       RENDER: FOOTER
       ============================================ */
    function renderFooter(app) {
        const links = PORTFOLIO.nav.slice(0, 5).map(item =>
            `<li><a href="#${item.id}">${item.label}</a></li>`).join('');

        app.insertAdjacentHTML('beforeend', `
            <footer class="footer">
                <div class="container footer-inner">
                    <a href="#home" class="logo">${PORTFOLIO.personal.firstName}<span>.</span></a>
                    <ul class="footer-links">${links}</ul>
                    <div class="footer-socials">${socialButtons(PORTFOLIO.socials)}</div>
                </div>
                <div class="footer-bottom">
                    <p>&copy; <span id="year"></span> ${PORTFOLIO.personal.name}. Crafted with JavaScript. All rights reserved.</p>
                </div>
            </footer>`);
    }

    /* ============================================
       INTERACTIONS
       ============================================ */

    /* ---------- Typing effect ---------- */
    function initTyping() {
        const typingEl = $('#typing');
        if (!typingEl) return;
        const roles = PORTFOLIO.roles;
        let roleIndex = 0;
        let charIndex = 0;
        let deleting = false;

        function type() {
            const current = roles[roleIndex];
            if (!deleting) {
                typingEl.textContent = current.slice(0, ++charIndex);
                if (charIndex === current.length) {
                    deleting = true;
                    setTimeout(type, 1800);
                    return;
                }
                setTimeout(type, 65);
            } else {
                typingEl.textContent = current.slice(0, --charIndex);
                if (charIndex === 0) {
                    deleting = false;
                    roleIndex = (roleIndex + 1) % roles.length;
                    setTimeout(type, 350);
                    return;
                }
                setTimeout(type, 32);
            }
        }
        type();
    }

    /* ---------- Live clock (professional, no gimmicks) ---------- */
    function initClock() {
        const timeEl = $('#clockTime');
        const dateEl = $('#clockDate');
        if (!timeEl) return;
        const tz = PORTFOLIO.personal.timezone;
        const timeFmt = new Intl.DateTimeFormat('en-GB', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false, timeZone: tz });
        const dateFmt = new Intl.DateTimeFormat('en-GB', { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric', timeZone: tz });
        function tick() {
            const now = new Date();
            timeEl.textContent = timeFmt.format(now);
            if (dateEl) dateEl.textContent = dateFmt.format(now);
        }
        tick();
        setInterval(tick, 1000);
    }

    /* ---------- Theme toggle ---------- */
    function initTheme() {
        const btn = $('#themeToggle');
        if (!btn) return;
        const root = document.documentElement;
        const stored = localStorage.getItem('portfolio-theme');
        if (stored === 'light') root.setAttribute('data-theme', 'light');

        function renderIcon() {
            btn.innerHTML = root.getAttribute('data-theme') === 'light' ? ICONS.moon : ICONS.sun;
        }
        renderIcon();

        btn.addEventListener('click', () => {
            const next = root.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
            root.setAttribute('data-theme', next);
            localStorage.setItem('portfolio-theme', next);
            renderIcon();
        });
    }

    /* ---------- Scroll: progress, navbar, back-to-top ---------- */
    function initScroll() {
        const progressBar = $('#scrollProgress');
        const navbar = $('#navbar');
        const backToTop = $('#backToTop');

        function onScroll() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            if (progressBar) progressBar.style.width = progress + '%';
            if (navbar) navbar.classList.toggle('scrolled', scrollTop > 40);
            if (backToTop) backToTop.classList.toggle('show', scrollTop > 600);
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        if (backToTop) {
            backToTop.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
        }
    }

    /* ---------- Mobile navigation ---------- */
    function initMobileNav() {
        const hamburger = $('#hamburger');
        const navLinks = $('#navLinks');
        if (!hamburger || !navLinks) return;

        function closeMenu() {
            navLinks.classList.remove('open');
            hamburger.classList.remove('open');
            hamburger.setAttribute('aria-expanded', 'false');
        }

        hamburger.addEventListener('click', () => {
            const isOpen = navLinks.classList.toggle('open');
            hamburger.classList.toggle('open', isOpen);
            hamburger.setAttribute('aria-expanded', String(isOpen));
        });

        navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));

        document.addEventListener('click', (e) => {
            if (navLinks.classList.contains('open') &&
                !navLinks.contains(e.target) &&
                !hamburger.contains(e.target)) {
                closeMenu();
            }
        });
    }

    /* ---------- Active nav link highlighting ---------- */
    function initActiveNav() {
        const sections = $$('section[id], header[id]');
        const navAnchors = $$('.nav-link');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                navAnchors.forEach(link => {
                    link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
                });
            });
        }, { rootMargin: '-40% 0px -55% 0px' });

        sections.forEach(section => observer.observe(section));
    }

    /* ---------- Scroll reveal ---------- */
    function initReveal() {
        const revealEls = $$('.reveal');
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

        revealEls.forEach(el => observer.observe(el));
    }

    /* ---------- Animated counters + skill bars ---------- */
    function animateCounter(el) {
        const target = parseInt(el.dataset.count || '0', 10);
        const suffix = el.dataset.suffix || '';
        const duration = 1400;
        const start = performance.now();

        function tick(now) {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            el.textContent = Math.round(target * eased) + suffix;
            if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
    }

    function initAnimatedStats() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                if (entry.target.classList.contains('stat-num')) animateCounter(entry.target);
                if (entry.target.classList.contains('skill-bar')) {
                    entry.target.querySelector('span').style.width = entry.target.querySelector('span').dataset.width + '%';
                }
                observer.unobserve(entry.target);
            });
        }, { threshold: 0.4 });

        $$('.stat-num, .skill-bar').forEach(el => observer.observe(el));
    }

    /* ---------- Project filtering ---------- */
    function initFilters() {
        const filterBtns = $$('.filter-btn');
        const projectCards = $$('.project-card');

        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                const filter = btn.dataset.filter;
                projectCards.forEach(card => {
                    const match = filter === 'all' || card.dataset.category === filter;
                    card.classList.toggle('hidden', !match);
                    if (match) {
                        card.style.animation = 'none';
                        void card.offsetWidth;
                        card.style.animation = '';
                    }
                });
            });
        });
    }

    /* ---------- Toast notifications ---------- */
    const toast = $('#toast');
    let toastTimer = null;

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    }

    function initPlaceholderLinks() {
        $$('.placeholder-link').forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                showToast(link.dataset.toast || 'Coming soon!');
            });
        });
    }

    /* ---------- Copy email to clipboard ---------- */
    function initCopyEmail() {
        $$('.copy-email').forEach(el => {
            el.addEventListener('click', async (e) => {
                e.preventDefault();
                const email = el.dataset.copy || '';
                try {
                    await navigator.clipboard.writeText(email);
                    showToast('Email copied to clipboard!');
                } catch (err) {
                    showToast('Email: ' + email);
                }
            });
        });
    }

    /* ---------- Contact form ---------- */
    function initForm() {
        const form = $('#contactForm');
        if (!form) return;

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            let valid = true;

            form.querySelectorAll('input, textarea').forEach(field => {
                const isEmpty = field.value.trim() === '';
                const isBadEmail = field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value.trim());
                field.classList.toggle('error', isEmpty || isBadEmail);
                if (isEmpty || isBadEmail) valid = false;
            });

            if (!valid) {
                showToast('Please fill in all fields correctly.');
                return;
            }

            const btn = form.querySelector('button[type="submit"]');
            const original = btn.innerHTML;
            btn.disabled = true;
            btn.innerHTML = 'Sending...';

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = original;
                form.reset();
                showToast('Thanks for reaching out! I\'ll get back to you within 24 hours.');
            }, 1200);
        });

        form.querySelectorAll('input, textarea').forEach(field => {
            field.addEventListener('input', () => field.classList.remove('error'));
        });
    }

    /* ---------- Footer year ---------- */
    function initYear() {
        const yearEl = $('#year');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    }

    /* ============================================
       BOOT — render everything, then wire it up
       ============================================ */
    function boot() {
        const app = $('#app');
        if (!app) return;

        // 1. Render all sections from data.js
        renderNav(app);
        renderHero(app);
        renderAbout(app);
        renderSkills(app);
        renderExperience(app);
        renderProjects(app);
        renderEducation(app);
        renderContact(app);
        renderFooter(app);

        // 2. Attach interactions
        initTyping();
        initClock();
        initTheme();
        initScroll();
        initMobileNav();
        initActiveNav();
        initReveal();
        initAnimatedStats();
        initFilters();
        initPlaceholderLinks();
        initCopyEmail();
        initForm();
        initYear();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', boot);
    } else {
        boot();
    }
})();
