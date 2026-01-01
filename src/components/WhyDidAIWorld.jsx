import "./WhyDidAIWorld.css";
import humanIcon from "../assets/icon1.png";
import expertIcon from "../assets/icon2.png";
import affordableIcon from "../assets/icon3.png";
import futureIcon from "../assets/icon4.png";

const cards = [
  {
    icon: humanIcon,
    title: "Human-first approach",
    text:
      "Every project at Bud AI World starts with an idea, not an algorithm. Our human creativity fuels the AI spark."
  },
  {
    icon: expertIcon,
    title: "Expert legacy",
    text:
      "Two decades of marketing brilliance integrated with next-gen AI communication strategies."
  },
  {
    icon: affordableIcon,
    title: "Affordable intelligence",
    text:
      "High-end results at cost-effective pricing, making innovation accessible to all."
  },
  {
    icon: futureIcon,
    title: "Future-ready mindset",
    text:
      "We don’t follow AI trends — we build them, ensuring brands stay ahead."
  }
];

export default function WhyBudAI() {
  return (
    <section
      className="ai-wrapper"
    
    >
      <div className="why-container">
        <h2 className="why-title">WHY</h2>
        <h4 className="why-subtitle">BUD AI World?</h4>

        <p className="why-desc">
          Being in the field for over 15 years, we’ve mastered the art of
          artificial intelligence in marketing. Unlike other agencies, we don’t
          just use AI, but we redefine how marketing works with it.
        </p>

        <div className="why-grid">
          {cards.map((card, i) => (
            <div className="why-card" key={i}>
              <div className="why-icon">
                <img src={card.icon} alt={card.title} />
              </div>
              <h4>{card.title}</h4>
              <p>{card.text}</p>
            </div>
          ))}
        </div>

        <button className="why-btn">Book a consultation now</button>
      </div>
    </section>
  );
}
