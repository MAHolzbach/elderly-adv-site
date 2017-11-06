import React from "react";
import Navbar from "../components/navbar";
import styles from "./about.module.css";
import employee1 from "../pages/employee1.jpg";
import ServiceCard from "../components/ServiceCard";

const employeeArray = [
  {
    name: "Person 1",
    pic: employee1,
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aliquid perspiciatis vitae sint, pariatur maxime, eum, iusto quasi doloremque facere explicabo provident optio magni veniam!"
  },
  {
    name: "Person 1",
    pic: employee1,
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aliquid perspiciatis vitae sint, pariatur maxime, eum, iusto quasi doloremque facere explicabo provident optio magni veniam!"
  },
  {
    name: "Person 1",
    pic: employee1,
    description:
      " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi aliquid perspiciatis vitae sint, pariatur maxime, eum, iusto quasi doloremque facere explicabo provident optio magni veniam!"
  }
];

export default () => (
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
);
