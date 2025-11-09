import React, { useState, useEffect } from 'react';
import '../css/carousel.css';
import CarouselModal from './CarouselModal.jsx';

import img1 from '../assets/carousel/IMG_0825.PNG';
import img2 from '../assets/carousel/IMG_0826.PNG';
import img3 from '../assets/carousel/IMG_0827.PNG';

export default function Carousel() {
  const images = [img1, img2, img3 /* ... */];
  const [current, setCurrent] = useState(0);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalStart, setModalStart] = useState(0);

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  // autoplay
  useEffect(() => {
    const interval = setInterval(next, 3000);
    return () => clearInterval(interval);
  }, [current]);

  // Abrir modal al click
  const openModal = (index) => {
    setModalStart(index);
    setModalOpen(true);
  };

  return (
    <>
      <div id='app' className="carousel">
        <img 
          src={images[current]} 
          alt={`Imagen ${current}`} 
          onClick={() => openModal(current)}
          style={{ cursor: 'pointer' }}
        />
      </div>

      <CarouselModal 
        open={modalOpen} 
        onClose={() => setModalOpen(false)} 
        images={images}
        startIndex={modalStart}
      />
    </>
  );
}
