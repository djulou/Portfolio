import portfolioData from './data/data.json';
import { PortfolioData } from './data/types'; // Pas besoin de .ts dans l'import

// Import des composants
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Passions from './components/Passions';


export default function App() {
  // On caste les données pour être sûr que TS valide la structure
  const data: PortfolioData = portfolioData as PortfolioData;

  return (
    <>
      <Header />
      <main>
        {/* Section Hero */}
        <Hero data={data.hero} /> 
        
        <div className="scroll-arrow">
          <span>▼</span>
        </div>

        {/* Section À propos (incluant Formations) */}
        <About 
          aboutData={data.about} 
          formationsData={data.formations} 
        />

        {/* Autres sections */}
        <Skills data={data.skills} />
        <Projects data={data.projects} />
        <Passions data={data.passions} />
      </main>
    </>
  );
}