// Portfolio Data Types

export interface TechIcon {
  name: string;
  icon: string;
}

export type ProjectCategory = 'web_development' | 'mobile' | 'AI_ML' | 'IOT' | 'all';

export interface Project {
  id: string;
  title: string;
  description: string;
  category: Exclude<ProjectCategory, 'all'>;
  imageUrl: string;
  projectLink: string;
  techStack: TechIcon[];
}

export interface TechStackItem {
  name: string;
  img: string;
  desc: string;
}

export interface TechCategories {
  web: TechStackItem[];
  mobile: TechStackItem[];
  cloud: TechStackItem[];
  ai: TechStackItem[];
  tools: TechStackItem[];
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  platformLogo: string;
  platformName: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface Stat {
  id: string;
  icon: string;
  value: string;
  label: string;
}

export interface PersonalInfo {
  name: string;
  jobTitle: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  profileImage: string;
  bio: string[];
}

export interface Education {
  id: string;
  institution: string;
  partner?: string;
  degree: string;
  period: string;
  status: string;
  logos: string[];
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  companyLogo: string;
  responsibilities?: string[];
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface NavItem {
  id: string;
  label: string;
  href: string;
}
