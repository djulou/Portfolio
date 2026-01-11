import "../styles/Footer.css";

// Vous pouvez passer ces infos via des props ou les laisser en dur pour faire simple
export default function Footer() {
  const currentYear = new Date().getFullYear();

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
          <a href="dorian.julou@gmail.com">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}