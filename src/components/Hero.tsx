import '../styles/Hero.css'

export default function Hero() {
  return (
    <section className="hero">
        <img className="paysage" src="/public/img/paysage.jpg" alt="paysage" />
        <div className="hero-content">
          <div className="first_texte">
            <h1>Bonjour</h1>
            <h2>Je m'appelle <span>Dorian</span></h2>
            <p>Bienvenue sur mon portfolio !</p>
          </div>
          <img className="profil" src="/public/img/64.png" alt="profil" />
        </div>
        <div className="scroll-arrow">
          <span>▼</span>
      </div>
      </section>
  );
};