import React from "react";
import Link from "gatsby-link";
import styles from "./servicecard.module.css";

const ServiceCard = ({ serviceName, pic, description }) => (
  <div className={styles.card}>
    <h1 className={styles.title}>{serviceName}</h1>
    <div className={styles.cardImage}>
      <img src={pic} />
    </div>
    <div className={styles.cardText}>{description}</div>
  </div>
);

export default ServiceCard;
