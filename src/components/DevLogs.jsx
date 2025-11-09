import React from "react";
import FirstSprint from "./Sprints/FirstSprint.jsx";

export default function DevLogs({ onOpen }) {
  return (
    <div id="devlogs-preview" onClick={onOpen} style={{ cursor: "pointer" }}>
      <FirstSprint />
    </div>
  );
}
