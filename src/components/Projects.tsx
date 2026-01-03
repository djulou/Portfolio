import { useState } from 'react';
import { Project } from '../data/types';
import '../styles/Projects.css';

// --- IMPORTATION DES IMAGES ---
import sudokuImg from '../../public/img/sudoku.png'; 

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectImages: { [key: string]: string } = {
    "/images/sudoku.png": sudokuImg,
  };

  // Petite fonction pour définir la classe CSS selon la catégorie
  const getStickerClass = (category: string) => {
    switch (category) {
      case 'Scolaire': return 'sticker-school';
      case 'Professionnel': return 'sticker-pro';
      default: return 'sticker-personal';
    }
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
            style={{ cursor: 'pointer' }} // position: relative sera ajouté via le CSS
          >
            {/* --- LE STICKER --- */}
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

      {selectedProject && (
        <div className="overlay" style={{ display: 'flex' }}>
          <div className="project-detail">
            <span 
              className="close-btn" 
              onClick={() => setSelectedProject(null)}
            >
              &times;
            </span>
            {/* Tu peux aussi rappeler le type ici si tu veux */}
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