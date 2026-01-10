import { useState } from 'react';
import { Project } from '../data/types';
import '../styles/Projects.css';

// --- IMAGES PROJETS ---
import pact1 from '../../public/img/img_1_pact.webp';
import pact2 from '../../public/img/img_2_pact.webp';
import pact3 from '../../public/img/img_3_pact.webp';
import pact4 from '../../public/img/img_4_pact.webp';

import sudoku1 from '../../public/img/sudoku_1.webp';
import sudoku2 from '../../public/img/sudoku_2.webp';
import sudoku3 from '../../public/img/sudoku_3.webp';

// --- LOGOS TECHNOS ---
import htmlLogo from '../../public/img/html.webp';
import cssLogo from '../../public/img/css.webp';
import reactLogo from '../../public/img/react.webp';
import tsLogo from '../../public/img/typescript.webp';
import gitLogo from '../../public/img/git.webp';
import phpLogo from '../../public/img/php.webp';
import postgresqlLogo from '../../public/img/postgresql.webp';
import figmaLogo from '../../public/img/figma.webp';
import pythonLogo from '../../public/img/python.webp';
import javaLogo from '../../public/img/java.webp';
import cLogo from '../../public/img/c.webp';
import linuxLogo from '../../public/img/linux.webp';
import bashLogo from '../../public/img/bash.webp';
import mysqlLogo from '../../public/img/mysql.webp';
import jiraLogo from '../../public/img/jira.webp';
import mongoLogo from '../../public/img/mongo.webp';
import iosLogo from '../../public/img/ios.webp';
import windowsLogo from '../../public/img/windows.webp';

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
    "/images/sudoku_1.webp": sudoku1,
    "/images/sudoku_2.webp": sudoku2,
    "/images/sudoku_3.webp": sudoku3,
  };

  const languageLogos: { [key: string]: string } = {
    "HTML": htmlLogo,
    "HTML5": htmlLogo,
    "CSS": cssLogo,
    "CSS3": cssLogo,
    "React": reactLogo,
    "TypeScript": tsLogo,
    "Git": gitLogo,
    "PHP": phpLogo,
    "PostgreSQL": postgresqlLogo,
    "SQL": mysqlLogo,
    "Figma": figmaLogo,
    "Python": pythonLogo,
    "Java": javaLogo,
    "C": cLogo,
    "Linux": linuxLogo,
    "Bash": bashLogo,
    "MySQL": mysqlLogo,
    "Jira": jiraLogo,
    "MongoDB": mongoLogo,
    "IOS": iosLogo,
    "Windows": windowsLogo,
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

  const openProject = (project: Project) => {
    setSelectedProject(project);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeProject = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="projets" className="projet">
      <h1 className="title">Projets</h1>

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
          const allTags = [...project.tags, ...project.technologies];
          const firstImage = project.image && project.image.length > 0 ? project.image[0] : '';
          const visibleTags = allTags.slice(0, MAX_TAGS_ON_CARD);
          const remainingTags = allTags.length - MAX_TAGS_ON_CARD;

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

      {selectedProject && (
        <div className="full-page-overlay">
          <div className="full-page-content">
            
            <div className="page-header-actions">
                <button className="back-button" onClick={closeProject}>
                    &larr; Retour aux projets
                </button>
            </div>

            <div className="detail-split">
                
                {/* --- 1. PARTIE TEXTE (Maintenant à GAUCHE) --- */}
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

                    {selectedProject.technologies && selectedProject.technologies.length > 0 && (
                        <div className="tech-stack-container">
                            <h3>Technologies utilisées</h3>
                            <div className="tech-logos-grid">
                                {selectedProject.technologies.map((techName, i) => {
                                    const logoSrc = languageLogos[techName];
                                    return (
                                        <div key={i} className="tech-logo-item" title={techName}>
                                            {logoSrc ? <img src={logoSrc} alt={techName} /> : null}
                                            <span>{techName}</span>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    )}
                </div>

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

                    {/* BOUTON SOUS L'IMAGE */}
                    {selectedProject.link && (
                        <div className="left-action-container">
                            <a
                                href={selectedProject.link}
                                target="_blank"
                                rel="noreferrer"
                                className="detail-link-btn"
                            >
                                Voir le projet
                            </a>
                        </div>
                    )}
                </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
}