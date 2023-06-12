import React from "react";
import backgroundImage from "./Images/LOGO DARK.png";

function Background() {
  return (
    <div>
      <img
        style={{ width: "200px", height: "auto" }}
        src={backgroundImage}
        alt="Background"
      />
    </div>
  );
}

export default Background;
