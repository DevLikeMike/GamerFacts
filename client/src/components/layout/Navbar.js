import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" id="nav-title">
        GamerFacts
      </a>
      <ul>
        <li>
          <a href="/">Login</a>
        </li>
        <li>
          <a href="/">Sign Up</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
