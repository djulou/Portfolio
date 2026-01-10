import { useState } from 'react';
import { Skill, Language } from '../data/types';
import '../styles/Skills.css';

// --- IMPORTATION DES LOGOS ---
// Assure-toi d'avoir ces images dans /public/img/
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

interface SkillsProps {
  skillsData: Skill[];
  languagesData: Language[];
}

export default function Skills({ skillsData, languagesData }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'but' | 'lang'>('but');
  const [activeLangFilter, setActiveLangFilter] = useState<string>('Tous');

  // Mapping des images (Clé = chemin dans le JSON)
  const languageLogos: { [key: string]: string } = {
    "/img/html.webp": htmlLogo,
    "/img/css.webp": cssLogo,
    "/img/react.webp": reactLogo,
    "/img/typescript.webp": tsLogo,
    "/img/git.webp": gitLogo,
    "/img/php.webp": phpLogo,
    "/img/figma.webp": figmaLogo,
    "/img/postgresql.webp": postgresqlLogo,
    "/img/python.webp": pythonLogo,
    "/img/java.webp": javaLogo,
    "/img/c.webp": cLogo,
    "/img/linux.webp": linuxLogo,
    "/img/bash.webp": bashLogo,
    "/img/mysql.webp": mysqlLogo,
  };

  // --- NOUVEAU SYSTÈME DE FILTRE (Tableaux) ---
  const filteredLanguages = languagesData.filter((lang) => {
    if (activeLangFilter === 'Tous') return true;
    // On vérifie si le tableau 'category' contient le filtre sélectionné
    return lang.category.includes(activeLangFilter);
  });

  const formatTitle = (title: string) => {
    const words = title.split(' ');
    const firstWord = words[0];
    const rest = words.slice(1).join(' ');
    return (
      <>
        <span className="verb-highlight">{firstWord}</span> {rest}
      </>
    );
  };

  return (
    <section id="competences" className="comp_container">
      
      <h1 className="main-title">Compétences</h1>

      {/* Onglets Principaux */}
      <div className="toggle-buttons">
        <button 
          className={activeTab === 'but' ? 'active' : ''} 
          onClick={() => setActiveTab('but')}
        >
          Savoir-faire (BUT)
        </button>
        <button 
          className={activeTab === 'lang' ? 'active' : ''} 
          onClick={() => setActiveTab('lang')}
        >
          Langages & Outils
        </button>
      </div>

      <div className="content-area fade-in">
        
        {/* CAS A : Compétences BUT */}
        {activeTab === 'but' && (
          <div className="competences-grid">
            {skillsData.map((skill) => (
              <div key={skill.id} className="skill-card"> 
                <h3 className="card-title">
                  {formatTitle(skill.name)}
                </h3>
                {skill.description && (
                  <p className="description">{skill.description}</p>
                )}
              </div>
            ))}
          </div>
        )}

        {/* CAS B : Langages & Outils */}
        {activeTab === 'lang' && (
          <>
            {/* SOUS-FILTRES : J'ai ajouté Back-end et Système */}
            <div className="sub-filters-container">
              {['Tous', 'Web', 'Back-end', 'Bases de données', 'Outils', 'Système'].map((filter) => (
                <button
                  key={filter}
                  className={`sub-filter-btn ${activeLangFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveLangFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="languages-grid">
              {filteredLanguages.map((lang) => (
                <div key={lang.id} className="language-card fade-in">
                  <div className="logo-container">
                    <img 
                      src={languageLogos[lang.image] || lang.image} 
                      alt={lang.name} 
                    />
                  </div>
                  <p>{lang.name}</p>
                </div>
              ))}
              
              {filteredLanguages.length === 0 && (
                <p className="empty-msg">Aucun élément trouvé.</p>
              )}
            </div>
          </>
        )}

      </div>
    </section>
  );
}