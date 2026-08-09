import heroBanner from '../assets/images/hero_banner_consulting_1786215809349.jpg';
import avatarImg from '../assets/images/delbert_aud_avatar_1786215822909.jpg';
import aiRpaImg from '../assets/images/ai_rpa_pipeline_1786215835306.jpg';
import cloudSystemsImg from '../assets/images/cloud_systems_graphic_1786215846158.jpg';

import { ServicePillar, CaseStudy } from '../types';

export const IMAGES = {
  heroBanner,
  avatar: avatarImg,
  aiRpa: aiRpaImg,
  cloudSystems: cloudSystemsImg,
};

export const SERVICE_PILLARS: ServicePillar[] = [
  {
    id: 'ai-consulting',
    title: 'AI & Machine Learning Consulting',
    subtitle: 'Automated LLM Workflows, Local AI & Intelligent Data Extraction',
    iconName: 'Bot',
    badge: 'Popular',
    description:
      'Transform complex operational data into actionable intelligence with custom LLM pipelines, RAG document search, n8n automation, and local AI (Ollama/Gemini/OpenAI) setups.',
    keyCapabilities: [
      'n8n + Ollama + LLM automated business intelligence pipelines',
      'Retrieval-Augmented Generation (RAG) on private enterprise databases',
      'Stable Diffusion / Automatic1111 business imagery generation',
      'Airtable + Zapier + Slack webhook automation hubs',
      'AI-powered document, invoice, and PDF data extraction',
    ],
    techStack: ['Python', 'n8n', 'Ollama', 'Google Gemini API', 'OpenAI', 'LangChain', 'PostgreSQL', 'AirTable'],
    image: aiRpaImg,
  },
  {
    id: 'rpa-automation',
    title: 'Robotic Process Automation (RPA)',
    subtitle: 'End-to-End Workflow & Legacy System Automation',
    iconName: 'Cpu',
    description:
      'Eliminate repetitive manual tasks and human error by deploying high-reliability software bots, macro recorders, and API middleware that bridge legacy desktop apps with modern cloud platforms.',
    keyCapabilities: [
      'Automation Anywhere & Apache NiFi process automation',
      'JitBit Macro Recorder & PowerShell automated app deployments',
      'Python & Go high-throughput background workers',
      'Avaya IXM & Telecom software deployment scripts',
      'Enterprise alarm event filtering and predictive maintenance alerting',
    ],
    techStack: ['Automation Anywhere', 'Python', 'Go', 'PowerShell', 'Apache NiFi', 'JitBit', 'Elasticsearch'],
    image: aiRpaImg,
  },
  {
    id: 'software-programming',
    title: 'Custom Programming & Systems Architecture',
    subtitle: '40+ Years of High-Performance Code & Polyglot Development',
    iconName: 'Code2',
    description:
      'Robust software engineering across legacy and modern ecosystems. Multi-threaded backends, microservices, database optimizations, and cross-platform enterprise software.',
    keyCapabilities: [
      'Polyglot programming in Python, C++, C, Java, C#, Go, and SQL',
      'High-performance database modeling (PostgreSQL, MS SQL, Oracle, Redis)',
      'Enterprise alarm & asset monitoring with Elasticsearch indexing',
      'Secure C/C++ native system extensions and Windows/Linux services',
      'API gateway integration & RESTful microservice development',
    ],
    techStack: ['C++', 'C#', 'Java', 'Python', 'Go', 'SQL Server', 'Oracle', 'PostgreSQL', 'Docker'],
    image: cloudSystemsImg,
  },
  {
    id: 'cloud-security',
    title: 'Cloud & Infrastructure Hardening',
    subtitle: 'Enterprise Cloud & Security Architecture',
    iconName: 'ShieldCheck',
    description:
      'Certified security and cloud architecture for mission-critical deployments. Hardened cloud compute, server virtualization, zero-trust network design, and automated failover.',
    keyCapabilities: [
      'AWS, Google Cloud Compute, and DigitalOcean infrastructure setup',
      'VMware ESXi virtualization & Docker container management',
      'Enterprise security audit, role-based access control (RBAC) & compliance',
      'Automated disaster recovery, backup routines & log monitoring',
      'Multi-region high-availability server clustering',
    ],
    techStack: ['AWS', 'Google Cloud', 'VMware ESXi', 'Docker', 'Linux', 'Windows Server'],
    image: cloudSystemsImg,
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'case-1',
    title: 'Investment Tracking System',
    category: 'AI & Automation',
    clientContext: '',
    challenge:
      'Download investment ticker data every half-hour, analyze data, generate and execute a prompt and output a report.',
    solution:
      'Engineered an automated Python scheduler integrated with the Gemini API. Downloads ticker market data every 30 minutes, executes dynamic prompt analysis against current price feeds, and generates automated intelligence reports.',
    results: [
      'Automated ticker data downloads scheduled every 30 minutes',
      'Dynamic Gemini API prompt generation and multi-ticker data analysis',
      'Instant structured executive reporting and market insights',
    ],
    techStack: ['Python', 'Gemini API'],
    image: aiRpaImg,
    metricLabel: 'Report Frequency',
    metricValue: 'Every 30m',
  },
  {
    id: 'case-2',
    title: 'Ivanti Ticket Assignment Processing',
    category: 'Robotic Process Automation',
    clientContext: '',
    challenge:
      'Download unassigned Ivanti tickets, process tickets through a rules engine and post back to Ivanti to assign the ticket to the best resource.',
    solution:
      'Engineered an automated Python integration service that interfaces directly with Ivanti ITSM APIs and database queues. Fetches unassigned tickets, evaluates resource capabilities and availability via a dynamic rules engine, and automatically updates ticket assignments in real-time.',
    results: [
      'Automated downloading and processing of unassigned Ivanti ITSM tickets',
      'Intelligent rules engine matching ticket complexity with optimal staff resources',
      'Automated post-back to Ivanti with zero manual dispatcher intervention',
    ],
    techStack: ['Ivanti', 'Python'],
    image: aiRpaImg,
    metricLabel: 'Assignment Engine',
    metricValue: 'Automated',
  },
  {
    id: 'case-3',
    title: 'Automated Avaya IXM Telecom Deployments via RPA',
    category: 'Robotic Process Automation',
    clientContext: 'Enterprise Communications & Managed Services Provider',
    challenge:
      'Deploying Avaya IXM software updates across hundreds of remote servers required tedious manual GUI clicking, manual registry tweaks, and shell script executions, taking 4+ hours per server.',
    solution:
      'Developed custom RPA scripts using JitBit Macro Recorder, PowerShell, and AutoIt. Built automated error recovery routines, silent installers, and centralized execution logs.',
    results: [
      'Reduced deployment time from 240 minutes down to 12 minutes per node',
      'Eliminated human configuration errors across 150+ server environments',
      'Enabled parallel background deployments across multiple sites simultaneously',
    ],
    techStack: ['JitBit Macro Recorder', 'PowerShell', 'AutoIt', 'Avaya IXM', 'Windows Server'],
    image: aiRpaImg,
    metricLabel: 'Deployment Speedup',
    metricValue: '20x Faster',
  },
  {
    id: 'case-4',
    title: 'Airtable, Zapier & Slack Operational Hub',
    category: 'Data & Cloud',
    clientContext: 'Multi-Location Operations & Logistics Provider',
    challenge:
      'Siloed communications between field technicians and central dispatch led to lost work orders, delayed customer updates, and untracked inventory levels.',
    solution:
      'Designed a multi-table relational AirTable workflow backend connected via Zapier webhooks to Slack and custom Python endpoints, enabling real-time status updates and automated customer SMS/email notifications.',
    results: [
      'Eliminated paper work orders and manual status phone calls',
      'Increased daily completed field dispatch tickets by 34%',
      'Provided executive management with real-time operational dashboard metrics',
    ],
    techStack: ['AirTable', 'Zapier', 'Slack Webhooks', 'Python', 'REST APIs'],
    image: cloudSystemsImg,
    metricLabel: 'Ticket Throughput Gain',
    metricValue: '+34%',
  },
];

