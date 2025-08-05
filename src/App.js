import React from "react";
import "./App.css";
import landingImage from "./graphic.png"; // or whatever image name you used

function App() {
  return (
    <div style={{ backgroundColor: "#000", height: "100vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <img src={landingImage} alt="PCG Landing" style={{ width: "100%", maxWidth: "900px", height: "auto" }} />
    </div>
  );
}

export default App;
