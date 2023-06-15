import React, { useState, useEffect } from "react";
import image1 from "./Images/wepik-black-history-month-zoom-background-20230613135658BegG.jpeg";
import image2 from "./Images/LOGO DARK.png";
import image3 from "./Images/image (12).png";
import image4 from "./Images/image (11).png";
import image5 from "./Images/image (10).png";
import image6 from "./Images/image (9).png";
import image7 from "./Images/Banner 4.jpg";

function Float() {
  const images = [image1, image2, image3, image4, image5, image6, image7];
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
