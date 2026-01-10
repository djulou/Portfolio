import { useState } from 'react';
import { Project } from '../data/types';
import '../styles/Projects.css'; // <--- VÉRIFIEZ BIEN CET IMPORT

// --- IMPORTATION DES IMAGES ---
import pact1 from '../../public/img/img_1_pact.webp';
import pact2 from '../../public/img/img_2_pact.webp';
import pact3 from '../../public/img/img_3_pact.webp';
import pact4 from '../../public/img/img_4_pact.webp';

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('Tous');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const MAX_TAGS_ON_CARD = 8;

  const projectImages: { [key: string]: string } = {
    "/images/img_1_pact.webp": pact1,
    "/images/img_2_pact.webp": pact2,
    "/images/img_3_pact.webp": pact3,
    "/images/img_4_pact.webp": pact4,
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

  // --- LOGIQUE CARROUSEL ---
  const handleNextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject || selectedProject.image.length <= 1) return;
    setCurrentImageIndex((prev) =>
      prev === selectedProject.image.length - 1 ? 0 : prev + 1
    );
  };

  const handlePrevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!selectedProject || selectedProject.image.length <= 1) return;
    setCurrentImageIndex((prev) =>
      prev === 0 ? selectedProject.image.length - 1 : prev - 1
    );
  };

  // --- OUVERTURE / FERMETURE ---
  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    // On empêche le scroll de la page principale derrière
    document.body.style.overflow = 'hidden'; 
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto'; // On réactive le scroll
  };

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
          const firstImage = project.image && project.image.length > 0 ? project.image[0] : '';
          const visibleTags = project.tags.slice(0, MAX_TAGS_ON_CARD);
          const remainingTags = project.tags.length - MAX_TAGS_ON_CARD;

          return (
            <div key={project.id} className="card" onClick={() => openProject(project)}>
              <span className={`sticker ${getStickerClass(project.category)}`}>
                {project.category}
              </span>
              <h3 className="card_title">{project.title}</h3>
              <ul>
                {visibleTags.map((tag, index) => <li key={index}>{tag}</li>)}
                {remainingTags > 0 && <li className="tag-more">+{remainingTags}</li>}
              </ul>
              <img
                src={projectImages[firstImage] || firstImage}
                alt={project.title}
                loading="lazy"
              />
            </div>
          );
        })}
      </div>

      {/* --- VUE PLEINE PAGE (Overlay) --- */}
      {selectedProject && (
        <div className="full-page-overlay">
          <div className="full-page-content">
            
            {/* Bouton Retour */}
            <div className="page-header-actions">
                <button className="back-button" onClick={closeProject}>
                    &larr; Retour aux projets
                </button>
            </div>

            {/* Contenu : Gauche (Image) / Droite (Texte) */}
            <div className="detail-split">
                
                {/* GAUCHE : CARROUSEL */}
                <div className="detail-left">
                    <div className="carousel-wrapper-page">
                        {selectedProject.image.length > 0 && (
                          <img
                              src={projectImages[selectedProject.image[currentImageIndex]] || selectedProject.image[currentImageIndex]}
                              alt={`Vue ${currentImageIndex + 1}`}
                              className="carousel-img-page"
                          />
                        )}

                        {selectedProject.image.length > 1 && (
                            <>
                                <button className="carousel-btn prev" onClick={handlePrevImage}>&#10094;</button>
                                <button className="carousel-btn next" onClick={handleNextImage}>&#10095;</button>
                                <div className="carousel-dots">
                                    {selectedProject.image.map((_, idx) => (
                                        <span
                                            key={idx}
                                            className={`dot ${idx === currentImageIndex ? 'active' : ''}`}
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setCurrentImageIndex(idx);
                                            }}
                                        ></span>
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* DROITE : INFOS */}
                <div className="detail-right">
                    <div className="detail-header">
                        <span className={`sticker-detail ${getStickerClass(selectedProject.category)}`}>
                            {selectedProject.category}
                        </span>
                        <h1>{selectedProject.title}</h1>
                    </div>

                    <div className="detail-tags">
                        {selectedProject.tags.map((tag, i) => (
                            <span key={i} className="detail-tag-item">{tag}</span>
                        ))}
                    </div>

                    <div className="detail-description">
                        <p>{selectedProject.description}</p>
                    </div>

                    {selectedProject.link && (
                        <a
                            href={selectedProject.link}
                            target="_blank"
                            rel="noreferrer"
                            className="detail-link-btn"
                        >
                            Voir le projet
                        </a>
                    )}
                </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}