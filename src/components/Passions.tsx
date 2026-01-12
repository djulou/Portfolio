import { useState } from 'react';
import '../styles/Passions.css';
import { PassionItem } from '../data/types';

// --- Imports images ---
import sportImg from '../../public/img/sport.webp'; 
import handImg from '../../public/img/hand.webp';
import infoImg from '../../public/img/info.webp';
import voitureImg from '../../public/img/voiture.webp';


interface PassionsProps {
  data: PassionItem[]; // On attend maintenant un tableau d'objets
}

export default function Passions({ data }: PassionsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesMap: { [key: string]: string } = {
    "/images/sport.webp": sportImg,
    "/images/hand.webp": handImg,
    "/images/info.webp": infoImg,
    "/images/voiture.webp": voitureImg,
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === data.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? data.length - 1 : prev - 1));
  };

  if (!data || data.length === 0) return null;

  // On récupère l'objet complet (image + textes)
  const currentItem = data[currentIndex];
  const imageToDisplay = imagesMap[currentItem.image] || currentItem.image;

  return (
    <section id="passions" className="passion">
      <h1>Passions</h1>

      <div className="carousel">
        <button className="prev" onClick={prevSlide}>❮</button>
        
        <div className="slides">
            <img 
              src={imageToDisplay} 
              alt={currentItem.title} 
            />
            
            {/* --- NOUVEAU : Bloc de texte --- */}
            <div className="passion-caption">
              <h3>{currentItem.title}</h3>
              <p>{currentItem.description}</p>
            </div>
        </div>

        <button className="next" onClick={nextSlide}>❯</button>

        <div className="counter-badge">
            {currentIndex + 1} / {data.length}
        </div>
      </div>
    </section>
  );
}