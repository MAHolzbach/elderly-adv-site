import React from "react";
import Link from "gatsby-link";
import styles from "../pages/servicecard.module.css";
import folks1 from "../pages/folks1.jpg";
import folks2 from "../pages/folks2.jpg";
import folks3 from "../pages/folks3.jpg";

const folksArray = [folks1, folks2, folks3];

const ServiceCard = () => (
  <div>
    {folksArray.map(pic => (
      <div className="card">
        {" "}
        <div className="cardImage">
          <img src={pic} />
        </div>
        <div className="cardText" />
      </div>
    ))}
  </div>
);

export default ServiceCard;
