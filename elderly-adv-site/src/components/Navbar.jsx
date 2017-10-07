import React from "react";
import Link from "gatsby-link";

const Navbar = () => (
  <nav>
    <div className="nav-wrapper">
      <Link to={"/"} className="brand-logo">
        <h1>Company Name</h1>
      </Link>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <Link to={"/about/"}>About</Link>
        </li>
        <li>
          <Link to={"/services/"}>Services</Link>
        </li>
        <li>
          <Link to={"/contact/"}>Contact</Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default Navbar;
