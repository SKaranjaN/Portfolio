import React from "react";
import floating from "./Images/wepik-black-history-month-zoom-background-20230613135658BegG.jpeg";

function Float() {
  return (
    <div>
      <img
        style={{
          marginLeft: "300px",
          marginTop: "-100px",
          width: "900px",
          borderRadius: "30px",
        }}
        src={floating}
        alt="landing img"
      />
    </div>
  );
}

export default Float;
