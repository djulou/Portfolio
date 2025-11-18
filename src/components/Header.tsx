import '../styles/Header.css';

export default function Header() {
  return (
    <header>
      <h1>Portfolio</h1>
      <nav>
        <ul>
          <li>
            <a href="#apropos">À propos de moi</a>
          </li>
          <li>
            <a href="#competences">Compétences</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};