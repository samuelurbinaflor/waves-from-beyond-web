import React, { useState } from "react";

import WFB from "./components/WFB.jsx";
import DevLogs from "./components/DevLogs.jsx"; 
import Carousel from "./components/Carousel.jsx";
import Sidebar from "./components/Sidebar.jsx";
import DevLogsModal from "./components/Sprints/DevlogsModal.jsx";

function App() {
  const [devLogsOpen, setDevLogsOpen] = useState(false);

  return (
    <div id="body">
      <div id="main">
        <WFB />

        <div id="extra">
          <div id="devlogs">
            <DevLogs onOpen={() => setDevLogsOpen(true)} />
          </div>

          <Carousel />
        </div>
      </div>

      <Sidebar />

      <DevLogsModal
        open={devLogsOpen}
        onClose={() => setDevLogsOpen(false)}
      />
    </div>
  );
}

export default App;
