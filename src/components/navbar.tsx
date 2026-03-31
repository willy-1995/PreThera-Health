import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-brand">PreThera Health</div>

      {/* Hamburger Icon */}
      <div
        className={`nav-toggle ${isOpen ? "open" : ""}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <div className={`nav-links ${isOpen ? "active" : ""}`}>
        <Link to="/start" onClick={() => setIsOpen(false)}>
          Übersicht
        </Link>
        <Link to="/bgm" onClick={() => setIsOpen(false)}>
          Betriebes Gesundheitsmanagement
        </Link>
        <Link to="/publication" onClick={() => setIsOpen(false)}>
          Wissenswertes
        </Link>
        <Link to="/us" onClick={() => setIsOpen(false)}>
          Über uns
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
