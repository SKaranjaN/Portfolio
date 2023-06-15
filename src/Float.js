import React, { useState, useEffect } from "react";
import image1 from "./Images/wepik-black-history-month-zoom-background-20230613135658BegG.jpeg";
import image2 from "./Images/LOGO DARK.png";

function Float() {
  const images = [image1, image2];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const changeImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const intervalId = setInterval(changeImage, 3000);
    return () => clearInterval(intervalId);
  }, [images]);

  return (
    <div>
      <img
        style={{
          marginLeft: "300px",
          marginTop: "-100px",
          width: "900px",
          borderRadius: "30px",
        }}
        src={images[currentIndex]}
        alt="slideshow img"
      />
    </div>
  );
}

export default Float;
