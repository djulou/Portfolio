import { useState, useEffect } from 'react';
import '../styles/Header.css';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Traduction exacte de ton JS : window.innerHeight * 0.7
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // On attache l'écouteur d'événement
    window.addEventListener('scroll', handleScroll);
    
    // Nettoyage : très important en React pour éviter les bugs quand on change de page
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={isVisible ? 'visible' : ''}>
      <h1>Portfolio</h1>
      <nav>
        <ul>
          <li><a href="#apropos">À propos de moi</a></li>
          <li><a href="#competences">Compétences</a></li>
          <li><a href="#projets">Projets</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}