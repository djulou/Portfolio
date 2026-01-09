import { useState } from 'react';
import { Project } from '../data/types';
import '../styles/Projects.css';

// --- IMPORTATION DES IMAGES ---
import sudokuImg from '../../public/img/sudoku.png'; 
// Importe tes autres images ici si nécessaire

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  // Nombre de tags max à afficher sur la carte avant le "+x"
  const MAX_TAGS_ON_CARD = 3;

  const projectImages: { [key: string]: string } = {
    "/images/sudoku.png": sudokuImg,
    // Ajoute les autres correspondances ici
  };

  const getStickerClass = (category: string) => {
    switch (category) {
      case 'Scolaire': return 'sticker-school';
      case 'Professionnel': return 'sticker-pro';
      case 'Personnel': return 'sticker-personal';
      default: return '';
    }
  };

  const filteredProjects = data.filter((project) => {
    if (activeFilter === 'Tous') return true;
    return project.category === activeFilter;
  });

  // Gestion du scroll
  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="projets" className="projet">
      
      <h1 className="title">Nos Projets</h1>
      
      <div className="filter-buttons">
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

      <div className="container">
        {filteredProjects.map((project) => {
          // --- LOGIQUE D'AFFICHAGE (Calculée pour CHAQUE projet) ---
          
          // 1. Récupérer la première image du tableau
          const firstImage = project.image && project.image.length > 0 ? project.image[0] : '';
          
          // 2. Calculer les tags à afficher
          const visibleTags = project.tags.slice(0, MAX_TAGS_ON_CARD);
          const remainingTags = project.tags.length - MAX_TAGS_ON_CARD;

          return (
            <div 
              key={project.id} 
              className="card" 
              onClick={() => setSelectedProject(project)}
              title="Cliquez pour voir les détails"
            >
              <span className={`sticker ${getStickerClass(project.category)}`}>
                {project.category}
              </span>

              <h3 className="card_title">{project.title}</h3>

              {/* Liste des Tags (Limitée) */}
              <ul>
                {visibleTags.map((tag, index) => (
                  <li key={index}>{tag}</li>
                ))}
                
                {/* Badge +x */}
                {remainingTags > 0 && (
                  <li className="tag-more">+{remainingTags}</li>
                )}
              </ul>

              {/* Image (La première du tableau) */}
              <img 
                src={projectImages[firstImage] || firstImage} 
                alt={project.title} 
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* --- MODALE --- */}
      {selectedProject && (
        <div className="overlay" onClick={() => setSelectedProject(null)}>
          <div className="project-detail" onClick={(e) => e.stopPropagation()}>
            
            <span 
              className="close-btn" 
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </span>
            
            <div className="modal-header">
              <span className={`sticker-detail ${getStickerClass(selectedProject.category)}`}>
                {selectedProject.category}
              </span>
              <h2>{selectedProject.title}</h2>
            </div>

            {/* Dans la modale, on affiche TOUS les tags */}
            <div className="modal-tags">
               {selectedProject.tags.map((tag, i) => (
                 <span key={i} className="modal-tag-item">{tag}</span>
               ))}
            </div>

            <p>{selectedProject.description}</p>
            
            {/* Image principale dans la modale (ou tu peux faire une galerie plus tard) */}
            <div className="modal-image-container">
                <img 
                    src={projectImages[selectedProject.image[0]] || selectedProject.image[0]} 
                    alt={selectedProject.title} 
                    style={{width: '100%', borderRadius: '10px', marginTop: '15px'}}
                />
            </div>

            {selectedProject.link && (
               <a 
                 href={selectedProject.link} 
                 target="_blank" 
                 rel="noreferrer"
                 style={{marginTop: '20px', display: 'inline-block'}}
               >
                 Voir le projet
               </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}