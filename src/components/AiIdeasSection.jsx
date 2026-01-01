import "./AiIdeasSection.css";
import aiBanner from "../assets/ai-banner.png";

export default function AiIdeasSection() {
  return (
    <section className="ai-wrapper">
      <div className="ai-inner">

        {/* TOP TEXT */}
        <div className="ai-top">
          <h2>AMAZING <span>I</span>DEAS MEET</h2>
          <h4>Artificial Intelligence</h4>
          <p>
            It is true that AI can never replace human thinking. But a human who
            leverages the power of AI will definitely take over. And when AI gets
            into the hands of a creative marketing communications agency like Bud,
            the possibilities are infinite.
          </p>
        </div>

        {/* IMAGE */}
        <div className="ai-image">
          <img src={aiBanner} alt="AI Banner" />
        </div>

        {/* BOTTOM CONTENT */}
        <div className="ai-bottom">
          <div className="ai-buttons">
            <button className="btn primary">Explore AI-powered services</button>
            <button className="btn outline">Book a Free Consultation</button>
          </div>

          <div className="ai-description">
            <h4>Welcome to Bud AI World</h4>
            <p>
              your one-stop destination for solutions that are insanely
              affordable and for services that are extraordinarily mind-blowing.
              Get ready to push the bars of creative thinking and expand the
              limits of what is really possible! Gear up to embrace the future!
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
