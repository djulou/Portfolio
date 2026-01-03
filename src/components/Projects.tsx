import { useState } from 'react';
import { Project } from '../data/types';
import '../styles/Projects.css';

// --- 1. IMPORTATION DES IMAGES ---
// Adapte les chemins selon où sont tes fichiers (ex: ../../public/img/...)
import sudokuImg from '../../public/img/sudoku.png'; 
// Ajoute ici les images des autres projets (ex: meteoImg, portfolioImg...)

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // --- 2. CRÉATION DU DICTIONNAIRE ---
  // La clé (à gauche) = Le texte exact dans ton data.json
  // La valeur (à droite) = La variable importée au-dessus
  const projectImages: { [key: string]: string } = {
    "/images/sudoku.png": sudokuImg,
    // "/images/weather-app.jpg": meteoImg, 
    // Ajoute les autres ici...
  };

  return (
    <section id="projets" className="projet">
      <h1 className="title"><span>Projets</span></h1>
      
      <div className="container">
        {data.map((project) => (
          <div 
            key={project.id} 
            className="card" 
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            <h3 className="card_title">{project.title}</h3>
            <ul>
              {project.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>

            {/* --- 3. UTILISATION DU DICTIONNAIRE --- */}
            {/* On cherche l'image importée, sinon on garde le lien brut au cas où */}
            <img 
              src={projectImages[project.image] || project.image} 
              alt={project.title} 
            />
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="overlay" style={{ display: 'flex' }}>
          <div className="project-detail">
            <span 
              className="close-btn" 
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </span>
            <h2>{selectedProject.title}</h2>
            <p>{selectedProject.description}</p>
            
            {selectedProject.link && (
               <a href={selectedProject.link} target="_blank" rel="noreferrer" style={{marginTop: '15px', display: 'inline-block'}}>
                 Voir le projet
               </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}