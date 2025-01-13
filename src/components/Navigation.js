import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Navigation.css";

function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="navigation">
      <div>
        <h1 className="logo">LAJM</h1>
      </div>
      <div className="menu-icon" onClick={toggleMenu}>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
        <span className={`bar ${menuOpen ? "open" : ""}`}></span>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`}>
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            <span>Home</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            <span>About</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            <span>Projects</span>
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? "active" : "")}
            onClick={() => setMenuOpen(false)}
          >
            <span>Contact</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
