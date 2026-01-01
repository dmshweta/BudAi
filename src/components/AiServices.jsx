import "./AiServices.css";


import bgImage from "../assets/services-bg.jpg";
import cardImg from "../assets/img.jpg";

import aiIcon from "../assets/icon1.png";
import marketingIcon from "../assets/icon2.png";
import webIcon from "../assets/icon3.png";
import contentIcon from "../assets/icon4.png";

const services = [
  { title: "AI creative services", icon: aiIcon },
  { title: "AI digital marketing services", icon: marketingIcon },
  { title: "AI web development services", icon: webIcon },
  { title: "AI content marketing services", icon: contentIcon },
];

export default function AiServices() {
  return (
    <section className="ai-services">

      {/* LEFT PANEL */}
      <div className="left-panel">
        <h2>AI-powered marketing services<br /><h4>for tomorrow </h4></h2>

        <p>
          <b><em>Welcome to Bud AI World,</em></b> your one-stop destination for solutions that
          are insanely affordable and for services that are extraordinarily
          mind-blowing. Get ready to push the bars of creative thinking and
          expand the limits of what is really possible! Gear up to embrace the
          future!
        </p>

        <div className="services-grid">
          {services.map((service, i) => (
            <div className="service-card" key={i}>
              <img src={cardImg} alt="" className="card-bg" />
              <div className="card-overlay">
                <img src={service.icon} alt="" className="card-icon" />
                <div className="card-footer">
                <span>{service.title}</span>
               
                <div className="arrow">
           <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 3H13V11"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 3L3 13"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
         </div>
      </div>

              </div>
            </div>
          ))}
        </div>

        <div className="buttons">
          <button className="btn primary">Explore AI-powered services</button>
          <button className="btn outline">Book a Free Consultation</button>
        </div>
      </div>

      {/* RIGHT IMAGE */}
      <div
        className="right-image"
        style={{ backgroundImage: `url(${bgImage})` }}
      />
    </section>
  );
}
