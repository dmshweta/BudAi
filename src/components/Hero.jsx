import "./Hero.css";
import heroBg from "../assets/hero-bg.png";

export default function Hero() {
  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content">
        <h1>
          A<span>I</span> POWERED BY
        </h1>
        <p>Human Intelligence</p>
        <button className="btn-primary">Book A Demo</button>
      </div>
    </section>
  );
}

