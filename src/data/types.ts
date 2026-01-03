export interface HeroData {
  greeting: string;
  intro: string;
  name: string;
  welcome: string;
  bgImage: string;      // Chemin de l'image de fond
  profileImage: string; // Chemin de la photo de profil
  linkedinIcon: string; // Chemin de l'icone LinkedIn
  cvLink: string;       // Lien vers le PDF
  linkedinLink: string; // Lien vers le profil LinkedIn
}

export interface AboutData {
  title: string;
  description: string;
  cvLink: string;
}

export interface Skill {
  id: number;
  name: string;
  level: string;
  description?: string; // J'ai ajouté ça car ton HTML avait des descriptions
}

export interface Formation {
  id: number;
  school: string;
  degree: string;
  year: string;
  description?: string; // Ajouté pour le détail de la formation
}

export interface Project {
  id: number;
  title: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
  category: "Scolaire" | "Perso" | "Pro";
}

// L'interface globale mise à jour
export interface PortfolioData {
  hero: HeroData;     // Ajouté
  about: AboutData;   // Ajouté
  skills: Skill[];
  formations: Formation[];
  projects: Project[];
  passions: string[]; // Ajouté
}