export const CONSULTING_FAQ = [
  {
    question: 'What types of consulting engagements does Delbert Aud accept?',
    answer:
      'Delbert accepts 100% remote positions on a Full-Time W2 basis ($120,000/year on W2 with Health Insurance Benefits) or Contract/Advisory basis ($75/hour). Engagements include AI strategy, RPA development, custom software engineering, and enterprise architecture auditing.',
  },
  {
    question: 'How do you handle sensitive enterprise data with AI models?',
    answer:
      'Delbert prioritizes privacy and compliance. Solutions can utilize self-hosted local LLMs (such as Ollama or private cloud instances) that keep sensitive business data entirely within your network boundary with no third-party training usage.',
  },
  {
    question: 'Can you automate legacy desktop applications without modern APIs?',
    answer:
      'Yes! Through Robotic Process Automation (RPA), tools like Automation Anywhere, JitBit Macro Recorder, PowerShell, and custom Python GUI controllers, Delbert automates legacy software that lacks native API endpoints.',
  },
  {
    question: 'What is the typical timeline for an automation or AI project?',
    answer:
      'Initial proof-of-concept workflows (such as n8n document extraction or PowerShell deployment bots) are frequently delivered within 1 to 2 weeks. Enterprise-wide integrations typically range from 4 to 8 weeks depending on system scope.',
  },
];
