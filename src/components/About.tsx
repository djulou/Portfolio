import { useState } from "react";
import { AboutData, Formation, Experience } from "../data/types";
import "../styles/About.css";

// --- IMPORTATION DES LOGOS ---
import htmlLogo from "../../public/img/html.webp";
import cssLogo from "../../public/img/css.webp";
import reactLogo from "../../public/img/react.webp";
import tsLogo from "../../public/img/typescript.webp";
import gitLogo from "../../public/img/git.webp";
import phpLogo from "../../public/img/php.webp";
import postgresqlLogo from "../../public/img/postgresql.webp";
import figmaLogo from "../../public/img/figma.webp";
import pythonLogo from "../../public/img/python.webp";
import javaLogo from "../../public/img/java.webp";
import cLogo from "../../public/img/c.webp";
import linuxLogo from "../../public/img/linux.webp";
import bashLogo from "../../public/img/bash.webp";
import mongoLogo from "../../public/img/mongo.webp";
import iosLogo from "../../public/img/ios.webp";
import windowsLogo from "../../public/img/windows.webp";
import mysqlLogo from "../../public/img/mysql.webp";
import jsLogo from "../../public/img/javascript.webp";
import jiraLogo from "../../public/img/jira.webp";
import umlLogo from "../../public/img/uml.webp";
import apacheLogo from "../../public/img/apache.webp";
import ganttLogo from "../../public/img/gantt.webp";
import canvaLogo from "../../public/img/canva.webp";
import fastapiLogo from "../../public/img/fastapi.webp";
import dockerLogo from "../../public/img/docker.webp";
import viteLogo from "../../public/img/vite.webp";

interface AboutProps {
  aboutData: AboutData;
  formationsData: Formation[];
  experiencesData: Experience[];
}

export default function About({
  aboutData,
  formationsData,
  experiencesData,
}: AboutProps) {
  // State pour gérer l'onglet actif ('formations' ou 'experiences')
  const [activeTab, setActiveTab] = useState<"formations" | "experiences">("formations");

  const languageLogos: { [key: string]: string } = {
    HTML: htmlLogo,
    HTML5: htmlLogo,
    CSS: cssLogo,
    CSS3: cssLogo,
    React: reactLogo,
    TypeScript: tsLogo,
    Git: gitLogo,
    PHP: phpLogo,
    PostgreSQL: postgresqlLogo,
    Figma: figmaLogo,
    Python: pythonLogo,
    Java: javaLogo,
    C: cLogo,
    Linux: linuxLogo,
    Bash: bashLogo,
    MySQL: mysqlLogo,
    MongoDB: mongoLogo,
    IOS: iosLogo,
    Windows: windowsLogo,
    JavaScript: jsLogo,
    Jira: jiraLogo,
    UML: umlLogo,
    Apache: apacheLogo,
    Gantt: ganttLogo,
    Canva: canvaLogo,
    FastAPI: fastapiLogo,
    Docker: dockerLogo,
    Vite: viteLogo,
  };

  return (
    <section id="apropos" className="about">
      {/* 1. DESCRIPTION GÉNÉRALE */}
      <div className="about-description">
        {aboutData.title && <h1>{aboutData.title}</h1>}
        
        {/* MODIFICATION ICI : Pour que le lien HTML fonctionne */}
        <p dangerouslySetInnerHTML={{ __html: aboutData.description }}></p>
      </div>

      {/* 2. BOUTONS DE NAVIGATION (TABS) */}
      <div className="tabs-container">
        <button
          className={`tab-btn ${activeTab === "formations" ? "active" : ""}`}
          onClick={() => setActiveTab("formations")}
        >
          Formations
        </button>
        <button
          className={`tab-btn ${activeTab === "experiences" ? "active" : ""}`}
          onClick={() => setActiveTab("experiences")}
        >
          Expériences
        </button>
      </div>

      {/* 3. CONTENU (Affichage conditionnel) */}
      <div className="formation-content">
        
        {/* BLOC FORMATIONS */}
        {activeTab === "formations" && (
          <div className="formation-list fade-in">
            <h2>Parcours Universitaire</h2>
            {formationsData.map((formation) => (
              <div key={formation.id} className="lines">
                <div className="lieu">
                  <p className="year">{formation.year}</p>
                  <p className="degree">{formation.degree}</p>
                  <p className="school">{formation.school}</p>
                </div>
                {formation.description && (
                  <div className="details">
                    <p>{formation.description}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {/* BLOC EXPÉRIENCES */}
        {activeTab === "experiences" && (
          <div className="experience-list fade-in">
            <h2>Expériences Professionnelles</h2>
            {experiencesData.map((exp) => (
              <div key={exp.id} className="lines">
                <div className="lieu">
                  <p className="year">{exp.year}</p>
                  <p className="role">{exp.role}</p>
                  <p className="company">{exp.company}</p>
                </div>

                {/* Tags Technos avec Logos */}
                {exp.technologies && exp.technologies.length > 0 && (
                  <div className="exp-tags-container">
                    {exp.technologies.map((techName, index) => {
                      const logoSrc = languageLogos[techName];
                      return (
                        <span key={index} className="exp-tag">
                          {logoSrc && (
                            <img
                              src={logoSrc}
                              alt={techName}
                              className="exp-tag-icon"
                            />
                          )}
                          {techName}
                        </span>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}