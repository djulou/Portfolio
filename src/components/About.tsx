import { AboutData, Formation } from '../data/types';
import '../styles/About.css'; // Ton fichier de style dédié

interface AboutProps {
  aboutData: AboutData;
  formationsData: Formation[];
}

export default function About({ aboutData, formationsData }: AboutProps) {
  return (
    <section id="apropos" className="about">

      {/* Description dynamique venant du JSON */}
      <p className="about_me">
        {aboutData.description}
      </p>

      {/* Partie Formations (incluse dans la section About sur ton site) */}
      <div className="formation">
        <h1>Formation</h1>
        {formationsData.map((formation) => (
          <div key={formation.id} className="lines">
            <div className="lieu">
              <p>{formation.year}</p>
              <p>{formation.degree}</p>
              <p>{formation.school}</p>
            </div>
            {formation.description && <p>{formation.description}</p>}
          </div>
        ))}
      </div>

    </section>
  );
};