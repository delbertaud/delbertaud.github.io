import { ResumeData } from '../types';

export const RESUME_DATA: ResumeData = {
  candidate: {
    name: 'Delbert Aud',
    title: 'AI Systems Engineer & Automation Architect (RAG, LLM, Python, Gemini API)',
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
    fullTimeW2Salary: '$120,000 / year on W2 with Health Insurance Benefits',
    contractRate: '$75.00 / hour',
    targetRoles: [
      'AI & Automation Consultant',
      'Lead RPA Developer',
      'Senior Software Systems Architect',
      'Enterprise Data & Solutions Engineer',
    ],
  },
  skillCategories: [
    {
      category: 'Operating Systems',
      description: 'Desktop, server, and embedded Unix/Linux & Windows environments.',
      skills: [
        { name: 'Linux', level: 98, experienceYears: '25+ yrs', highlights: 'CentOS, Ubuntu, Debian, RedHat administration & shell scripting.' },
        { name: 'Windows', level: 98, experienceYears: '30+ yrs', highlights: 'Server AD, Group Policy, Win32 API, PowerShell automation.' },
        { name: 'MacOS', level: 90, experienceYears: '15+ yrs', highlights: 'Development environment configuration & POSIX tools.' },
      ],
    },
    {
      category: 'Cloud Computing',
      description: 'Public cloud platforms, infrastructure as code, and cloud-native hosting.',
      skills: [
        { name: 'Amazon Web Services (AWS)', level: 94, experienceYears: '15+ yrs', highlights: 'EC2, S3, IAM, Lambda, VPCs, CloudWatch.' },
        { name: 'Google Cloud Compute (GCP)', level: 92, experienceYears: '10+ yrs', highlights: 'Compute Engine, Cloud Run, Firestore, BigQuery.' },
        { name: 'DigitalOcean', level: 95, experienceYears: '10+ yrs', highlights: 'Droplets, Managed DBs, Load Balancers, App Platform.' },
      ],
    },
    {
      category: 'Programming Languages',
      description: 'Polyglot software development languages for backend, systems, and scripts.',
      skills: [
        { name: 'Python', level: 98, experienceYears: '20+ yrs', highlights: 'Data pipelines, AI/ML tools, automation scripts, REST APIs.' },
        { name: 'C / C++', level: 95, experienceYears: '25+ yrs', highlights: 'Low-level systems programming, native performance, memory management.' },
        { name: 'Java', level: 92, experienceYears: '20+ yrs', highlights: 'Enterprise applications, object-oriented design, Avaya DMCC integration.' },
        { name: 'C# (.NET)', level: 92, experienceYears: '20+ yrs', highlights: 'Enterprise Windows services, full-stack tools, desktop applications.' },
        { name: 'JavaScript / TypeScript', level: 90, experienceYears: '15+ yrs', highlights: 'Full-stack web apps, Node.js, Express, React.' },
        { name: 'Visual Basic', level: 95, experienceYears: '25+ yrs', highlights: 'Legacy enterprise automation, VBA, macros, Win32 tools.' },
        { name: 'SQL', level: 96, experienceYears: '30+ yrs', highlights: 'Complex queries, indexing, stored procedures, ETL pipelines.' },
        { name: 'Go (Golang)', level: 88, experienceYears: '6+ yrs', highlights: 'Concurrent microservices, high-speed daemons, CLI utilities.' },
        { name: 'PHP', level: 88, experienceYears: '15+ yrs', highlights: 'Web applications, server-side scripting, legacy systems.' },
      ],
    },
    {
      category: 'Databases',
      description: 'Relational, document, key-value, and search index databases.',
      skills: [
        { name: 'Oracle', level: 92, experienceYears: '20+ yrs', highlights: 'Enterprise database administration, PL/SQL, performance tuning.' },
        { name: 'MySQL', level: 95, experienceYears: '25+ yrs', highlights: 'Relational schemas, query optimization, high-availability clusters.' },
        { name: 'SQL Server', level: 96, experienceYears: '25+ yrs', highlights: 'SSIS, ETL pipelines, T-SQL, database optimization.' },
        { name: 'PostgreSQL', level: 94, experienceYears: '15+ yrs', highlights: 'Advanced relational modeling, JSONB indexing, extensions.' },
        { name: 'MongoDB', level: 90, experienceYears: '10+ yrs', highlights: 'Document store design, aggregation pipelines.' },
        { name: 'Redis', level: 92, experienceYears: '10+ yrs', highlights: 'In-memory caching, message broker queues, fast state stores.' },
        { name: 'SQLite', level: 96, experienceYears: '20+ yrs', highlights: 'Embedded local application storage & fast desktop caching.' },
        { name: 'Elasticsearch', level: 93, experienceYears: '10+ yrs', highlights: 'Enterprise telemetry, alarm noise analysis, log analytics.' },
      ],
    },
    {
      category: 'Virtualization & Containerization',
      description: 'Hypervisors, container engines, and enterprise virtualization.',
      skills: [
        { name: 'VMware ESXi', level: 95, experienceYears: '20+ yrs', highlights: 'Bare-metal hypervisor administration, vCenter management.' },
        { name: 'Microsoft Hyper-V', level: 92, experienceYears: '15+ yrs', highlights: 'Windows server virtualization, cluster failover management.' },
        { name: 'Docker', level: 94, experienceYears: '10+ yrs', highlights: 'Container packaging, docker-compose orchestration, microservices.' },
        { name: 'Proxmox', level: 92, experienceYears: '8+ yrs', highlights: 'Open-source VE, LXC containers, ZFS storage arrays.' },
      ],
    },
    {
      category: 'Automation',
      description: 'Robotic process automation, web scraping, and workflow orchestrators.',
      skills: [
        { name: 'Robotic Process Automation (RPA)', level: 98, experienceYears: '15+ yrs', highlights: 'Automation Anywhere, JitBit, GUI macro bots, Python scrapers.' },
        { name: 'Selenium', level: 92, experienceYears: '10+ yrs', highlights: 'Browser testing, web data extraction, automated UI flows.' },
        { name: 'Node-RED', level: 90, experienceYears: '6+ yrs', highlights: 'Flow-based event driven automation & IoT integrations.' },
        { name: 'Apache NiFi', level: 88, experienceYears: '8+ yrs', highlights: 'Enterprise data flow distribution and ETL pipelines.' },
        { name: 'n8n', level: 96, experienceYears: '5+ yrs', highlights: 'Self-hosted workflow automation, AI agents, multi-service routing.' },
      ],
    },
    {
      category: 'AI/ML & Data Science',
      description: 'Generative AI APIs, agentic orchestration, and LLM frameworks.',
      skills: [
        { name: 'Gemini API', level: 95, experienceYears: '3+ yrs', highlights: 'Structured output, multimodal prompts, server-side integration.' },
        { name: 'n8n AI Workflows', level: 96, experienceYears: '5+ yrs', highlights: 'AI agent pipelines, vector search, automated decisioning.' },
        { name: 'LangChain', level: 90, experienceYears: '3+ yrs', highlights: 'Chain-of-thought orchestration, memory systems, document RAG.' },
        { name: 'CrewAI', level: 88, experienceYears: '2+ yrs', highlights: 'Multi-agent roleplay and autonomous task delegation systems.' },
      ],
    },
    {
      category: 'Project Management',
      description: 'Agile methodologies, sprint planning, and team workflow management.',
      skills: [
        { name: 'Agile', level: 95, experienceYears: '20+ yrs', highlights: 'Iterative delivery, continuous integration, stakeholder alignment.' },
        { name: 'Scrum', level: 92, experienceYears: '15+ yrs', highlights: 'Sprint planning, backlog refinement, cross-functional velocity.' },
        { name: 'Kanban', level: 94, experienceYears: '15+ yrs', highlights: 'Visual workflow management, WIP limits, bottleneck reduction.' },
      ],
    },
    {
      category: 'Security & Compliance',
      description: 'Department of Defense and enterprise security compliance frameworks.',
      skills: [
        { name: 'DITSCAP', level: 92, experienceYears: '15+ yrs', highlights: 'DoD Information Technology Security Certification and Accreditation.' },
        { name: 'DODAF', level: 90, experienceYears: '15+ yrs', highlights: 'Department of Defense Architecture Framework modeling.' },
        { name: 'DIACAP', level: 92, experienceYears: '15+ yrs', highlights: 'DoD Information Assurance Certification & Accreditation Process.' },
      ],
    },
  ],
  experience: [
    {
      role: 'Senior Automation Architect',
      company: '',
      period: 'June 2016 - May 2024',
      location: 'Henderson, NV',
      highlights: [
        'Architected Enterprise RPA & Process Automation Frameworks: Designed scalable end-to-end automation strategies leveraging Python, Golang, Automation Anywhere, and PowerShell—advising cross-functional teams and optimizing code performance by up to 500% to dramatically streamline operational workflows.',
        'Engineered Data Pipelines & Analytics Engine for Triage Automation: Built high-throughput ETL data pipelines from SQL Server into Elasticsearch and authored Python-driven intelligent routing algorithms (Ivanti, enterprise alarm noise analysis) to automate help desk ticket assignment and proactive infrastructure remediation.',
        'Designed Telephony Automation & Validation Systems: Developed Java-based automated testing architectures utilizing the Avaya DMCC library alongside RESTful monitoring systems on Linux/CentOS to validate complex voice infrastructure changes, enforce functional baseline stability, and guarantee system reliability.',
        'Built Automated Deployment & Compliance Solutions: Spearheaded Robotic Process Automation (RPA) and server configuration scripts (JitBit, PowerShell) for automated software installations (Avaya IXM), while authoring custom utility wrappers to automate long-term security retention and satisfy strict audit compliance standards.',
      ],
    },
    {
      role: 'Technology Consultant',
      company: 'HP Enterprise Services / EDS',
      period: 'September 1995 - June 2016',
      location: 'Enterprise Accounts (e.g. Bank of America)',
      highlights: [
        'Strategic Enterprise Architecture & Compliance: Partnered with government and enterprise stakeholders to architect secure IT solutions, ensuring full alignment with DISA STIG standards and complex government security postures.',
        'Legacy Modernization & Technical Migration: Advised senior leadership and cross-functional engineering teams on migrating complex legacy systems, developing comprehensive framework guides, custom discovery tools, and sandbox testing protocols to ensure zero-downtime application relocations.',
        'Process Automation & Performance Optimization: Re-engineered legacy OBIEE reporting processes using automated scripting, slashing report rendering times from 25 minutes to 2 seconds and reducing enterprise storage requirements by 75%.',
        'Cross-Functional Leadership & Solution Engineering: Led technical delivery teams in designing and deploying full-stack, automated enterprise tools using C#, PowerShell, Visual Basic, and SQL Server, bridging business requirements with technical execution across 30+ concurrent projects.',
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
