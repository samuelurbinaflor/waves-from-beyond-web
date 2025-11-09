import React from "react";
import '../css/WFB.css'
import logoWFB from "../assets/WFB_sinfondo_blanco.png";

export default function WFB() {
  return (
    <div id="wfb">
      <img src={logoWFB} alt="" id="logowfb" />
      <div id="desc">
        <p>
          En Waves From Beyond, te pondrás en las botas de Karmela —una joven
          guarda forestal en su primer día de trabajo— que pronto descubrirá que
          el silencio del bosque puede ser más aterrador que cualquier grito.
          <br />
          <br />
          El turno de noche comienza tranquilo, algunas llamadas de campistas
          —nada especial— Hasta que suena el teléfono otra vez. <br />
          <br />
          Una llamada distinta. De auxilio y desesperada. Un asesino en serie
          que recientemente escapó de prisión está en el bosque, y va tras su
          víctima. <br />
          <br />
          Como guarda del bosque, proteger a sus visitantes es tu deber. Pero
          mientras intentas guiarla hacia un lugar seguro, comienzas a escuchar
          voces. Susurros que interfieren con la emisora de radio… las voces de
          las víctimas que no pudieron ser salvadas. <br />
          <br />
          Algunas dicen la verdad. <br />
          <br />
          Otras quieren arrastrarte con ellas.
          <br />
          <br />
          Dependerá de ti decidir en quién confiar.
          <br />
          <br />
          Cada decisión puede marcar la diferencia entre la vida y la muerte,
          tanto para la víctima como para ti.
        </p>
      </div>
    </div>
  );
}
