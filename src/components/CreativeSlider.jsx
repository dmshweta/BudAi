import { useEffect, useState } from "react";
import "./CreativeSlider.css";

import slide1 from "../assets/slider1.png";
import slide2 from "../assets/slider2.png";
import slide3 from "../assets/slider1.png";



const slides = [slide1, slide2, slide3];

export default function CreativeTwoCarousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="creative-wrap">
      <div className="creative-grid">

        {/* LEFT TEXT */}
        <div className="creative-left">
          <h2>
            Turning creatives <span>i</span>nto <br /></h2>
            <h4>immersive experiences 
            through AI
          </h4>
        </div>

        {/* RIGHT SLIDER */}
        <div className="creative-right">
          <div
            className="slider-track"
            style={{ transform: `translateX(-${index * 33.33}%)` }}
          >
            {slides.concat(slides).map((img, i) => (
              <div className="slider-card" key={i}>
                <img src={img} alt="" />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}