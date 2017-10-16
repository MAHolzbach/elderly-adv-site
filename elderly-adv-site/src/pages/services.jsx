import React from "react";
import Navbar from "../components/navbar";
import ServiceCard from "../components/ServiceCard";
import styles from "./services.module.css";

export default () => (
  <div className={styles.servicesLanding}>
    <Navbar />
    <h1>What We Do</h1>
    <div className={styles.cardDisplay}>
      <ServiceCard />
    </div>
  </div>
);
