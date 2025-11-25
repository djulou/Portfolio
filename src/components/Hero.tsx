import "../styles/Hero.css";
import paysage from "../../public/img/paysage.jpg";
import cv from "../../public/img/64.png";

export default function Hero() {
  return (
    <section className="hero">
      <img className="paysage" src={paysage} alt="paysage" />
      <div className="hero-content">
        <div className="first_texte">
          <h1>Bonjour</h1>
          <h2>
            Je m'appelle <span>Dorian</span>
          </h2>
          <p>Bienvenue sur mon portfolio !</p>
        </div>
        <div>
            <img className="profil" src={cv} alt="profil" />
            <a className="cv" href="files/cv.pdf" download>
              <button>CV</button>
            </a>
            <a href="https://www.linkedin.com/in/dorian-julou/"><img src="/img/linkedin.png" alt="linkedin" /></a>
          </div>
      </div>
      <div className="scroll-arrow">
        <span>▼</span>
      </div>
    </section>
  );
}
