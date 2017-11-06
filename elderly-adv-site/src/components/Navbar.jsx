import React from "react";
import Link from "gatsby-link";
import styles from "../pages/navbar.module.css";

const Navbar = props => {
  const activeLink = props.activeLink;
  return (
    <div className={styles.navbar}>
      <Link to={"/"} className={styles.logo}>
        <h1>Company Name</h1>
      </Link>
      <ul className={styles.navLinks}>
        <Link
          to={"/about/"}
          className={
            activeLink === "about" ? styles.activeNavLink : styles.navLink
          }
        >
          About
        </Link>
        <Link
          to={"/services/"}
          className={
            activeLink === "services" ? styles.activeNavLink : styles.navLink
          }
        >
          Services
        </Link>
        <Link
          to={"/contact/"}
          className={
            activeLink === "contact" ? styles.activeNavLink : styles.navLink
          }
        >
          Contact
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
