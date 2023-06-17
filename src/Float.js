import React, { useState, useEffect, useMemo } from "react";
import image1 from "./Images/Bio.jpeg";
import image3 from "./Images/image (12).png";
import image4 from "./Images/image (11).png";
import image5 from "./Images/image (10).png";
import image6 from "./Images/image (9).png";
import image7 from "./Images/Banner 4.jpg";

function Float() {
  const images = useMemo(
    () => [image1, image3, image4, image5, image6, image7],
    []
  );
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
          marginLeft: "300px",
          marginTop: "10px",
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
