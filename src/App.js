import React from "react";
import graphic from "./graphic.png"; // ✅ your uploaded image

function App() {
  return (
    <div style={{ backgroundColor: "#000", minHeight: "100vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <img src={graphic} alt="PCG Home" style={{ maxWidth: "100%", height: "auto" }} />
    </div>
  );
}

export default App;
