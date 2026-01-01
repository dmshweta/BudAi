import "./TalkAI.css";
import robot from "../assets/robot.png";

export default function TalkAI() {
  return (
    <section className="talkai">
      <div className="talkai-inner">
        {/* ROBOT + BUTTON */}
        <div className="talkai-robot-wrap">
          <img src={robot} alt="AI Robot" />
          <button className="talkai-btn">Get in touch</button>
        </div>

        {/* TEXT */}
        <div className="talkai-text">
          <h2>Let’s Talk <span>AI</span></h2>
          <p>
            Curious about how AI can transform your brand? Let’s talk.
            No jargon. No bots. Just humans who know how to make AI work for you.
          </p>
        </div>
      </div>
    </section>
  );
}
