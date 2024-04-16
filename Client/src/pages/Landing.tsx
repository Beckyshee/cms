import  { useState, useEffect } from "react";
import "./landing.scss";
import { GrPrevious } from "react-icons/gr";
import { GrNext } from "react-icons/gr";
import slide1 from "../assets/church.jpg";
import slide2 from "../assets/about us.jpg";
import slide3 from "../assets/youth.jpg";
import slide4 from "../assets/devs again.jpg";

const Landing= () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);


  const nextSlide = () => {
    setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
  };


  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
  };

  // Auto slide change
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000); 
    return () => clearInterval(interval);
  }, [currentSlide]);


  const slides: string[] = [slide1, slide2, slide3, slide4];

  return (
    <div className="landing-container">
      <div className="slideshow">
       

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

        <button className="prev" onClick={prevSlide}>
          <GrPrevious />
        </button>
        <button className="next" onClick={nextSlide}>
          <GrNext />
        </button>
        {/* <button>save me</button> */}
      </div>
    </div>
  );
};

export default Landing;
