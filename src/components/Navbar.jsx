import React, { useState } from "react";
import prime_logo from "../Assets/prime_logo2.png";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Initialize menuOpen state to false

  return (
    <nav>
      <img src={prime_logo} alt="" className="title" />
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        {/* Toggle menuOpen state when the menu button is clicked */}
        <span></span>
        <span></span>
        
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        {/* Display these links when menuOpen is true */}
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/news">News</NavLink>
        </li>
        <li>
          <NavLink to="/donate">Services</NavLink>
        </li>
        <li>
          <NavLink to="/login">Join us</NavLink>
        </li>
      </ul>
    </nav>
  );
};
