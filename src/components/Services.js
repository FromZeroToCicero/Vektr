import React from "react";

import ServiceCard from "./ServiceCard";
import services from "../constants/services";
import styles from "../styles/services.module.scss";

const Services = () => {
  return (
    <div name="services" className={styles.service}>
      <div className={styles.serviceContainer}>
        <h1 className={styles.serviceTitle}>Our Services</h1>
        <div className={styles.serviceWrapper}>
          {services.map((service, index) => (
            <ServiceCard {...service} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
