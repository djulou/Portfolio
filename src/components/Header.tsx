import { useState, useEffect } from 'react';
import ContactModal from './ContactModal'; // <-- Import du composant
import '../styles/Header.css';

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);
  const [isContactOpen, setIsContactOpen] = useState(false); // <-- Nouvel état pour la modale

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > window.innerHeight * 0.7) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fonction pour gérer le clic sur Contact
  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault(); // Empêche le saut vers #contact
    setIsContactOpen(true);
  };

  return (
    <>
      <header className={isVisible ? 'visible' : ''}>
        <h1>Portfolio</h1>
        <nav>
          <ul>
            <li><a href="#apropos">À propos de moi</a></li>
            <li><a href="#competences">Compétences</a></li>
            <li><a href="#projets">Projets</a></li>
            <li><a href="#passions">Passions</a></li>
            {/* Modification ici : onClick déclenche la modale */}
            <li>
              <a href="#contact" onClick={handleContactClick}>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Le composant Modale est ajouté ici, il ne s'affiche que si isOpen est true */}
      <ContactModal 
        isOpen={isContactOpen} 
        onClose={() => setIsContactOpen(false)} 
      />
    </>
  );
}