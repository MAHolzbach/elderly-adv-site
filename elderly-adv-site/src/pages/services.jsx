import React from "react";
import Navbar from "../components/navbar";
import ServiceCard from "../components/ServiceCard";
import styles from "./services.module.css";
import folks1 from "../pages/folks1.jpg";
import folks2 from "../pages/folks2.jpg";
import folks3 from "../pages/folks3.jpg";

const folksArray = [
  {
    name: "Financial",
    pic: folks1,
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis adipisci iste facere quo est earum in fuga error? Maxime, qui sapiente! Odio nostrum laborum ut."
  },
  {
    name: "Health",
    pic: folks2,
    description:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur atque odit reprehenderit, veritatis, provident nobis cum commodi, officia consequuntur hic doloremque iste deserunt ut asperiores."
  },
  {
    name: "Retirement",
    pic: folks3,
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam eos aperiam perspiciatis repellat? Commodi similique fugiat excepturi, magni voluptatum distinctio! Provident inventore corporis eius ducimus?"
  }
];

export default () => (
  <div className={styles.servicesLanding}>
    <Navbar />
    <h1 className={styles.title}>What We Do</h1>
    <div className={styles.cardDisplay}>
      {folksArray.map(service => (
        <ServiceCard
          serviceName={service.name}
          pic={service.pic}
          description={service.description}
        />
      ))}
    </div>
  </div>
);
