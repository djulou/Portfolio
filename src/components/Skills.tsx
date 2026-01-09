import { useState } from 'react';
import { Skill, Language } from '../data/types';
import '../styles/Skills.css';

// --- IMPORTATION DES LOGOS ---
import htmlLogo from '../../public/img/html.png';
import cssLogo from '../../public/img/css.png';
import reactLogo from '../../public/img/react.png';
import tsLogo from '../../public/img/typescript.png';
import gitLogo from '../../public/img/git.png';

interface SkillsProps {
  skillsData: Skill[];
  languagesData: Language[];
}

export default function Skills({ skillsData, languagesData }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'but' | 'lang'>('but');

  const languageLogos: { [key: string]: string } = {
    "/img/html.png": htmlLogo,
    "/img/css.png": cssLogo,
    "/img/react.png": reactLogo,
    "/img/typescript.png": tsLogo,
    "/img/git.png": gitLogo,
  };

  // --- NOUVELLE FONCTION ---
  // Cette fonction prend le titre, isole le premier mot et lui applique le style
  const formatTitle = (title: string) => {
    const words = title.split(' '); // Coupe la phrase à chaque espace
    const firstWord = words[0];     // Le verbe (Gérer, Conduire...)
    const rest = words.slice(1).join(' '); // Le reste de la phrase

    return (
      <>
        <span className="verb-highlight">{firstWord}</span> {rest}
      </>
    );
  };

  return (
    <section id="competences" className="comp_container">
      
      <h1 className="main-title">Compétences</h1>

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
                
                {/* --- MODIFICATION ICI : Appel de la fonction formatTitle --- */}
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

        {/* CAS B : Langages */}
        {activeTab === 'lang' && (
          <div className="languages-grid">
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

      </div>

    </section>
  );
}