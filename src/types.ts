import { LucideIcon } from 'lucide-react';

export interface Project {
  id: string;
  title: string;
  year: string;
  description: string;
  tech: string[];
  image: string;
  link?: string;
}

export interface SkillItem {
  name: string;
  icon?: string;
  iconUrl?: string; // For external logo URLs
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: SkillItem[];
  className?: string; // For bento grid spanning
}

export interface ExperienceItem {
  company: string;
  role: string;
  year: string;
  description: string;
}

export interface NavItem {
  label: string;
  icon: LucideIcon;
  url?: string;     // For internal scrolling (#id)
  href?: string;    // For external links (Resume)
  external?: boolean;
}