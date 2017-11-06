import React from "react";
import Navbar from "../components/navbar";
import styles from "./contact.module.css";

export default () => (
  <div className={styles.contactLanding}>
    <Navbar activeLink={"contact"} />
    <h1 className={styles.title}>Reach Out</h1>
    <div className={styles.formDiv}>
      <form className={styles.contactForm}>
        <input placeholder="Name..." type="text" />
        <input placeholder="Email..." type="email" />
      </form>
      <form className={styles.messageArea}>
        <textarea rows="2" placeholder="How can we help?" />
      </form>
    </div>
  </div>
);
