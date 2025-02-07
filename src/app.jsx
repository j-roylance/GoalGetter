import React, { useEffect, useState } from "react";
import "../public/css/style.css";

function App() {
  const [fileContent, setFileContent] = useState("");

  useEffect(() => {
    // No need for init function, we can directly handle this in useEffect
    const handleFileSelect = (event) => {
      const reader = new FileReader();
      reader.onload = handleFileLoad;
      reader.readAsText(event.target.files[0]);
    };

    const fileInput = document.getElementById('fileInput');
    fileInput.addEventListener('change', handleFileSelect, false);

    return () => {
      fileInput.removeEventListener('change', handleFileSelect);
    };
  }, []);

  const handleFileLoad = (event) => {
    const fileText = event.target.result;
    setFileContent(fileText);
    const jsonString = JSON.stringify(fileText, undefined, 2);
    
    // Create download link for the JSON file
    const link = document.createElement('a');
    link.download = 'data.json';
    const blob = new Blob([jsonString], { type: 'application/json' });
    link.href = URL.createObjectURL(blob);
    link.click();
  };

  return (
    <div className="startText">
      <div className="midtext" id="Top">
        <p className="fatHeader">Upload Information in txt Format</p>
      </div>
      <p>Click on the "Choose File" button to upload a file:</p>
      <input id="fileInput" type="file" name="file" />
      <pre id="fileContent">{fileContent}</pre>
    </div>
  );
}

export default App;
