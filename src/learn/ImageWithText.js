import React from "react";
import "./../App.css";

const ImageWithText = ({ imageSrc, altText, text }) => {
  return (
    <div>
      <img src={imageSrc} className="App-logo" alt={altText} />
      <p>{text}</p>
    </div>
  );
};

export default ImageWithText;