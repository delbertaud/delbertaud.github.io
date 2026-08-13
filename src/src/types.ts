export interface ServicePillar {
  id: string;
  title: string;
  positioningLevel: 'Primary Core' | 'Secondary / Niche Case Study';
  strategicFocus: string;
  tagline: string;
  capabilities: string[];
  techStack: string[];
  metrics: { label: string; value: string }[];
  iconName: string;
}

export interface CodeSnippet {
  id: string;
  filename: string;
  language: string;
  title: string;
  pillar: string;
  description: string;
  code: string;
  simulationLogs: {
    time: string;
    level: 'INFO' | 'SUCCESS' | 'WARN' | 'EXEC';
    message: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  badge: string;
  problem: string;
  systemArchitecture: string[];
  businessResult: string[];
  metrics: { label: string; value: string }[];
  tags: string[];
}

export interface WorkExperience {
  role: string;
  organization: string;
  period: string;
  location: string;
  highlights: string[];
  skills: string[];
}
