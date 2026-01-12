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
      {/* ... description et formation ... */}

      {/* EXPÉRIENCES PRO */}
      <div className="formation">
        <h1>Expériences Professionnelles</h1>
        {experiencesData.map((exp) => (
          <div key={exp.id} className="lines">
            <div className="lieu">
              <p>{exp.year}</p>
              <p>{exp.role}</p>
              <p>{exp.company}</p>
            </div>

            {/* CORRECTION ICI : On utilise le logo */}
            {exp.technologies && exp.technologies.length > 0 && (
              <div className="exp-tags-container">
                {exp.technologies.map((techName, index) => {
                  // On cherche l'image associée au nom (ex: "React" -> reactLogo)
                  const logoSrc = languageLogos[techName];

                  return (
                    <span key={index} className="exp-tag">
                      {/* Si le logo existe, on l'affiche */}
                      {logoSrc && (
                        <img
                          src={logoSrc}
                          alt={techName}
                          className="exp-tag-icon"
                        />
                      )}
                      {/* Le nom de la techno */}
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
