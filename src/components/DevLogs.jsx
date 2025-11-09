import React from "react";
import FirstSprint from "./Sprints/FirstSprint.jsx";
import SecondSprint from "./Sprints/SecondSprint.jsx";
import ThirdSprint from "./Sprints/ThirdSprint.jsx";
import FourthSprint from "./Sprints/FourthSprint.jsx";

import "../css/newspaper.css";

export default function DevLogs({ onOpen }) {
  const isMobile = window.innerWidth <= 700;

  return (
    <div id="devlogs_body">
      {!isMobile ? (
        <div
          id="devlogs-preview"
          onClick={onOpen}
          style={{ cursor: "pointer" }}
        >
          <FirstSprint />
        </div>
      ) : (
        <FirstSprint />
      )}
    </div>
  );
}
