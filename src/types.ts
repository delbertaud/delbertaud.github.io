export interface ServicePillar {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  description: string;
  keyCapabilities: string[];
  techStack: string[];
  image: string;
  badge?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: 'AI & Automation' | 'Robotic Process Automation' | 'Software Engineering' | 'Data & Cloud';
  clientContext: string;
  challenge: string;
  solution: string;
  results: string[];
  techStack: string[];
  image: string;
  metricLabel: string;
  metricValue: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: number; // 0 to 100
    experienceYears: string;
    highlights: string;
  }[];
}

export interface WorkRequirement {
  title: string;
  value: string;
  description: string;
  iconName: string;
}

export interface ResumeData {
  candidate: {
    name: string;
    title: string;
    location: string;
    citizenship: string;
    email: string;
    phone: string;
    linkedin?: string;
    github?: string;
    certifications: string[];
    bio: string;
  };
  requirements: {
    workLocation: string;
    citizenshipStatus: string;
    fullTimeW2Salary: string;
    contractRate: string;
    targetRoles: string[];
  };
  skillCategories: SkillCategory[];
  experience: {
    role: string;
    company: string;
    period: string;
    location: string;
    highlights: string[];
  }[];
  educationAndCerts: {
    title: string;
    issuer: string;
    year: string;
    details: string;
  }[];
}

export interface CalculatorState {
  processType: 'data-entry' | 'report-generation' | 'legacy-integration' | 'ai-document-parsing' | 'telecom-sysadmin';
  manualHoursPerWeek: number;
  teamMembers: number;
  avgHourlyRate: number;
}

export interface ConsultationForm {
  name: string;
  email: string;
  company: string;
  serviceType: string;
  engagementType: 'Contract ($65/hr)' | 'Full-Time W2' | 'Advisory Consultation' | 'Project Based';
  projectDetails: string;
}
