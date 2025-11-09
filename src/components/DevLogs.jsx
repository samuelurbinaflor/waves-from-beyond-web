import React from "react";
import FirstSprint from "./Sprints/FirstSprint.jsx";
import SecondSprint from "./Sprints/SecondSprint.jsx";

export default function DevLogs({ onOpen }) {
  const isMobile = window.innerWidth <= 700;

  return (
    <div id="devlogs-preview" onClick={onOpen} style={{ cursor: "pointer" }}>
      {!isMobile ? (
        <FirstSprint />
      ) : (
        <div id="sprints">
          <FirstSprint />
          <SecondSprint />
        </div>
      )}
    </div>
  );
}
