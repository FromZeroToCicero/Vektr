import React from "react";

import styles from "../styles/services.module.scss";

const ServiceCard = ({ image, imageAlt, heading, description }) => {
  return (
    <div className={styles.serviceCard}>
      <img className={styles.serviceIcon} src={image} alt={imageAlt} />
      <h2 className={styles.serviceHeading}>{heading}</h2>
      <p className={styles.serviceDescription}>{description}</p>
    </div>
  );
};

export default ServiceCard;
