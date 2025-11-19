import '../styles/Hero.css'
import paysage from '../../public/img/paysage.jpg';
import cv from '../../public/img/64.png';


export default function Hero() {
  return (
    <section className="hero">
        <img className="paysage" src={paysage} alt="paysage" />
        <div className="hero-content">
          <div className="first_texte">
            <h1>Bonjour</h1>
            <h2>Je m'appelle <span>Dorian</span></h2>
            <p>Bienvenue sur mon portfolio !</p>
          </div>
          <img className="profil" src={cv} alt="profil" />
        </div>
        <div className="scroll-arrow">
          <span>▼</span>
      </div>
      </section>
  );
};