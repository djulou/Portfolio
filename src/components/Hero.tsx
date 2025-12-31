import { HeroData } from '../data/types';
import "../styles/Hero.css";

import paysage from "../../public/img/paysage.jpg";
import profil from "../../public/img/64.png";
import linkedin from "../../public/img/linkedin.png";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="hero">
      {/* Image de fond dynamique */}
      <img className="paysage" src={paysage} alt="paysage" />
      
      <div className="hero-content">
        <div className="first_texte">
          <h1>{data.greeting}</h1>
          <h2>
            {data.intro} <span>{data.name}</span>
          </h2>
          <p>{data.welcome}</p>
        </div>

        <div>
            {/* Photo de profil dynamique */}
            <img className="profil" src={profil} alt="profil" />
            
            {/* Bouton CV dynamique */}
            <a className="cv" href={data.cvLink} download>
              <button>CV</button>
            </a>
            
            {/* Lien LinkedIn dynamique */}
            <a href={data.linkedinLink} target="_blank" rel="noreferrer">
              <img src={linkedin} alt="linkedin" />
            </a>
        </div>
      </div>

      <div className="scroll-arrow">
        <span>▼</span>
      </div>
    </section>
  );
}