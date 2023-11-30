import React from "react";

function Navbar() {
  return (
    <div>
      <div className="Title">DOCTAH RICHARD MACK</div>
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
