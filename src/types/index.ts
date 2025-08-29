export interface Project {
  id: number;
  title: string;
  description: string;
  image: any ;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Skill {
  name: string;
  // level: number;
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

export interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}