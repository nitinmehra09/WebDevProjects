export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
  category: 'language' | 'tool' | 'interest';
}

export interface Project {
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  image?: string;
}

export interface Certification {
  title: string;
  issuedBy: string;
  date: string;
  url?: string;
}

export interface Social {
  name: string;
  url: string;
  icon: string;
}