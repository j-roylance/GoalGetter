import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import UploadPage from "./uploadPage/uploadPage";
import GoalDirectories from "./goalDirectories/goalDirectories";
import "../public/css/style.css";


function App() {
  const [JSONData, setJSONData] = useState("");
  return (
    <div>
        <BrowserRouter style={{ height: "100%" }}>
          <Routes style={{ height: "100%" }}>
            <Route path="/" element={<UploadPage setter={setJSONData} />} />
            <Route path="/goalDirectories" element={<GoalDirectories setter={setJSONData} />} />
          </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;