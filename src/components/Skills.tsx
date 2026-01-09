import { useState } from 'react';
import { Skill, Language } from '../data/types';
import '../styles/Skills.css';

// --- IMPORTATION DES LOGOS ---
// Assure-toi d'avoir ces images dans ton dossier public/img/ ou assets
import htmlLogo from '../../public/img/html.png';
import cssLogo from '../../public/img/css.png';
import reactLogo from '../../public/img/react.png';
import tsLogo from '../../public/img/typescript.png';
import gitLogo from '../../public/img/git.png';
// Importe une image par défaut si besoin

interface SkillsProps {
  skillsData: Skill[];
  languagesData: Language[];
}

export default function Skills({ skillsData, languagesData }: SkillsProps) {
  // État pour gérer l'onglet actif ('competences' par défaut)
  const [activeTab, setActiveTab] = useState<'competences' | 'languages'>('competences');

  // Mapping des images pour les langages
  const languageLogos: { [key: string]: string } = {
    "/img/html.png": htmlLogo,
    "/img/css.png": cssLogo,
    "/img/react.png": reactLogo,
    "/img/typescript.png": tsLogo,
    "/img/git.png": gitLogo,
  };

  return (
    <section id="competences" className="comp_container">
      
      {/* --- EN-TÊTE AVEC LES DEUX TITRES CLIQUABLES --- */}
      <div className="skills-header">
        <h1 
          className={`title clickable ${activeTab === 'competences' ? 'active' : ''}`}
          onClick={() => setActiveTab('competences')}
        >
          Compétences
        </h1>
        
        <span className="separator">|</span>

        <h1 
          className={`title clickable ${activeTab === 'languages' ? 'active' : ''}`}
          onClick={() => setActiveTab('languages')}
        >
          Langages
        </h1>
      </div>

      {/* --- CONTENU CONDITIONNEL --- */}
      
      {/* CAS 1 : Affichage des Compétences (Texte) */}
      {activeTab === 'competences' && (
        <div className="competences fade-in">
          {skillsData.map((skill) => (
            <div key={skill.id} className="skill-card"> 
              <h3 className="card-title">{skill.name}</h3>
              {skill.description && (
                <p className="description">{skill.description}</p>
              )}
            </div>
          ))}
        </div>
      )}

      {/* CAS 2 : Affichage des Langages (Logos) */}
      {activeTab === 'languages' && (
        <div className="languages-grid fade-in">
          {languagesData.map((lang) => (
            <div key={lang.id} className="language-card">
              <div className="logo-container">
                <img 
                  src={languageLogos[lang.image] || lang.image} 
                  alt={lang.name} 
                />
              </div>
              <p>{lang.name}</p>
            </div>
          ))}
        </div>
      )}

    </section>
  );
}