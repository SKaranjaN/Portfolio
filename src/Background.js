import React from "react";
import backgroundImage from "./Images/LOGO DARK.png";

function Background() {
  return (
    <div style={{ position: "fixed", zIndex: 1 }}>
      <img
        style={{
          marginLeft: "-1000px",
          marginTop: "-200px",
          width: "200px",
        }}
        src={backgroundImage}
        alt="Background"
      />
    </div>
  );
}

export default Background;
