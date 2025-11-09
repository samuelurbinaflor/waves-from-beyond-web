import React from "react";
import "../css/WFB.css";
import logoWFB from "../assets/WFB_sinfondo_blanco.png";

export default function WFB() {
  return (
    <div id="wfb">
      <img src={logoWFB} alt="" id="logowfb" />
      <div id="desc">
        <p>
          In Waves From Beyond, you will play as Karmela - a young ranger on her
          first day at work - who will soon learn that the forest silence can be
          as terrifying as any scream.
          <br />
          <br />
          The night shift begins peacefully. Calls from some campers - nothing
          special - until the phone rings again.
          <br />
          <br />
          This one is a different call. A call of despair asking for aid. A
          serial killer roams the forest after escaping from prison and is after
          a new victim.
          <br />
          <br />
          As a forest ranger, protecting its visitors is your duty. But as you
          guide them towards a safe haven you start hearing voices. Whispers
          that interfere with the radio frequency waves… the voices of the
          innocents ended by the killer's blade.
          <br />
          <br />
          Some spirits tell the truth.
          <br />
          <br />
          Some just want to drag you with them.
          <br />
          <br />
          It depends on which one you want to believe.
          <br />
          <br />
          Each decision might be the line between life and death both for
          the victim and you.
        </p>
      </div>
    </div>
  );
}
