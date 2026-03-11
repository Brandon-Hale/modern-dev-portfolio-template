/**
 * Portfolio Configuration
 *
 * This is the ONLY file you need to edit to personalize your portfolio.
 * Every string, link, and piece of content is defined here.
 *
 * After forking, update each section below with your own information,
 * then run `npm run dev` to preview your changes.
 */

const portfolio = {
  /** Your full name — displayed in the hero and navbar */
  name: 'Alex Chen',

  /** Your professional title — shown below your name */
  title: 'Full-Stack Developer',

  /** A short tagline — the hero subtitle */
  tagline: 'I build polished web experiences with modern tools and clean code.',

  /** The label for the primary CTA button in the hero */
  heroCtaPrimary: 'View My Work',

  /** The label for the secondary CTA button in the hero */
  heroCtaSecondary: 'Contact Me',

  /**
   * About section — a paragraph or two about yourself.
   * Supports multiple lines as a single string.
   */
  bio: `I'm a full-stack developer with 6+ years of experience building web applications that people actually enjoy using. I specialize in React ecosystems, Node.js APIs, and cloud infrastructure — but I care most about writing code that's maintainable, accessible, and fast.\n\nWhen I'm not shipping features, you'll find me contributing to open-source projects, writing technical blog posts, or experimenting with new frameworks. I believe great software is built at the intersection of solid engineering and thoughtful design.`,

  /**
   * Skills — displayed as tag pills in the About section.
   * List your core technologies and tools.
   */
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Node.js',
    'Express',
    'PostgreSQL',
    'MongoDB',
    'Redis',
    'GraphQL',
    'Docker',
    'AWS',
    'Tailwind CSS',
    'Figma',
    'Git',
    'CI/CD',
  ],

  /**
   * Experience — your work history, displayed as a vertical timeline.
   * Listed in reverse chronological order (most recent first).
   */
  experience: [
    {
      /** Your job title */
      role: 'Senior Frontend Engineer',
      /** Company name */
      company: 'Streamline Labs',
      /** Employment dates */
      dates: 'Jan 2023 – Present',
      /** Key accomplishments as bullet points */
      bullets: [
        'Led migration of legacy Angular app to React + TypeScript, reducing bundle size by 42%.',
        'Architected a component library used across 4 product teams, improving UI consistency.',
        'Implemented real-time collaboration features using WebSockets and CRDTs.',
        'Mentored 3 junior developers through structured code review and pair programming sessions.',
      ],
    },
    {
      role: 'Full-Stack Developer',
      company: 'Vertex Digital',
      dates: 'Mar 2020 – Dec 2022',
      bullets: [
        'Built and maintained a multi-tenant SaaS platform serving 15,000+ active users.',
        'Designed RESTful APIs with Node.js and Express, achieving 99.9% uptime.',
        'Optimized PostgreSQL queries reducing average response time from 800ms to 120ms.',
        'Integrated Stripe billing, handling $2M+ in annual recurring revenue.',
      ],
    },
    {
      role: 'Junior Developer',
      company: 'BrightPath Agency',
      dates: 'Jun 2018 – Feb 2020',
      bullets: [
        'Delivered 20+ client websites using React, Gatsby, and WordPress.',
        'Introduced automated testing with Jest, increasing code coverage from 15% to 78%.',
        'Collaborated with designers to implement pixel-perfect, responsive UIs.',
      ],
    },
  ],

  /**
   * Projects — displayed on both the home page (featured only) and /projects page.
   *
   * Each project requires:
   * - title: Project name
   * - description: Short description (2-3 sentences for card display)
   * - longDescription: Optional longer description for a future detail view
   * - featured: If true, shown on the home page and highlighted on /projects
   * - category: One of "work" | "personal" | "open-source"
   * - tags: Array of technology tags
   * - year: Year built or started
   * - github: GitHub repository URL
   * - demo: Optional live demo URL
   */
  projects: [
    {
      title: 'CloudSync Dashboard',
      description:
        'Real-time infrastructure monitoring dashboard with live metrics, alerting, and team collaboration features built for DevOps teams.',
      longDescription:
        'A comprehensive monitoring solution that aggregates data from AWS, GCP, and Azure into a unified dashboard with customizable widgets and real-time alerting.',
      featured: true,
      category: 'work',
      tags: ['React', 'TypeScript', 'D3.js', 'WebSocket', 'Node.js'],
      year: 2024,
      github: 'https://github.com/alexchen/cloudsync-dashboard',
      demo: 'https://cloudsync-demo.vercel.app',
    },
    {
      title: 'Nexus UI',
      description:
        'An open-source React component library with 40+ accessible, themeable components. Used by 200+ developers worldwide.',
      longDescription:
        'Built from the ground up with accessibility and customization in mind. Every component passes WCAG 2.1 AA standards and supports dark mode out of the box.',
      featured: true,
      category: 'open-source',
      tags: ['React', 'TypeScript', 'Storybook', 'CSS Modules', 'Jest'],
      year: 2024,
      github: 'https://github.com/alexchen/nexus-ui',
      demo: 'https://nexus-ui.dev',
    },
    {
      title: 'FinTrack',
      description:
        'Personal finance tracker with bank sync, budgeting tools, and spending analytics. Built as a privacy-first alternative to Mint.',
      longDescription:
        'Uses Plaid API for bank connections, with all data encrypted at rest. Features include custom budget categories, recurring transaction detection, and exportable reports.',
      featured: true,
      category: 'personal',
      tags: ['Next.js', 'PostgreSQL', 'Plaid API', 'Chart.js', 'Tailwind CSS'],
      year: 2023,
      github: 'https://github.com/alexchen/fintrack',
      demo: 'https://fintrack-app.vercel.app',
    },
    {
      title: 'DevBlog Engine',
      description:
        'A Markdown-powered static blog engine with syntax highlighting, RSS feed generation, and automatic OG image creation.',
      longDescription:
        'Generates a fully static blog from Markdown files with frontmatter. Includes built-in search, tag filtering, and reading time estimation.',
      featured: false,
      category: 'open-source',
      tags: ['Next.js', 'MDX', 'Tailwind CSS', 'Vercel'],
      year: 2023,
      github: 'https://github.com/alexchen/devblog-engine',
    },
    {
      title: 'TaskFlow',
      description:
        'Kanban-style project management app with drag-and-drop, real-time sync, and team workspaces. Built for small agile teams.',
      longDescription:
        'Features include customizable board columns, swimlanes, file attachments, and activity feeds. Supports real-time collaboration via WebSocket connections.',
      featured: false,
      category: 'personal',
      tags: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'DnD Kit'],
      year: 2023,
      github: 'https://github.com/alexchen/taskflow',
      demo: 'https://taskflow-demo.vercel.app',
    },
    {
      title: 'API Gateway Lite',
      description:
        'Lightweight API gateway with rate limiting, request validation, and automatic documentation generation from OpenAPI specs.',
      longDescription:
        'A zero-config API gateway designed for microservices architectures. Supports JWT auth, request/response transformation, and built-in health checks.',
      featured: false,
      category: 'open-source',
      tags: ['Node.js', 'Express', 'Redis', 'Docker', 'OpenAPI'],
      year: 2022,
      github: 'https://github.com/alexchen/api-gateway-lite',
    },
    {
      title: 'E-Commerce Platform',
      description:
        'Full-featured online store with product catalog, cart management, Stripe checkout, and admin dashboard for a boutique retailer.',
      longDescription:
        'End-to-end e-commerce solution including inventory management, order tracking, email notifications, and analytics dashboard.',
      featured: false,
      category: 'work',
      tags: ['Next.js', 'Stripe', 'PostgreSQL', 'Prisma', 'Tailwind CSS'],
      year: 2022,
      github: 'https://github.com/alexchen/ecommerce-platform',
    },
    {
      title: 'Git Visualizer',
      description:
        'Interactive visualization tool that renders Git commit history as an animated graph. Helps teams understand branching strategies.',
      longDescription:
        'Parses git log output and renders an interactive DAG using D3.js. Supports filtering by author, date range, and branch.',
      featured: false,
      category: 'personal',
      tags: ['React', 'D3.js', 'Git', 'Electron'],
      year: 2022,
      github: 'https://github.com/alexchen/git-visualizer',
    },
    {
      title: 'Healthcare Portal',
      description:
        'HIPAA-compliant patient portal with appointment scheduling, secure messaging, and medical records access for a clinic network.',
      longDescription:
        'Built with strict security requirements including end-to-end encryption, audit logging, and role-based access control.',
      featured: false,
      category: 'work',
      tags: ['React', 'Node.js', 'PostgreSQL', 'AWS', 'HIPAA'],
      year: 2021,
      github: 'https://github.com/alexchen/healthcare-portal',
    },
    {
      title: 'CLI Task Runner',
      description:
        'A developer-friendly CLI tool for defining and running project tasks with dependency resolution and parallel execution.',
      longDescription:
        'Reads task definitions from a YAML config file and builds a DAG for dependency resolution. Supports watch mode and incremental builds.',
      featured: false,
      category: 'open-source',
      tags: ['Node.js', 'TypeScript', 'CLI', 'YAML'],
      year: 2021,
      github: 'https://github.com/alexchen/cli-task-runner',
    },
    {
      title: 'Weather Dashboard',
      description:
        'Beautiful weather app with 7-day forecasts, interactive radar maps, and severe weather alerts. Supports location search worldwide.',
      longDescription:
        'Uses OpenWeatherMap API with client-side caching for performance. Features include hourly breakdowns, air quality index, and sunrise/sunset times.',
      featured: false,
      category: 'personal',
      tags: ['React', 'OpenWeather API', 'Mapbox', 'CSS Modules'],
      year: 2020,
      github: 'https://github.com/alexchen/weather-dashboard',
      demo: 'https://weather.alexchen.dev',
    },
    {
      title: 'Form Builder',
      description:
        'Drag-and-drop form builder with conditional logic, validation rules, and submission analytics. White-labeled for agency clients.',
      longDescription:
        'Supports 15+ field types, multi-step forms, file uploads, and webhook integrations. Includes an embeddable widget for third-party sites.',
      featured: false,
      category: 'work',
      tags: ['React', 'Node.js', 'MongoDB', 'DnD Kit', 'AWS S3'],
      year: 2020,
      github: 'https://github.com/alexchen/form-builder',
    },
  ],

  /** Subtitle shown on the /projects page below the heading */
  projectsPageSubtitle:
    'A collection of projects I\'ve built — from production apps to weekend experiments.',

  /**
   * Social links — displayed in the contact section and footer.
   * Set a value to null or remove it to hide that link.
   */
  social: {
    /** Your email address */
    email: 'hello@alexchen.dev',
    /** GitHub profile URL */
    github: 'https://github.com/alexchen',
    /** LinkedIn profile URL */
    linkedin: 'https://linkedin.com/in/alexchen',
    /** Twitter / X profile URL */
    twitter: 'https://x.com/alexchendev',
  },
}

export default portfolio
