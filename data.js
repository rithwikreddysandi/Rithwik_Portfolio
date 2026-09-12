/* ============================================
   Portfolio Content — all data lives here,
   script.js renders it into the page.
   Edit this file to update your portfolio.
   ============================================ */

const PORTFOLIO = {
    /* ---------- Personal ---------- */
    personal: {
        name: 'Rithwik Reddy Sandi',
        firstName: 'Rithwik',
        role: 'Associate Software Engineer',
        company: 'KFintech',
        tagline: 'Associate Software Engineer at <strong>KFintech</strong> with a strong foundation in Electronics &amp; Communication (VLSI). I build clean, scalable web applications — bridging hardware intuition with modern software craft.',
        email: 'rithwik.reddy@example.com',
        location: 'Hyderabad, India',
        timezone: 'Asia/Kolkata',
        timezoneLabel: 'IST',
        degree: 'B.Tech — ECE (VLSI), Honors'
    },

    /* ---------- Rotating roles for the typing effect ---------- */
    roles: [
        'Associate Software Engineer',
        'Full-Stack Developer',
        'VLSI Enthusiast',
        'Problem Solver'
    ],

    /* ---------- Navigation ---------- */
    nav: [
        { id: 'home', label: 'Home' },
        { id: 'about', label: 'About' },
        { id: 'skills', label: 'Skills' },
        { id: 'experience', label: 'Experience' },
        { id: 'projects', label: 'Projects' },
        { id: 'education', label: 'Education' },
        { id: 'contact', label: 'Contact' }
    ],

    /* ---------- Social links (key = icon in script.js) ---------- */
    socials: [
        { key: 'github', name: 'GitHub', url: '#', placeholder: true, toast: 'GitHub link coming soon!' },
        { key: 'linkedin', name: 'LinkedIn', url: '#', placeholder: true, toast: 'LinkedIn link coming soon!' },
        { key: 'mail', name: 'Email', url: 'mailto:rithwik.reddy@example.com', placeholder: false }
    ],

    /* ---------- About section ---------- */
    about: {
        tag: '01 · About Me',
        title: 'Turning ideas into <span>reliable software</span>',
        sub: 'A quick look at who I am and what drives me as an engineer.',
        paragraphs: [
            "I'm an <strong>Associate Software Engineer at KFintech</strong>, building and shipping production software in the fintech space. My journey started in Electronics &amp; Communication with a specialization in <strong>VLSI (Honors)</strong>, where I learned to think in terms of circuits, timing, and precision — a mindset I now bring to every line of code I write.",
            'Today I work across the full stack: crafting responsive frontends, designing REST APIs, writing unit tests, and collaborating with cross-functional teams in agile sprints. I care deeply about clean architecture, performance, and code that other people can read and maintain.',
            "When I'm not coding, you'll find me exploring new tech, solving DSA problems, or tinkering with FPGA boards."
        ],
        facts: [
            { label: 'Role', value: 'Associate Software Engineer' },
            { label: 'Company', value: 'KFintech' },
            { label: 'Based in', value: 'Hyderabad, India' },
            { label: 'Focus', value: 'Full-Stack Web Development' },
            { label: 'Degree', value: 'B.Tech — ECE (VLSI), Honors' },
            { label: 'Status', value: 'Open to opportunities' }
        ]
    },

    /* ---------- Stats counters ---------- */
    stats: [
        { value: 1, suffix: '+', label: 'Years Experience' },
        { value: 12, suffix: '+', label: 'Projects Completed' },
        { value: 10, suffix: '+', label: 'Technologies' },
        { value: 3, suffix: '+', label: 'Certifications' }
    ],

    /* ---------- Skills (level 0–100) ---------- */
    skills: [
        {
            group: 'Frontend',
            items: [
                { name: 'HTML / CSS / JavaScript', level: 95 },
                { name: 'React.js', level: 85 },
                { name: 'Responsive Design', level: 90 }
            ]
        },
        {
            group: 'Backend',
            items: [
                { name: 'Node.js / Express', level: 85 },
                { name: 'Java / Spring Boot', level: 80 },
                { name: 'SQL & NoSQL Databases', level: 85 }
            ]
        },
        {
            group: 'Tools & Practices',
            items: [
                { name: 'Git & GitHub', level: 90 },
                { name: 'Docker & CI/CD', level: 75 },
                { name: 'Agile / Scrum', level: 85 }
            ]
        },
        {
            group: 'Hardware & VLSI',
            items: [
                { name: 'Verilog / VHDL', level: 80 },
                { name: 'FPGA Design', level: 75 },
                { name: 'Digital Circuit Design', level: 85 }
            ]
        }
    ],

    /* ---------- Experience ---------- */
    experience: [
        {
            role: 'Associate Software Engineer',
            org: 'KFintech — Hyderabad',
            period: '2026 — Present',
            badge: 'Current',
            points: [
                'Building and maintaining production software for KFintech, one of India\'s largest financial and investor-services platforms.',
                'Developing responsive frontends and RESTful APIs, with a focus on reliability, performance, and clean, maintainable code.',
                'Collaborating in cross-functional agile squads — participating in code reviews, sprint planning, and CI/CD workflows.',
                'Applying a precision-first mindset from my VLSI background to write correct, well-tested software.'
            ]
        },
        {
            role: 'VLSI Capstone Project',
            org: 'KL University — Academic',
            period: '2025 — 2026',
            badge: null,
            points: [
                'Designed and verified a 5-stage pipelined RISC-V processor core in Verilog, achieving a <strong>1.8x</strong> throughput gain over the single-cycle baseline.',
                'Developed testbenches and analyzed synthesis reports on an FPGA platform as part of the Honors specialization in VLSI.'
            ]
        }
    ],

    /* ---------- Projects (category: web | backend | vlsi) ---------- */
    projects: [
        {
            title: 'TaskFlow — Team Project Dashboard',
            description: 'Kanban-style project management with drag-and-drop boards, role-based access, real-time updates via WebSockets, and rich reporting.',
            category: 'web',
            icon: 'app',
            tags: ['React', 'Node.js', 'MongoDB', 'WebSockets']
        },
        {
            title: 'ShopSphere — E-Commerce Storefront',
            description: 'Full-featured storefront with product search, cart &amp; checkout flow, order tracking, and an admin panel for inventory management.',
            category: 'web',
            icon: 'app',
            tags: ['React', 'Express', 'PostgreSQL', 'Stripe']
        },
        {
            title: 'Payroll Manager — HR Backend API',
            description: 'REST API for payroll processing with JWT auth, role-based permissions, salary-slip generation, and scheduled report jobs.',
            category: 'backend',
            icon: 'db',
            tags: ['Java', 'Spring Boot', 'MySQL', 'JWT']
        },
        {
            title: 'RateLimiter — API Gateway Service',
            description: 'High-throughput API gateway with token-bucket rate limiting, request logging, and Redis-backed caching serving 1M+ requests/day.',
            category: 'backend',
            icon: 'db',
            tags: ['Node.js', 'Redis', 'Docker', 'Nginx']
        },
        {
            title: 'FitTrack — Health & Fitness PWA',
            description: 'Progressive web app for workout logging with offline support, goal streaks, and beautiful analytics visualizations.',
            category: 'web',
            icon: 'app',
            tags: ['React', 'PWA', 'IndexedDB', 'Charts.js']
        },
        {
            title: 'RISC-V Processor Core',
            description: '5-stage pipelined RISC-V processor with hazard handling, designed and verified in Verilog and synthesized on an FPGA.',
            category: 'vlsi',
            icon: 'chip',
            tags: ['Verilog', 'FPGA', 'RISC-V', 'Xilinx']
        }
    ],

    /* ---------- Education ---------- */
    education: [
        {
            degree: 'B.Tech — ECE with VLSI Specialization (Honors)',
            school: 'Koneru Lakshmaiah Education Foundation (KL University)',
            period: '2022 — 2026',
            score: 'First Class with <strong>Distinction</strong>',
            desc: 'Bachelor of Technology in Electronics &amp; Communication Engineering (Honors) with a specialization in VLSI. Built strong foundations in digital design, embedded systems, and programming alongside data structures, OS, and DBMS.'
        }
    ],

    /* ---------- Coursework chips ---------- */
    coursework: [
        'Data Structures & Algorithms',
        'Operating Systems',
        'Database Management Systems',
        'Computer Architecture',
        'Digital VLSI Design',
        'Verilog HDL',
        'Computer Networks',
        'Web Technologies',
        'Object-Oriented Programming',
        'Digital Signal Processing'
    ],

    /* ---------- Contact ---------- */
    contact: {
        tag: '06 · Contact',
        title: "Let's build something <span>together</span>",
        sub: 'Have a role, project, or just want to say hi? My inbox is always open.',
        blurb: "I'm always open to connecting on interesting software engineering work and collaborations. I'll get back to you within 24 hours.",
        email: 'rithwik.reddy@example.com',
        location: 'Hyderabad, India'
    }
};
