export interface Skill {
  id: number;
  name: string;
  level: string;
}

export interface Formation {
  id: number;
  school: string;
  degree: string;
  year: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

// L'interface globale qui regroupe tout
export interface PortfolioData {
  skills: Skill[];
  formations: Formation[];
  projects: Project[];
}