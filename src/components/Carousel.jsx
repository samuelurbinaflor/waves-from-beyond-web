import React, { useState, useEffect } from "react";
import "../css/carousel.css";
import CarouselModal from "./CarouselModal.jsx";

import img1 from "../assets/carousel/IMG_0825.PNG";
import img2 from "../assets/carousel/IMG_0826.PNG";
import img3 from "../assets/carousel/IMG_0827.PNG";
import img4 from "../assets/carousel/IMG_0828.PNG";
import img5 from "../assets/carousel/IMG_0829.PNG";
import img6 from "../assets/carousel/IMG_0830.PNG";
import img7 from "../assets/carousel/IMG_0832.PNG";
import img8 from "../assets/carousel/IMG_0833.PNG";
import img9 from "../assets/carousel/IMG_0834.PNG";
import img10 from "../assets/carousel/IMG_0835.PNG";

export default function Carousel() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];
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

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 700);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 700);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Abrir modal al click
  const openModal = (index) => {
    setModalStart(index);
    setModalOpen(true);
  };

  return (
    <>
      {!isMobile ? (
        <div id="app" className="carousel">
          <img
            src={images[current]}
            alt={`Imagen ${current}`}
            onClick={() => openModal(current)}
            style={{ cursor: "pointer" }}
          />
        </div>
      ) : (
        <div id="gallery" className="carousel-gallery">
          <div>
            <h1>Concept Art Gallery</h1>
            <p>Ilustrations made by Ángela Amate</p>
          </div>
          {images.map((img, index) => (
            <img src={img} alt={`Imagen ${index + 1}`} />
          ))}
        </div>
      )}

      <CarouselModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        images={images}
        startIndex={modalStart}
      />
    </>
  );
}
