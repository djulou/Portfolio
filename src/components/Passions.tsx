import { useState } from 'react';
import '../styles/Passions.css';

// --- Imports images (Garde tes imports ici) ---
import sportImg from '../../public/img/sport.jpg'; 
import handImg from '../../public/img/hand.jpg';
import infoImg from '../../public/img/info.jpg';
import voitureImg from '../../public/img/voiture.jpg';

interface PassionsProps {
  data: string[]; 
}

export default function Passions({ data }: PassionsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // --- Ton Dictionnaire d'images ---
  const imagesMap: { [key: string]: string } = {
    "/images/sport.jpg": sportImg,
    "/images/hand.jpg": handImg,
    "/images/info.jpg": infoImg,
    "/images/voiture.jpg": voitureImg,
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  if (!data || data.length === 0) return null;

  const currentKey = data[currentIndex];
  const imageToDisplay = imagesMap[currentKey] || currentKey;

  return (
    <section id="passions" className="passion">
      {/* Titre identique à Formation */}
      <h1>Passions</h1>

      <div className="carousel">
        <button className="prev" onClick={prevSlide}>❮</button>
        
        <div className="slides">
            <img 
              src={imageToDisplay} 
              alt={`passion ${currentIndex + 1}`} 
            />
        </div>

        <button className="next" onClick={nextSlide}>❯</button>

        {/* --- NOUVEAU : Compteur intégré dans l'image (Badge) --- */}
        <div className="counter-badge">
            {currentIndex + 1} / {data.length}
        </div>
      </div>
    </section>
  );
}