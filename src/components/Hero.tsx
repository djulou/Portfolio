import { HeroData } from '../data/types';
import "../styles/Hero.css";

import paysage from "../../public/img/paysage.webp";
import profil from "../../public/img/64.webp";
import linkedin from "../../public/img/linkedin.webp";

interface HeroProps {
  data: HeroData;
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="hero">
      <img className="paysage" src={paysage} alt="paysage" />
      
      <div className="hero-content">
        {/* BLOC GAUCHE : Texte + Boutons */}
        <div className="text-container">
            <div className="first_texte">
              <h1>{data.greeting}</h1>
              <h2>
                {data.intro} <span>{data.name}</span>
              </h2>
              <p>{data.welcome}</p>
            </div>

            {/* Nouveau conteneur pour les boutons en dessous du texte */}
            <div className="action-buttons">
                <a className="cv" href={data.cvLink} download>
                  <button>CV</button>
                </a>
                
                <a href={data.linkedinLink} target="_blank" rel="noreferrer">
                  <img className="linkedin-icon" src={linkedin} alt="linkedin" />
                </a>
            </div>
        </div>

        {/* BLOC DROITE : Image de profil seule */}
        <img className="profil" src={profil} alt="profil" />
      </div>

      <div className="scroll-arrow">
        <span>▼</span>
      </div>
    </section>
  );
}