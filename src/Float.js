import React from "react";
import floating from "./Images/wepik-export-20230613131238rvTh.jpeg";

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
