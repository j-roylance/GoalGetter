import React, { useEffect, useState } from "react";
import "./uploadPage.css"

function ChangePage() {
    window.location.href = "/goalDirectories"
}

function UploadPage({setter}) {
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
        console.log("hey");
        const fileText = event.target.result;
        setFileContent(fileText);
        const jsonString = JSON.stringify(fileText, undefined, 2);
        setter(jsonString);
        
        // Create download link for the JSON file
        const link = document.createElement('a');
        link.download = 'data.json';
        const blob = new Blob([jsonString], { type: 'application/json' });
        link.href = URL.createObjectURL(blob);
        link.click();
        ChangePage();
    };

    return (
        <div>
            <div className="startText">
                <p className="fatHeader">Upload Information in txt Format</p>
                &nbsp;
                <p>Click on the "Choose File" button to upload a file:</p>
            </div>
            <div className="uploaderButton">
                <input id="fileInput" type="file" name="file" />
                <pre id="fileContent">{fileContent}</pre>
            </div>
        </div>
    );
}

export default UploadPage;