import { ResumeData } from '../types';

export const RESUME_DATA: ResumeData = {
  candidate: {
    name: 'Delbert Aud',
    title: 'Senior IT Professional & Consultant',
    location: 'Henderson, NV (US Citizen)',
    citizenship: 'United States Citizen',
    email: 'delbert.aud@gmail.com',
    phone: '(702) 449-2337',
    linkedin: 'https://linkedin.com',
    github: 'https://github.com/delbertaud',
    certifications: [
      'Enterprise Cybersecurity & Infrastructure Specialist',
    ],
    bio: 'Accomplished IT professional with over four decades of experience designing, developing, and implementing technology solutions across various industries. Recognized expert in AI/ML workflows, Robotic Process Automation (RPA), enterprise software programming, and cloud infrastructure security.',
  },
  requirements: {
    workLocation: '100% Remote Only',
    citizenshipStatus: 'United States Citizen (Henderson, NV)',
    fullTimeW2Salary: '$120,000 / year',
    contractRate: '$65.00 / hour',
    targetRoles: [
      'AI & Automation Consultant',
      'Lead RPA Developer',
      'Senior Software Systems Architect',
      'Enterprise Data & Solutions Engineer',
    ],
  },
  skillCategories: [
    {
      category: 'AI, Machine Learning & Automation',
      description: 'Generative AI, local LLM orchestration, and intelligent data extraction.',
      skills: [
        { name: 'n8n Workflow Automation', level: 96, experienceYears: '5+ yrs', highlights: 'Complex trigger pipelines, multi-LLM routing, webhook integrations.' },
        { name: 'Local LLMs (Ollama, Gemini API, OpenAI)', level: 94, experienceYears: '4+ yrs', highlights: 'RAG search, prompt engineering, structured JSON extraction.' },
        { name: 'Stable Diffusion & Automatic1111', level: 90, experienceYears: '3+ yrs', highlights: 'Custom image generation for enterprise media.' },
        { name: 'AirTable + Zapier + Slack Integration', level: 95, experienceYears: '8+ yrs', highlights: 'Relational automation hubs and operational dashboards.' },
      ],
    },
    {
      category: 'Robotic Process Automation (RPA)',
      description: 'Bot scripting, legacy UI automation, and background process recording.',
      skills: [
        { name: 'Automation Anywhere & Apache NiFi', level: 92, experienceYears: '8+ yrs', highlights: 'Enterprise data flows, ETL pipelines, bot execution.' },
        { name: 'JitBit Macro Recorder & PowerShell', level: 98, experienceYears: '15+ yrs', highlights: 'Avaya IXM deployments, system setup scripts, GUI macros.' },
        { name: 'Python & Go Bot Scripting', level: 95, experienceYears: '15+ yrs', highlights: 'High-performance background daemons and API scrapers.' },
      ],
    },
    {
      category: 'Software Engineering & Programming',
      description: 'Polyglot programming languages across 40+ years of technological evolution.',
      skills: [
        { name: 'Python', level: 98, experienceYears: '20+ yrs', highlights: 'Data pipelines, AI tools, Elasticsearch indexing, REST APIs.' },
        { name: 'C / C++', level: 95, experienceYears: '25+ yrs', highlights: 'Low-level systems programming, native drivers, high-speed algorithms.' },
        { name: 'Java & C# (.NET)', level: 92, experienceYears: '20+ yrs', highlights: 'Enterprise backend systems, object-oriented design.' },
        { name: 'Go (Golang)', level: 88, experienceYears: '6+ yrs', highlights: 'Concurrent microservices and micro-daemons.' },
        { name: 'JavaScript / TypeScript & Web', level: 90, experienceYears: '15+ yrs', highlights: 'Full-stack web applications, React, Node.js, Express.' },
        { name: 'SQL & Database Architecture', level: 96, experienceYears: '30+ yrs', highlights: 'Oracle, PostgreSQL, MS SQL Server, MySQL, SQLite, Redis.' },
      ],
    },
    {
      category: 'Cloud, Cybersecurity & Infrastructure',
      description: 'Enterprise security auditing, virtualized hypervisors, and cloud environments.',
      skills: [
        { name: 'Enterprise Cybersecurity Hardening', level: 96, experienceYears: 'Expert', highlights: 'Access controls, encryption standards, risk auditing.' },
        { name: 'AWS, GCP & DigitalOcean', level: 92, experienceYears: '15+ yrs', highlights: 'Virtual private clouds, serverless functions, storage buckets.' },
        { name: 'VMware ESXi & Docker', level: 94, experienceYears: '15+ yrs', highlights: 'Hypervisor management, containerization, server virtualization.' },
        { name: 'Elasticsearch & Log Analysis', level: 93, experienceYears: '10+ yrs', highlights: 'Enterprise alarm analytics, telemetry dashboards.' },
      ],
    },
  ],
  experience: [
    {
      role: 'Senior Technology Consultant & Automation Architect',
      company: 'Independent Consulting',
      period: '2018 - Present',
      location: 'Henderson, NV',
      highlights: [
        'Designed AI-powered data pipelines using n8n, Ollama, and LLMs to optimize business intelligence data flows.',
        'Developed custom RPA bots with JitBit Macro Recorder and PowerShell for automated software deployment.',
        'Built scalable database solutions in AirTable integrated with Zapier and Slack for seamless operations.',
        'Consulted enterprise clients on security compliance, zero-trust network setups, and cloud migrations.',
      ],
    },
    {
      role: 'Lead RPA & Systems Development Manager',
      company: 'HP Enterprise Services / EDS',
      period: 'Major Enterprise Engagements',
      location: 'Enterprise Accounts (e.g. Bank of America)',
      highlights: [
        'Managed development teams for high-priority financial institution accounts including Bank of America.',
        'Analyzed millions of enterprise alarms using Python and Elasticsearch to eliminate noise and identify failing equipment.',
        'Architected automated software distribution pipelines for Avaya IXM telecom systems across multi-site nodes.',
        'Received executive recognition for maintaining 99.999% availability across core client server infrastructure.',
      ],
    },
  ],
  educationAndCerts: [
    {
      title: '4+ Decades of Continuous Engineering Mastery',
      issuer: 'Industry Practice',
      year: '1980s - Present',
      details: 'Continuous hands-on expertise spanning mainframes, C/C++ systems, object-oriented Java/C#, cloud engineering, and Generative AI.',
    },
  ],
};
