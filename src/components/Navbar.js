import React from "react";

function Navbar() {
  return (
    <div>
      <div className="Title">DOCTAH RICHARD MACK</div>
      <div className="small">
        Psychotherapy for Individuals and Couples in NYC
      </div>
      <div className="smaller">
        7 West 30th Street, 11th Floor Suite 9, New York, NY 10001 - (917)
        680-8023 - LucyLehrerTherapy@gmail.com
      </div>
      <div className="Navbar">
        <a className="NavbarItems" href="/" rel="noopener noreferrer">
          Home
        </a>
        <a className="NavbarItems" href="/about" rel="noopener noreferrer">
          About
        </a>
        <a className="NavbarItems" href="/contact" rel="noopener noreferrer">
          Contact
        </a>
      </div>
    </div>
  );
}

export default Navbar;
