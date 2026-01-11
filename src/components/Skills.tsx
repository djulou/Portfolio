import { useState } from 'react';
import { Skill, Language } from '../data/types';
import '../styles/Skills.css';

// --- IMPORTATION DES LOGOS ---
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
import mongoLogo from '../../public/img/mongo.webp';
import iosLogo from '../../public/img/ios.webp';
import windowsLogo from '../../public/img/windows.webp';
import mysqlLogo from '../../public/img/mysql.webp';
import jsLogo from '../../public/img/javascript.webp';
import jiraLogo from '../../public/img/jira.webp';
import umlLogo from '../../public/img/uml.webp';
import apacheLogo from "../../public/img/apache.webp";
import ganttLogo from "../../public/img/gantt.webp";
import canvaLogo from "../../public/img/canva.webp";

interface SkillsProps {
  skillsData: Skill[];
  languagesData: Language[];
}

export default function Skills({ skillsData, languagesData }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<'but' | 'lang'>('but');
  const [activeLangFilter, setActiveLangFilter] = useState<string>('Tous');

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
    "Figma": figmaLogo,
    "Python": pythonLogo,
    "Java": javaLogo,
    "C": cLogo,
    "Linux": linuxLogo,
    "Bash": bashLogo,
    "MySQL": mysqlLogo,
    "MongoDB": mongoLogo,
    "IOS": iosLogo,
    "Windows": windowsLogo,
    "JavaScript": jsLogo,
    "Jira": jiraLogo,
    "UML": umlLogo,
    "Apache": apacheLogo,
    "Gantt": ganttLogo,
    "Canva": canvaLogo,
  };

  const filteredLanguages = languagesData.filter((lang) => {
    if (activeLangFilter === 'Tous') return true;
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
            <div className="sub-filters-container">
              {['Tous', 'Web','Front-end', 'Back-end', 'Logiciel', 'Algorithmique','Data','Bases de données', 'Outils', 'Système'].map((filter) => (
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
                      src={languageLogos[lang.name] || lang.image} 
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