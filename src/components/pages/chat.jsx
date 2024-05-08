import React, { useRef, useState } from "react";
import "./Donate.css";
import * as XLSX from "xlsx"; // Import xlsx library for Excel parsing
import axios from 'axios';

export const Donate = () => {
  const fileInputRef = useRef(null);
  const [uploadedFile, setUploadedFile] = useState(null);
  const [fileContent, setFileContent] = useState(null);

  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setUploadedFile(file);

    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: "array" }); // Parse Excel file
      const sheetName = workbook.SheetNames[0]; // Get the first sheet name
      const worksheet = workbook.Sheets[sheetName]; // Get the first worksheet
      const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 }); // Convert worksheet to JSON
      setFileContent(jsonData);
    };
    reader.readAsArrayBuffer(file);
  };

  const handleButtonClick = () => {
    fileInputRef.current.click();
  };

  const sendMessage = async () => {
    try {
      const messages = fileContent.slice(1).map((row) => ({
        destinations: [{ to: row[1] }], // Assuming phone numbers are in the second column (index 1)
        from: "ServiceSMS",
        text: "Your message here", // Customize your message here
      }));

      const response = await axios.post(
        "https://vv84ne.api.infobip.com/sms/2/text/advanced",
        { messages },
        {
          headers: {
            Authorization: "App b94593e20969807d09b697f3da23b4ef-12207fad-2ac4-4618-b29c-736c725641b6",
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      );
      
      console.log("Messages sent successfully:", response.data);
    } catch (error) {
      console.error("Error sending messages:", error);
    }
  };

  return (
    <div className="message-wrapper">
      <div className="message-box1">
        <h1>Welcome to our free bulk sms sender</h1>
      </div>
      <div className="message-box2">
        <div className="data-holder">
        
          <button onClick={handleButtonClick}>Upload File</button>
          {uploadedFile && (
            <div>
              {fileContent && (
                <table>
                  <thead>
                    <tr>
                      {fileContent[0].map((cell, index) => (
                        <th key={index}>{cell}</th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {fileContent.slice(1).map((row, rowIndex) => (
                      <tr key={rowIndex}>
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex}>{cell}</td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              )}
            </div>
          )}
           {/* Add button to send messages */}
        </div>
        <div className="message-control">
          <textarea placeholder="Write your message" type="text" />
          <button>Send</button>
        </div>
      </div>
      <ul>
        Need help?
        <a href="https://wa.me/+255719592997" target="_blank">
          <span className="help-text" />
          Chat with us
        </a>
      </ul>
      <input
        type="file"
        style={{ display: "none" }}
        ref={fileInputRef}
        accept=".xlsx,.csv"
        onChange={handleFileInputChange}
      />
    </div>
  );
};
