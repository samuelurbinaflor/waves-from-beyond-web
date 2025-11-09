import React from "react";


export default function FirstSprint() {
  return (
    <div id='newspaper'>
      <header>
        <h1>Boletín del Sprint - PixelQuest Studios</h1>
        <p>
          Edición Semana 5 - ¡Novedades frescas del desarrollo de nuestro juego!
        </p>
      </header>

      <article>
        <h2>🎮 Objetivos del Sprint</h2>
        <p>Durante esta semana, el equipo se ha centrado en:</p>
        <ul>
          <li>Implementación del sistema de combate básico.</li>
          <li>Diseño y animación del jefe final del nivel 1.</li>
          <li>Corrección de errores en el motor de físicas de colisiones.</li>
          <li>Optimización de la carga de texturas y sprites.</li>
        </ul>
      </article>

      <article>
        <h2>🛠 Logros Destacados</h2>
        <p>¡Buenas noticias! Se han alcanzado los siguientes hitos:</p>
        <ul>
          <li>
            El <span class="highlight">jefe final</span> ya se mueve y ataca
            según patrón definido.
          </li>
          <li>
            El <span class="highlight">sistema de partículas</span> para
            hechizos y explosiones está integrado.
          </li>
          <li>
            Se han reducido los <span class="highlight">tiempos de carga</span>{" "}
            un 30% gracias a la optimización de sprites.
          </li>
        </ul>
      </article>

      <article>
        <h2>🐞 Retos y Obstáculos</h2>
        <p>El equipo ha encontrado algunos contratiempos:</p>
        <ul>
          <li>
            El enemigo “Slime Gigante” se queda atascado en esquinas del mapa.
          </li>
          <li>
            El menú de inventario sufre de problemas de escalado en resoluciones
            menores a 720p.
          </li>
          <li>
            El sistema de guardado rápido aún necesita ajustes para no perder
            progreso.
          </li>
        </ul>
      </article>

      <article>
        <h2>🔮 Próximos Pasos</h2>
        <p>Para el siguiente sprint, planeamos:</p>
        <ul>
          <li>Resolver los bugs pendientes del nivel 1.</li>
          <li>Crear animaciones de victoria y derrota para el jugador.</li>
          <li>
            Comenzar el diseño del nivel 2 con temática de bosque encantado.
          </li>
          <li>
            Probar la integración de música y efectos de sonido dinámicos.
          </li>
        </ul>
      </article>

      <footer>
        PixelQuest Studios - Mantente al día con nuestros avances semanales.
      </footer>
    </div>
  );
}
