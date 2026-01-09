import { useState } from 'react';
import { Project } from '../data/types';
import '../styles/Projects.css';

// --- IMPORTATION DES IMAGES ---
import sudokuImg from '../../public/img/sudoku.png'; 

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  // État pour la Modale
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // État pour le Filtre (Déplacé ici depuis App.tsx)
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  const projectImages: { [key: string]: string } = {
    "/images/sudoku.png": sudokuImg,
  };

  // Fonction pour les stickers
  const getStickerClass = (category: string) => {
    switch (category) {
      case 'Scolaire': return 'sticker-school';
      case 'Professionnel': return 'sticker-pro';
      default: return 'sticker-personal';
    }
  };

  // --- LOGIQUE DE FILTRAGE ---
  const filteredProjects = data.filter((project) => {
    if (activeFilter === 'Tous') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="projets" className="projet">
      {/* 1. Le Titre d'abord */}
      <h1 className="title"><span>Projets</span></h1>
      
      {/* 2. Les Boutons de filtre ensuite (juste sous le titre) */}
      <div className="filter-buttons" style={{ marginBottom: '40px' }}>
        {['Tous', 'Scolaire', 'Personnel', 'Professionnel'].map((category) => (
          <button
            key={category}
            className={activeFilter === category ? 'active' : ''}
            onClick={() => setActiveFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {/* 3. La Grille des projets (On utilise la liste FILTRÉE) */}
      <div className="container">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="card" 
            onClick={() => setSelectedProject(project)}
            style={{ cursor: 'pointer' }}
          >
            {/* Le Sticker */}
            <span className={`sticker ${getStickerClass(project.category)}`}>
              {project.category}
            </span>

            <h3 className="card_title">{project.title}</h3>
            <ul>
              {project.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>

            <img 
              src={projectImages[project.image] || project.image} 
              alt={project.title} 
            />
          </div>
        ))}
      </div>

      {/* La Modale */}
      {selectedProject && (
        <div className="overlay" style={{ display: 'flex' }}>
          <div className="project-detail">
            <span 
              className="close-btn" 
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </span>
            
            <span className={`sticker-detail ${getStickerClass(selectedProject.category)}`}>
              {selectedProject.category}
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