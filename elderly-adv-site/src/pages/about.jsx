import React from "react";
import Navbar from "../components/navbar";
import styles from "./about.module.css";
import employee1 from "../pages/employee1.jpg";
import ServiceCard from "../components/ServiceCard";

const employeeArray = [
  {
    name: "John Jazz",
    pic: employee1,
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aliquid perspiciatis vitae sint, pariatur maxime, eum, iusto quasi doloremque facere explicabo provident optio magni veniam!"
  },
  {
    name: "Sue Smiles",
    pic: employee1,
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aliquid perspiciatis vitae sint, pariatur maxime, eum, iusto quasi doloremque facere explicabo provident optio magni veniam!"
  },
  {
    name: "Phil Friendly",
    pic: employee1,
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aliquid perspiciatis vitae sint, pariatur maxime, eum, iusto quasi doloremque facere explicabo provident optio magni veniam!"
  }
];

export default () => (
  <div className={styles.aboutPage}>
    <div className={styles.aboutLanding}>
      <Navbar activeLink={"about"} />
      <h1 className={styles.title}>Who We Are</h1>
      <div className={styles.cardDisplay}>
        {employeeArray.map(employee => (
          <ServiceCard
            serviceName={employee.name}
            pic={employee.pic}
            description={employee.description}
          />
        ))}
      </div>
    </div>
    <div className={styles.storyBox}>
      <p className={styles.storyField}>
        <h1 className={styles.title}>Our Story</h1>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
        asperiores nihil, dignissimos dicta voluptatibus suscipit aperiam at
        libero. Suscipit dolorem assumenda atque in non cumque provident
        voluptate harum eos hic saepe, beatae, ratione nihil itaque dolor ipsa,
        eligendi velit! Assumenda ullam sunt tempore saepe, similique enim ipsum
        vero neque ea recusandae ipsa sequi. Exercitationem ratione, quasi velit
        placeat error unde voluptatum aspernatur suscipit praesentium odit
        molestias accusantium consequuntur similique nulla fuga nihil eveniet
        reprehenderit autem fugiat quos. Non atque reprehenderit molestiae eum
        culpa obcaecati eligendi totam quo officiis adipisci qui vel veritatis
        illo, quam debitis omnis eveniet dolor nulla cupiditate.
      </p>
    </div>
  </div>
);
