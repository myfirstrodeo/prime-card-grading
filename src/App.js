import React from "react";
import "./App.css";
import landingImage from "./src/graphic.png"; // make sure it's inside /src or /public

function App() {
  return (
    <div style={{ backgroundColor: "#000", height: "100vh" }}>
      <img
        src={landingImage}
        alt="Prime Card Grading"
        style={{ width: "100%", height: "100%", objectFit: "contain" }}
      />
    </div>
  );
}

export default App;
