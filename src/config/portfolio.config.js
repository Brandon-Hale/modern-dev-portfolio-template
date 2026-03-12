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
  bio: `I'm a Software Engineer specialising in full-stack development, cloud-native solutions, and AI-powered applications. Experienced in C# .NET, React, TypeScript, and Azure, I have delivered 5+ enterprise platforms modernising legacy systems, optimising databases, and implementing AI-driven features with measurable business impact. Proficient in infrastructure-as-a-service (IaaS), RAG workflows, CI/CD automation, and designing clean, maintainable architectures. Passionate about solving complex challenges and leveraging emerging technologies like Claude Code to accelerate development and build scalable, high-performance software solutions.`,
  
  /**
   * Skills — displayed as tag pills in the About section.
   * List your core technologies and tools.
   */
  skills: [
    'C#',
    '.NET',
    'ASP.NET Core',
    'Entity Framework Core',
    'React',
    'TypeScript',
    'JavaScript',
    'SQL',
    'SQL Server',
    'Python',
    'Azure',
    'Azure AI Foundry',
    'AWS',
    'REST APIs',
    'OAuth 2.0',
    'CI/CD',
    'Git',
    'AI & LLM Integration (OpenAI, Claude)',
    'RAG Systems',
    'Agentic Systems',
    'Node.js',
    'Webpack',
    'HTML/CSS',
    'Power BI',
    'Agile/Scrum'
  ],

  /**
   * Education — displayed between About and Experience.
   * Each entry has a degree, institution, dates, and optional details.
   */
  education: [
    {
      degree: 'Bachelor of Science (Honours) - Computer Science',
      institution: 'Curtin University',
      url: 'https://www.curtin.edu.au',
      dates: 'Expected Graduation Jun 2027',
      details: [],
    },
    {
      degree: 'Bachelor of Computing - Software Engineering',
      institution: 'Curtin University',
      url: 'https://www.curtin.edu.au',
      dates: 'Completed Nov 2025',
      details: [],
    },
  ],

  /**
   * Certifications — displayed below education.
   * Each entry has a name, issuer, and date.
   */
  certifications: [
    { name: 'AWS Certified: Cloud Practitioner', issuer: 'Amazon Web Services', date: 'Nov 2025' },
    { name: 'Microsoft Certified: Azure Fundamentals', issuer: 'Microsoft', date: 'Oct 2025' },
    { name: 'First Aid Certificate', issuer: 'St John Ambulance', date: 'Aug 2025' },
  ],

  /**
   * Experience — your work history, displayed as a vertical timeline.
   * Listed in reverse chronological order (most recent first).
   *
   * Each entry can be a single role (role, company, dates, bullets)
   * or grouped roles for career progression (company, dates, roles[]).
   *
   * Optional fields:
   * - url: links the company name to their website
   * - roles: array of { role, dates, bullets } for showing promotions
   */
  experience: [
    {
      /** Your job title */
      role: 'Associate Software Engineer',
      /** Company name */
      company: 'RAC',
      url: 'https://rac.com.au',
      /** Employment dates */
      dates: 'Apr 2026 – Present',
      /** Key accomplishments as bullet points */
      bullets: [
        'Starting next week.'
      ],
    },
    {
      role: 'Full Stack Software Engineer',
      company: 'Australian Institute of Management WA',
      url: 'https://aimwa.com',
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
      url: 'https://www.thalesgroup.com',
      dates: 'Feb 2024 – Nov 2024',
      bullets: [
        'Developed an AI-driven drone tracking system with machine learning algorithms to predict real-time locations from visual data.',
        'Delivered production-ready modules in Java and Python through full SDLC participation in an Agile environment.',
        'Collaborated with senior engineers on complex algorithm design and system integration challenges.',
      ],
    },
    {
      company: 'Intellect Systems',
      url: 'https://www.intellectsystems.com',
      dates: 'Nov 2023 – Jul 2024',
      roles: [
        {
          role: 'Software Engineer Undergraduate',
          dates: 'Jan 2024 – Jul 2024',
          bullets: [
            'Facilitated technical workshops across 5+ departments, implementing automation solutions that reduced manual workflows by 30%.',
            'Developed business intelligence tools using Power BI and .NET, enhancing data-driven decision-making capabilities.',
            'Partnered with C-level executives to align development initiatives with strategic objectives and long-term technical roadmaps.',
            'Delivered proof-of-concept solutions adopted company-wide, bridging technical design with business priorities.',
          ],
        },
        {
          role: 'Software Engineer Intern',
          dates: 'Nov 2023 – Jan 2024',
          bullets: [
            'Automated critical business processes, developing email dispatch systems that reduced human error by 70% and saved 10+ hours weekly.',
            'Built internal task tracking system from concept to deployment, achieving company-wide adoption.',
          ],
        },
      ],
    },
    {
      role: 'Committee Member',
      company: 'ComSSA - Curtin Computer Science Students Association',
      url: 'https://comssa.org.au/',
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
      title: 'Mockingbird',
      description:
        'AI-powered website usability testing platform that simulates real users, providing video replays, heatmaps, and actionable UX recommendations.',
      longDescription:
        'Developed an AI-driven platform where users submit a URL and AI personas (Tech Novice, Average User, Power User) navigate the site. The system records videos, screenshots, and findings, analyses them with Claude API in a RAG workflow, and generates prioritized UX recommendations. Built with Next.js, TypeScript, Tailwind CSS, D3.js, Playwright, Supabase, and Prisma to enable fast, scalable testing for SMBs and enterprises.',
      featured: true,
      category: 'work',
      tags: [
        'Next.js',
        'TypeScript',
        'Tailwind CSS',
        'D3.js',
        'Playwright',
        'Supabase',
        'Prisma',
        'Claude API',
        'RAG',
        'AI',
        'UX',
        'Automation'
      ],
      year: 2025,
      demo: 'https://mockingbirdai.com.au',
    },
    {
      title: 'AI Survey Insights Platform',
      description:
        'Adaptive AI-powered survey platform that generates personalised learning recommendations using Azure OpenAI and enterprise knowledge search.',
      longDescription:
        'Designed and developed an intelligent survey system that dynamically generates follow-up questions using Azure OpenAI to refine user responses and reduce unnecessary input. Responses are analysed against AIM WA’s indexed organisational knowledge via Azure AI Search, enabling a Retrieval-Augmented Generation pipeline that produces personalised reports and course recommendations tailored to each participant.',
      featured: true,
      category: 'work',
      tags: [
        'Azure OpenAI',
        'Azure AI Search',
        'C#',
        'ASP.NET Core',
        'Entity Framework Core',
        'RAG',
        'TypeScript',
        'SQL Server'
      ],
      year: 2026
    },
    {
      title: 'Modern Dev Portfolio',
      description:
        'Open-source portfolio template built with React, Vite, Tailwind CSS, and Framer Motion. Designed as a fork-and-go template for developers.',
      longDescription:
        'A production-ready portfolio template featuring smooth scroll, dot-grid backgrounds, magnetic card tilt effects, and a dedicated filterable projects page. Fully configurable via a single config file.',
      featured: true,
      category: 'open-source',
      tags: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
      year: 2025,
      github: 'https://github.com/Brandon-Hale/modern-dev-portfolio-template',
      demo: 'https://brandonhaledev.com/',
    },
    {
      title: 'AI Drone Tracking System',
      description:
        'Machine learning-based drone tracking platform that predicts probable operator locations using crowd-reported sightings and real-time analysis.',
      longDescription:
        'Developed a defence-focused drone tracking application with an interactive GUI that allows users to select drone types and submit location sightings. These observations are processed through machine learning models to estimate probable operator locations and movement patterns. Implemented data processing and prediction logic using Python and Java, contributing across the full software development lifecycle within an Agile team environment.',
      featured: true,
      category: 'work',
      tags: ['Python', 'Java', 'Machine Learning', 'Computer Vision', 'AI'],
      year: 2024
    },
    {
      title: 'Oscar',
      description:
        'End-to-end internal platform for AIM WA - course scheduling, staff assignments, materials management, and automated stakeholder communications.',
      longDescription:
        'Engineered a scalable .NET backend with ASP.NET Core, integrating multiple SQL Server databases and Microsoft Graph API for authentication and automated communications. Features role-based security, automated document generation, and real-time visibility for operations and finance teams.',
      featured: false,
      category: 'work',
      tags: ['C#', '.NET', 'SQL Server', 'React', 'TypeScript', 'Microsoft Graph'],
      year: 2025,
    },
    {
      title: 'Power BI Manufacturing Dashboard',
      description:
        'Automated analytics dashboard integrating data from multiple sources, empowering stakeholders to optimise projects and improve safety compliance by 15%.',
      longDescription:
        'Developed a Power BI dashboard that consolidates manufacturing data from Replicon, Excel, and APIs, providing real-time insights into project timelines, budget tracking, and resource availability. Enabled key stakeholders to make informed decisions, aligning operational metrics with strategic business objectives.',
      featured: false,
      category: 'work',
      tags: ['Power BI', 'Data Analytics', '.NET', 'Excel', 'SQL'],
      year: 2024,
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
      demo: 'https://comssa.org.au/',
    },
    {
      title: 'Workflow Automation Tools',
      description:
        'Document and workflow automation system deployed across 5+ departments at Intellect Systems, reducing manual tasks and email processing times by over 30%.',
      longDescription:
        'Researched, designed, and implemented a document automation platform that routes documents between stakeholders, ensuring accountability, audit tracking, and faster approvals. Delivered technical workshops to train staff on the tools, which were adopted company-wide to streamline workflows, reduce manual workloads, and improve operational efficiency.',
      featured: false,
      category: 'work',
      tags: ['Automation', 'Python', 'SQL', 'Adobe'],
      year: 2023,
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
