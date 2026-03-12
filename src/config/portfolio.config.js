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
  name: 'Brandon Hale',

  /** Your professional title — shown below your name */
  title: 'Software Engineer',

  /** A short tagline — the hero subtitle */
  tagline: 'Building full-stack applications, AI-driven solutions, and scalable enterprise systems from Perth, Australia.',

  /** The label for the primary CTA button in the hero */
  heroCtaPrimary: 'View My Work',

  /** The label for the secondary CTA button in the hero */
  heroCtaSecondary: 'Contact Me',

  /**
   * About section — a paragraph or two about yourself.
   * Supports multiple lines as a single string.
   */
  bio: `I'm a Software Engineer specialising in full-stack development, AI-driven solutions, and legacy system modernisation. I've delivered 5+ enterprise applications leveraging .NET, React, and Azure AI - with measurable performance gains across the board.\n\nI hold a Bachelor of Computing in Software Engineering from Curtin University, with concentrations in Distributed Systems, Cloud Computing, and Artificial Intelligence. I'm passionate about scalable architecture, database optimisation, and CI/CD automation - and I'm always looking for the next challenge to solve with clean, maintainable code.`,

  /**
   * Skills — displayed as tag pills in the About section.
   * List your core technologies and tools.
   */
  skills: [
    'C#',
    '.NET',
    'React',
    'TypeScript',
    'JavaScript',
    'SQL',
    'Python',
    'Azure',
    'AWS',
    'REST APIs',
    'OAuth 2.0',
    'CI/CD',
    'Git',
    'AI & LLM Integration (OpenAI, Claude)',
    'Agentic Systems',
    'Node.js',
    'HTML/CSS',
    'Power BI',
    'Agile/Scrum'
  ],

  /**
   * Experience — your work history, displayed as a vertical timeline.
   * Listed in reverse chronological order (most recent first).
   */
  experience: [
    {
      /** Your job title */
      role: 'Associate Software Engineer',
      /** Company name */
      company: 'RAC WA',
      /** Employment dates */
      dates: 'Apr 2026 – Present',
      /** Key accomplishments as bullet points */
      bullets: [
        'Starting next week.'
      ],
    },
    {
      role: 'Full Stack Software Engineer',
      company: 'Australian Institute of Management',
      dates: 'Jul 2024 – Apr 2026',
      bullets: [
        'Leveraged Azure AI Search and Azure OpenAI to implement RAG for intelligent document processing, enabling personalised customer feedback and actionable advice.',
        'Architected and delivered 5+ mission-critical enterprise applications using C# .NET Core, TypeScript, and React, achieving 99.9% uptime and 40% reduction in system latency.',
        'Designed and implemented secure RESTful APIs serving 10,000+ daily requests with seamless third-party integrations.',
        'Built automated CI/CD pipelines using Azure DevOps, reducing deployment time by 80% and preventing recurring production errors.',
        'Optimised database performance through advanced SQL Server indexing and schema redesign, improving query speed by 45%.',
      ],
    },
    {
      role: 'Student Software Engineer',
      company: 'Thales',
      dates: 'Feb 2024 – Nov 2024',
      bullets: [
        'Developed an AI-driven drone tracking system with machine learning algorithms to predict real-time locations from visual data.',
        'Delivered production-ready modules in Java and Python through full SDLC participation in an Agile environment.',
        'Collaborated with senior engineers on complex algorithm design and system integration challenges.',
      ],
    },
    {
      role: 'Undergraduate Software Engineer',
      company: 'Intellect Systems',
      dates: 'Oct 2023 – Jul 2024',
      bullets: [
        'Facilitated technical workshops across 5+ departments, implementing automation solutions that reduced manual workflows by 30%.',
        'Developed business intelligence tools using Power BI and .NET, enhancing data-driven decision-making capabilities.',
        'Partnered with C-level executives to align development initiatives with strategic objectives and long-term technical roadmaps.',
        'Automated critical business processes, developing email dispatch systems that reduced human error by 70% and saved 10+ hours weekly.',
        'Built internal task tracking system from concept to deployment, achieving company-wide adoption.',
      ],
    },
    {
      role: 'Committee Member',
      company: 'ComSSA - Curtin Computer Science Students Association',
      dates: 'Jan 2024 – Jul 2024',
      bullets: [
        'Spearheaded technical initiatives for community platform development, enhancing member engagement through innovative solutions.',
        'Collaborated with event management teams to execute seamless technical events and educational workshops.',
      ],
    },
    {
      role: 'Head Coach - Under 12s Basketball',
      company: 'Volunteer',
      dates: 'Apr 2020 – Oct 2022',
      bullets: [
        'Designed and delivered structured training programs for youth athletes, emphasising skill development, teamwork, and leadership.',
        'Mentored 25+ athletes, instilling discipline, sportsmanship, and strong team culture.',
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
      title: 'Oscar',
      description:
        'End-to-end enterprise platform for AIM WA — course scheduling, staff assignments, materials management, and automated stakeholder communications.',
      longDescription:
        'Engineered a scalable .NET backend with ASP.NET Core, integrating multiple SQL Server databases and Microsoft Graph API for authentication and automated communications. Features role-based security, automated document generation, and real-time visibility for operations and finance teams.',
      featured: true,
      category: 'work',
      tags: ['C#', '.NET 8', 'SQL Server', 'React', 'TypeScript', 'Microsoft Graph API'],
      year: 2025,
      github: 'https://github.com/Brandon-Hale',
    },
    {
      title: 'AI Document Processing (RAG)',
      description:
        'Intelligent document processing system using Azure AI Search and Azure OpenAI to deliver personalised customer feedback and actionable insights.',
      longDescription:
        'Built a Retrieval-Augmented Generation pipeline that processes enterprise documents, indexes them with Azure AI Search, and generates context-aware responses via Azure OpenAI for personalised customer advice.',
      featured: true,
      category: 'work',
      tags: ['Azure AI Search', 'Azure OpenAI', 'C#', '.NET Core', 'RAG', 'TypeScript'],
      year: 2024,
      github: 'https://github.com/Brandon-Hale',
    },
    {
      title: 'AI Drone Tracking System',
      description:
        'Machine learning-powered drone tracking system that predicts real-time locations from visual data for defence applications at Thales.',
      longDescription:
        'Developed computer vision algorithms using Python and Java to process visual feeds and predict drone trajectories in real time. Built within an Agile development environment with full SDLC participation.',
      featured: true,
      category: 'work',
      tags: ['Python', 'Java', 'Machine Learning', 'Computer Vision', 'AI'],
      year: 2024,
      github: 'https://github.com/Brandon-Hale',
    },
    {
      title: 'Power BI Manufacturing Dashboard',
      description:
        'Automated analytics dashboard integrating data from multiple sources, used by 20+ staff members and contributing to 15% improvement in safety compliance.',
      longDescription:
        'Automated data pipeline integration from Replicon, Excel, and APIs using Power BI. Collaborated with executive leadership to align KPIs with strategic business objectives.',
      featured: false,
      category: 'work',
      tags: ['Power BI', 'Data Analytics', '.NET', 'Excel', 'SQL'],
      year: 2024,
      github: 'https://github.com/Brandon-Hale',
    },
    {
      title: 'Enterprise CI/CD Pipeline',
      description:
        'Automated deployment infrastructure using Azure DevOps that reduced deployment time by 80% and eliminated recurring production errors.',
      longDescription:
        'Designed and implemented continuous integration and deployment pipelines for multiple enterprise applications, including automated testing, staging environments, and production rollout strategies.',
      featured: false,
      category: 'work',
      tags: ['Azure DevOps', 'CI/CD', '.NET Core', 'Docker', 'YAML'],
      year: 2024,
      github: 'https://github.com/Brandon-Hale',
    },
    {
      title: 'Internal Task Tracker',
      description:
        'Full-lifecycle task tracking system built from concept to deployment at Intellect Systems, achieving company-wide adoption across all departments.',
      longDescription:
        'Designed and built a custom task management tool that streamlined project tracking and team coordination. Adopted company-wide as the primary workflow management solution.',
      featured: false,
      category: 'work',
      tags: ['.NET', 'C#', 'SQL Server', 'HTML/CSS', 'JavaScript'],
      year: 2023,
      github: 'https://github.com/Brandon-Hale',
    },
    {
      title: 'Email Automation System',
      description:
        'Automated email dispatch system that reduced human error by 70% and saved 10+ hours of manual work weekly at Intellect Systems.',
      longDescription:
        'Built an automated business process solution handling templated email dispatch, scheduling, and tracking. Eliminated manual workflows and significantly reduced error rates.',
      featured: false,
      category: 'work',
      tags: ['C#', '.NET', 'SMTP', 'SQL Server', 'Automation'],
      year: 2023,
      github: 'https://github.com/Brandon-Hale',
    },
    {
      title: 'Modern Dev Portfolio',
      description:
        'Open-source portfolio template built with React, Vite, Tailwind CSS, and Framer Motion. Designed as a fork-and-go template for developers.',
      longDescription:
        'A production-ready portfolio template featuring smooth scroll, dot-grid backgrounds, magnetic card tilt effects, and a dedicated filterable projects page. Fully configurable via a single config file.',
      featured: false,
      category: 'open-source',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      year: 2025,
      github: 'https://github.com/Brandon-Hale/modern-dev-portfolio-template',
    },
    {
      title: 'Database Optimisation Suite',
      description:
        'Advanced SQL Server indexing and schema redesign project that improved query speed by 45% and reduced report generation from minutes to seconds.',
      longDescription:
        'Comprehensive database performance overhaul including index analysis, query plan optimisation, schema normalisation, and stored procedure refactoring for enterprise workloads.',
      featured: false,
      category: 'work',
      tags: ['SQL Server', 'Database Design', 'Performance', 'T-SQL'],
      year: 2024,
      github: 'https://github.com/Brandon-Hale',
    },
    {
      title: 'REST API Platform',
      description:
        'Secure RESTful API platform serving 10,000+ daily requests with OAuth 2.0 authentication and seamless third-party integrations.',
      longDescription:
        'Designed and implemented a scalable API layer with comprehensive authentication, rate limiting, and integration capabilities for enterprise systems.',
      featured: false,
      category: 'work',
      tags: ['C#', '.NET Core', 'REST API', 'OAuth 2.0', 'Entity Framework'],
      year: 2024,
      github: 'https://github.com/Brandon-Hale',
    },
    {
      title: 'Workflow Automation Tools',
      description:
        'Suite of automation solutions deployed across 5+ departments at Intellect Systems, reducing manual workflows by 30% company-wide.',
      longDescription:
        'Developed and facilitated technical workshops delivering automation tools for business processes. Solutions adopted across multiple departments to streamline operations.',
      featured: false,
      category: 'work',
      tags: ['.NET', 'Power BI', 'Automation', 'Python', 'SQL'],
      year: 2024,
      github: 'https://github.com/Brandon-Hale',
    },
    {
      title: 'ComSSA Community Platform',
      description:
        'Technical initiatives for the Curtin Computer Science Students Association, enhancing member engagement through innovative community solutions.',
      longDescription:
        'Contributed to platform development and event management for the student association, executing technical events and educational workshops for the computing community.',
      featured: false,
      category: 'personal',
      tags: ['JavaScript', 'React', 'Community', 'Event Management'],
      year: 2024,
      github: 'https://github.com/Brandon-Hale',
    },
  ],

  /** Subtitle shown on the /projects page below the heading */
  projectsPageSubtitle:
    'A collection of projects I\'ve built - from enterprise applications to personal projects.',

  /**
   * Social links — displayed in the contact section and footer.
   * Set a value to null or remove it to hide that link.
   */
  social: {
    /** Your email address */
    email: 'b_halebiz@outlook.com',
    /** GitHub profile URL */
    github: 'https://github.com/Brandon-Hale',
    /** LinkedIn profile URL */
    linkedin: 'https://linkedin.com/in/brandon-hale-',
    /** Twitter / X profile URL */
    twitter: 'https://x.com/Brandon__Hale',
  },
}

export default portfolio
