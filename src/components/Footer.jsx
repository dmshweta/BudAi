import "./Footer.css";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-brand">
          <img src={logo} alt="Bud AI" />
          <p>
            Welcome to the future, Bud AI World, where human ingenuity meets AI
            brilliance. Get ready to embrace marketing services & solutions that
            break molds & blow minds, both in marketing communications and
            operations paradigms.
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-links">
          <div>
           
            <ul>
              <li>Services</li>
              <li>Solutions</li>
              <li>AI Gallery</li>
            </ul>
          </div>

          <div>
           
            <ul>
                 <li>Services</li>
              <li>Solutions</li>
              <li>AI Gallery</li>
            </ul>
          </div>

          <div>
            
            <ul>
                <li>Contact Us</li>
              <li>Careers</li>
              <li>AI Blogs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="footer-bottom">
        <span>Copyright © Bud 2026</span>
        <div className="footer-policy">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
      </div>
    </footer>
  );
}
