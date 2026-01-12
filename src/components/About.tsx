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
  };

  return (
    <section id="apropos" className="about">
      
      {/* 1. DESCRIPTION (À PROPOS) */}
      <div className="about-description">
        {/* Vérifiez si vous avez un titre ou une image dans aboutData */}
        {aboutData.title && <h1>{aboutData.title}</h1>}
        <p>{aboutData.description}</p>
      </div>

      {/* 2. FORMATIONS (ÉDUCATION) */}
      <div className="formation">
        <h1>Formations</h1>
        {formationsData.map((formation) => (
          <div key={formation.id} className="lines">
            <div className="lieu">
              <p>{formation.year}</p>
              {/* Adaptez 'degree' et 'school' selon vos types réels */}
              <p>{formation.degree}</p> 
              <p>{formation.school}</p>
            </div>
            {/* Si les formations ont aussi une description ou des détails */}
            {formation.description && (
               <div className="details">
                 <p>{formation.description}</p>
               </div>
            )}
          </div>
        ))}
      </div>

      {/* 3. EXPÉRIENCES PRO */}
      <div className="formation"> {/* Note: Vous utilisez la classe 'formation' ici aussi pour le style */}
        <h1>Expériences Professionnelles</h1>
        {experiencesData.map((exp) => (
          <div key={exp.id} className="lines">
            <div className="lieu">
              <p>{exp.year}</p>
              <p>{exp.role}</p>
              <p>{exp.company}</p>
            </div>

            {/* Affichage des logos pour les technologies */}
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
    </section>
  );
}