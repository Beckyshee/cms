import React, { useState, useEffect } from "react";
import "./landing.scss"; // Import the corresponding SCSS file

import slide1 from "../assets/church.jpg";
import slide2 from "../assets/about us.jpg";
import slide3 from "../assets/youth.jpg";
import slide4 from "../assets/devs again.jpg";

const Landing: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Function to handle next slide
  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };

  // Function to handle previous slide
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [currentSlide]);

  // Array of slide images
  const slides: string[] = [slide1, slide2, slide3, slide4];

  return (
    <div className="landing-container">
      <div className="slideshow">
        {/* Render each slide */}
        {slides.map((slide, index) => (
          <div
            className={
              index === currentSlide ? "my-slides active" : "my-slides"
            }
            key={index}
          >
            <img src={slide} alt={`slide ${index}`} />
          </div>
        ))}

        {/* Navigation buttons */}
        <button className="prev" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="next" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Landing;
