////////////////////////////

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "./CurvedCarousel.css";

import img1 from "../assets/s1.jpg";
import img2 from "../assets/s2.jpg";
import img3 from "../assets/s3.jpg";
import img4 from "../assets/s4.jpg";
import img5 from "../assets/s5.jpg";
import img6 from "../assets/s6.jpg";
import img7 from "../assets/s7.jpg";

const slides = [
  { title: "Sales & Lead Management Solution", img: img1 },
  { title: "Marketing & Creative Intelligence Solutions", img: img2 },
  { title: "Website, App & Digital Presence Solutions", img: img3 },
  { title: "Customer Support & Service AI Solutions", img: img4 },
  { title: "HR, Talent & Training AI Solutions", img: img5 },
  { title: "Finance & Documentation AI Solutions", img: img6 },
  { title: "Business Operations & Automation Solutions", img: img7 }
];

 
// duplicate for loop
const data = [...slides, ...slides];

export default function CurvedCarousel() {
  return (
    <div className="ai-wrapper">
         <div className="card-top">
          <h2>A<span>i</span>-powered</h2>
          <h4>Marketing Solutions</h4>
          </div>
      <Swiper
        slidesPerView="auto"
        loop
        speed={6000}
        autoplay={{ delay: 0, disableOnInteraction: false }}
        allowTouchMove={false}
        modules={[Autoplay]}
        className="curved-swiper"
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="curved-slide">
            <div className="card">
              <img src={item.img} alt={item.title} />
              <div className="overlay" />
              <p>{item.title}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
 {/* BOTTOM CONTENT */}
       <div className="actions">
        <button className="primary">Explore AI-powered services</button>
        <button className="secondary">Book a Free Consultation</button>
      </div>
    </div>
    
  );

  
}

