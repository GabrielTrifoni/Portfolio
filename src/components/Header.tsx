import React from "react";
import { Link } from "react-scroll";
import "../styles/Header.css";

const Header: React.FC = () => {
  return (
    <>
      <header className="header">
        <nav>
          <div className="name">
            <a href="/">Gabriel Soave Trifoni</a>
          </div>
          <input type="checkbox" id="menu-toggle" />
          <label htmlFor="menu-toggle" className="menu-icon">&#9776;</label>
          <ul className="menu">
            <li><Link to="home" smooth={true} offset={-90}><a>Home</a></Link></li>
            <li><Link to="about" smooth={true} offset={-90}><a>About</a></Link></li>
            <li><Link to="contact" smooth={true} offset={-90}><a>Contact</a></Link></li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
