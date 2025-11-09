import React, { useState } from 'react';
import '../css/carousel.css';

export default function CarouselModal({ open, onClose, images, startIndex }) {
  const [current, setCurrent] = useState(startIndex || 0);

  if (!open) return null;

  const next = () => setCurrent((current + 1) % images.length);
  const prev = () => setCurrent((current - 1 + images.length) % images.length);

  return (
    <>
      <div className="carousel-modal-backdrop" onClick={onClose} />
      <div className="carousel-modal-window">
        <img src={images[current]} alt={`Imagen ${current}`} />
        <div className="carousel-modal-controls">
          <button onClick={prev}>‹</button>
          <span>{current + 1} / {images.length}</span>
          <button onClick={next}>›</button>
        </div>
      </div>
    </>
  );
}
