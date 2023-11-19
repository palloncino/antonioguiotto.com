import React, { useState } from "react";
import "./Swipe.css";

const Swiper = ({ media }: { media: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [preview, setPreview] = useState(false);

  const handleArrowClick = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : media.length - 1
      );
    } else {
      setCurrentIndex((prevIndex) =>
        prevIndex < media.length - 1 ? prevIndex + 1 : 0
      );
    }
  };

  const togglePreview = () => {
    setPreview(!preview);
  };

  return (
    <div
      className={`swiper-container ${preview ? "preview" : ""}`}
      onClick={preview ? togglePreview : undefined}
    >
      <img
        src={media[currentIndex]}
        alt={`Slide ${currentIndex}`}
        onClick={togglePreview}
      />
      <button className="arrow left" onClick={() => handleArrowClick("left")}>
        ⬅️
      </button>
      <button className="arrow right" onClick={() => handleArrowClick("right")}>
        ➡️
      </button>
      {preview && <div className="backdrop" onClick={togglePreview}></div>}
    </div>
  );
};

export default Swiper;
