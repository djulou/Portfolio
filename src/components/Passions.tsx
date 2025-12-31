import { useState } from 'react';
import '../styles/Passions.css';

interface PassionsProps {
  data: string[]; // Un simple tableau de chemins d'images (strings)
}

export default function Passions({ data }: PassionsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    // Si on est à la fin, on revient au début (0), sinon on avance (+1)
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    // Si on est au début (0), on va à la fin, sinon on recule (-1)
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  if (!data || data.length === 0) return null;

  return (
    <section className="passion">
      <h1><span>Passions</span></h1>
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>❮</button>
        
        <div className="slides">
            {/* On affiche seulement l'image correspondant à l'index actuel */}
            <img 
              src={data[currentIndex]} 
              alt={`passion ${currentIndex + 1}`} 
              style={{ display: 'block', width: '100%' }} 
            />
        </div>

        <button className="next" onClick={nextSlide}>❯</button>
      </div>
      
      {/* Optionnel : Indicateur de position (ex: 1/4) */}
      <p style={{textAlign: 'center', marginTop: '10px'}}>
        {currentIndex + 1} / {data.length}
      </p>
    </section>
  );
}