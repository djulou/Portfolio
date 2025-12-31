import { useState } from 'react';
import { Project } from '../data/types';
import '../styles/Projects.css';

interface ProjectsProps {
  data: Project[];
}

export default function Projects({ data }: ProjectsProps) {
  // État pour savoir quel projet est ouvert (null = aucun)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <section id="projets" className="projet">
      <h1 className="title"><span>Projets</span></h1>
      
      <div className="container">
        {data.map((project) => (
          <div 
            key={project.id} 
            className="card" 
            onClick={() => setSelectedProject(project)}
            // Ajout du curseur pour montrer que c'est cliquable
            style={{ cursor: 'pointer' }}
          >
            <h3 className="card_title">{project.title}</h3>
            <ul>
              {project.tags.map((tag, index) => (
                <li key={index}>{tag}</li>
              ))}
            </ul>
            <img src={project.image} alt={project.title} />
          </div>
        ))}
      </div>

      {/* MODAL (Overlay) - S'affiche uniquement si un projet est sélectionné */}
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
            
            {/* Si tu as un lien vers le projet */}
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