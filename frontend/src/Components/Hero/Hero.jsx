import React from "react";
import "./Hero.css";
import arrow_icon from "../Assets/arrow.png";
import hero_image from "../Assets/hero_image.png";

const Hero = ({ scrollToNewCollections }) => {
  return (
    <div className="hero">
      {/* hero-left */}
      <div className="hero-left">
        <div>
          <p>Fashions fade, style is eternal.</p>
        </div>
        <h3>
          "Find your perfect style with us! We offer a wide selection of
          fashionable clothing for every occasion. Experience the difference and
          discover your new go-to wardrobe!"
        </h3>
        <div className="hero-latest-button" onClick={scrollToNewCollections}>
          <div>Latest Collection</div>
          <img src={arrow_icon} alt="" />
        </div>
      </div>

      {/* hero-right */}
      <div className="hero-right">
        <img src={hero_image} alt="" />
      </div>
    </div>
  );
};

export default Hero;
