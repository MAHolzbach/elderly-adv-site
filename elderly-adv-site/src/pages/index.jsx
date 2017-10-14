import React from "react";
import Navbar from "../components/navbar";
import styles from "./index.module.css";

export default () => (
  <div className={styles.landing}>
    <Navbar />
    <h1 className={styles.siteTitle}>Great Big Company Name</h1>
  </div>
);
