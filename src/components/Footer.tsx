import { useState } from "react";
import "../styles/Footer.css";
import ContactModal from "./ContactModal";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  // 1. On crée l'état (state) qui gère si c'est ouvert ou fermé
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {currentYear} <span className="highlight">Mon Nom</span>. Tous droits réservés.
        </p>
        
        <div className="footer-links">
          <a href="https://www.linkedin.com/in/dorian-julou/" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com/djulou" target="_blank" rel="noreferrer">
            GitHub
          </a>
          
          {/* 2. Le bouton qui déclenche l'ouverture (passe à true) */}
          <button 
            className="footer-link-btn" 
            onClick={() => setModalOpen(true)}
          >
            Contact
          </button>
        </div>
      </div>

      {/* 3. On appelle la modale en lui passant les deux props demandées */}
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </footer>
  );
}