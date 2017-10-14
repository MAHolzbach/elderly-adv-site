import React from "react";
import Link from "gatsby-link";
import styles from "../pages/navbar.module.css";

const Navbar = () => (
  <div className={styles.navbar}>
    <Link to={"/"} className={styles.logo}>
      <h1>Company Name</h1>
    </Link>
    <div className={styles.navLinks}>
      <Link to={"/about/"} className={styles.navLink}>
        About
      </Link>
      <Link to={"/services/"} className={styles.navLink}>
        Services
      </Link>
      <Link to={"/contact/"} className={styles.navLink}>
        Contact
      </Link>
    </div>
  </div>
);

export default Navbar;
