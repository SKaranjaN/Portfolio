import React from "react";
import image1 from "./Images/Data3.jpeg";

function Float() {
  const images = image1;

  return (
    <div>
      <img
        style={{
          marginLeft: "300px",
          marginTop: "-70px",
          width: "900px",
          borderRadius: "30px",
        }}
        src={images}
        alt="landing page"
      />
      {/* <p
        style={{
          fontFamily: "Quicksand, Light",
          marginLeft: "-1050px",
          marginTop: "-250px",
        }}
      >
        Constructive Thinking
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
    </div>
  );
}

export default Float;
