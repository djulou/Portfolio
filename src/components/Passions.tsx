import { useState } from 'react';
import '../styles/Passions.css';

// 1. IMPORTATION DES IMAGES
// Assure-toi que les chemins correspondent à l'endroit où sont tes images
// Si elles sont dans public/img, le chemin relatif depuis src/components est souvent ../../public/img/
import sportImg from '../../public/img/sport.jpg'; 
import handImg from '../../public/img/hand.jpg';
import infoImg from '../../public/img/info.jpg';
import voitureImg from '../../public/img/voiture.jpg';

interface PassionsProps {
  data: string[]; 
}

export default function Passions({ data }: PassionsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 2. CRÉATION DU DICTIONNAIRE (MAPPING)
  // La clé (à gauche) doit être IDENTIQUE à ce qui est écrit dans ton fichier data.json
  // La valeur (à droite) est la variable importée ci-dessus
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

  // Récupération de la clé (le chemin texte venant du JSON)
  const currentKey = data[currentIndex];
  
  // Récupération de la vraie image importée via le dictionnaire
  // Si on ne trouve pas l'import, on utilise la clé comme fallback
  const imageToDisplay = imagesMap[currentKey] || currentKey;

  return (
    <section className="passion">
      <h1><span>Passions</span></h1>
      <div className="carousel">
        <button className="prev" onClick={prevSlide}>❮</button>
        
        <div className="slides">
            <img 
              src={imageToDisplay} 
              alt={`passion ${currentIndex + 1}`} 
              style={{ display: 'block', width: '100%' }} 
            />
        </div>

        <button className="next" onClick={nextSlide}>❯</button>
      </div>
      
      <p style={{textAlign: 'center', marginTop: '10px'}}>
        {currentIndex + 1} / {data.length}
      </p>
    </section>
  );
}