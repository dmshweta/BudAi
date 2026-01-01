import { useState } from "react";
import "./Header.css";
import logo from "../assets/logo.png";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">

        {/* Logo */}
        <div className="logo">
          <img src={logo} alt="BudAI" />
        </div>

        {/* Desktop Navigation */}
        <nav className="nav desktop">
          <a href="#">Services</a>
          <a href="#">Solutions</a>
          <a href="#">AI Gallery</a>
          <a href="#">Blogs</a>
          <a href="#">FAQ</a>
        </nav>

        {/* Desktop Buttons */}
        <div className="header-buttons desktop">
             <button className="btn-primary">Book A Demo</button>
          <button className="btn-outline">Contact</button>
         
        </div>

        {/* Mobile Toggle Button */}
        <div
          className={`menu-toggle ${menuOpen ? "open" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? "show" : ""}`}>
        <a onClick={() => setMenuOpen(false)}>Services</a>
        <a onClick={() => setMenuOpen(false)}>Solutions</a>
        <a onClick={() => setMenuOpen(false)}>AI Gallery</a>
        <a onClick={() => setMenuOpen(false)}>Blogs</a>
        <a onClick={() => setMenuOpen(false)}>FAQ</a>

       
        <button className="btn-primary">Book A Demo</button>
         <button className="btn-outline">Contact</button>
      </div>
    </header>
  );
}
