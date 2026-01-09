import { useState } from 'react';
import { Project } from '../data/types';
import '../styles/Projects.css';

// --- IMPORTATION DES IMAGES ---
// Ajoute tes autres images ici au fur et à mesure
import sudokuImg from '../../public/img/sudoku.png'; 

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  // 1. État pour la Modale (Projet sélectionné ou null)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  // 2. État pour le Filtre
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  // 3. Mapping des images (Lien entre le chemin JSON et l'import React)
  const projectImages: { [key: string]: string } = {
    "/images/sudoku.png": sudokuImg,
    // "/images/autre-projet.png": autreImg,
  };

  // 4. Fonction utilitaire pour la couleur des stickers (Catégorie)
  const getStickerClass = (category: string) => {
    switch (category) {
      case 'Scolaire': return 'sticker-school';
      case 'Professionnel': return 'sticker-pro';
      case 'Personnel': return 'sticker-personal';
      default: return '';
    }
  };

  // 5. Logique de Filtrage
  const filteredProjects = data.filter((project) => {
    if (activeFilter === 'Tous') return true;
    return project.category === activeFilter;
  });

  // Gestion du scroll quand la modale est ouverte (optionnel mais recommandé)
  if (selectedProject) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }

  return (
    <section id="projets" className="projet">
      
      {/* --- TITRE --- */}
      <h1 className="title">Nos Projets</h1>
      
      {/* --- FILTRES --- */}
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

      {/* --- GRILLE DES PROJETS --- */}
      <div className="container">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="card" 
            onClick={() => setSelectedProject(project)}
            title="Cliquez pour voir les détails"
          >
            {/* Sticker Catégorie (Haut Droit) */}
            <span className={`sticker ${getStickerClass(project.category)}`}>
              {project.category}
            </span>

            {/* Titre */}
            <h3 className="card_title">{project.title}</h3>

            {/* Tags (Liste) */}
            <ul>
              {project.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>

            {/* Image */}
            <img 
              src={projectImages[project.image] || project.image} 
              alt={project.title} 
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {/* --- MODALE (OVERLAY) --- */}
      {selectedProject && (
        <div className="overlay" onClick={() => setSelectedProject(null)}>
          {/* onStopPropagation empêche la modale de se fermer si on clique DEDANS */}
          <div className="project-detail" onClick={(e) => e.stopPropagation()}>
            
            {/* Bouton Fermer (Croix) */}
            <span 
              className="close-btn" 
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </span>
            
            {/* Contenu Modale */}
            <div className="modal-header">
              <span className={`sticker-detail ${getStickerClass(selectedProject.category)}`}>
                {selectedProject.category}
              </span>
              <h2>{selectedProject.title}</h2>
            </div>

            <p>{selectedProject.description}</p>
            
            {/* Bouton Lien (s'il existe) */}
            {selectedProject.link && (
               <a 
                 href={selectedProject.link} 
                 target="_blank" 
                 rel="noreferrer"
               >
                 Voir le projet en direct
               </a>
            )}
          </div>
        </div>
      )}
    </section>
  );
}