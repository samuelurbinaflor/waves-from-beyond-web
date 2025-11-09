import React from 'react';

export default function TeamModal({ open, onClose }) {
  if (!open) return null;

  return (
    <>
      {/* Fondo borroso */}
      <div className="modal-backdrop" onClick={onClose} />

      {/* Ventana modal */}
      <div className="modal-window">
        <div id="newspaper">
          <header>
            <h1>Meet Our Team - Êttudio Pitijopo</h1>
            <p>Conoce a las personas detrás de nuestro proyecto indie.</p>
          </header>

          <article>
            <h2>🎨 Diseño</h2>
            <p>Juan Pérez - Diseñador Principal</p>
            <p>María López - Diseño Gráfico y UI/UX</p>
          </article>

          <article>
            <h2>💻 Programación</h2>
            <p>Samuel Fernández - Programador Principal</p>
          </article>

          <article>
            <h2>📢 Marketing y Comunicación</h2>
            <p>Sara Gómez - Community Manager</p>
          </article>

          <footer>
            Êttudio Pitijopo - Gracias por seguir nuestro trabajo.
          </footer>
        </div>
      </div>
    </>
  );
}
