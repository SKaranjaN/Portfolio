import React, { useState, useEffect, useMemo } from "react";
import image3 from "./Images/image (12).png";
import image4 from "./Images/image (11).png";
import image5 from "./Images/image (10).png";
import image6 from "./Images/image (9).png";
import image7 from "./Images/Banner 4.jpg";

function Works() {
  const images = useMemo(() => [image3, image4, image5, image6, image7], []);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(changeImage, 4000);
    return () => clearInterval(intervalId);
  }, [images]);
  return (
    <div>
      <img
        style={{
          marginLeft: "-350px",
          marginTop: "100px",
          width: "900px",
          borderRadius: "30px",
        }}
        src={images[currentIndex]}
        alt="slideshow img"
      />
      <p
        style={{
          marginTop: "-250px",
          marginLeft: "950px",
          fontFamily: "Quicksand, Light",
          fontSize: "50px",
        }}
      >
        WORKS
      </p>
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default Works;
