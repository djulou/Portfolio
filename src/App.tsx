import { useState } from 'react'; // 1. Import de useState
import portfolioData from './data/data.json';
import { PortfolioData } from './data/types'; // Import de Project pour le typageS

import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Passions from './components/Passions';

// Petit style inline pour les boutons (ou à mettre dans un CSS à part)
import './styles/App.css';

export default function App() {
  const data: PortfolioData = portfolioData as PortfolioData;

  // 2. État pour stocker le filtre actuel ('Tous' par défaut)
  const [activeFilter, setActiveFilter] = useState<string>('Tous');

  // 3. La variable magique : on filtre les projets AVANT le rendu
  const filteredProjects = data.projects.filter((project) => {
    if (activeFilter === 'Tous') return true; // Si 'Tous', on garde tout
    return project.category === activeFilter; // Sinon, on garde si la catégorie correspond
  });

  return (
    <>
      <Header />
      <main>
        <Hero data={data.hero} /> 
        
        <div className="scroll-arrow">
          <span>▼</span>
        </div>

        <About 
          aboutData={data.about} 
          formationsData={data.formations} 
        />

        <Skills data={data.skills} />


        {/* 5. On passe la variable FILTRÉE au lieu de data.projects brut */}
        <Projects data={data.projects} />
        
        <Passions data={data.passions} />
      </main>
    </>
  );
}