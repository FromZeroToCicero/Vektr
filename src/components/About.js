import React from "react";

import styles from "../styles/about.module.scss";

const About = ({ text, image, imageAlt }) => {
  return (
    <div name="about" className={styles.about}>
      <div className={styles.aboutContainer}>
        <h1 className={styles.aboutTitle}>About Us</h1>
        <div className={styles.aboutRow}>
          <div className={styles.aboutColumn}>
            <div className={styles.aboutTextContainer}>
              <p className={styles.aboutText}>{text}</p>
            </div>
          </div>
          <div className={styles.aboutColumn}>
            <div className={styles.aboutImageContainer}>
              <img className={styles.aboutImage} src={image} alt={imageAlt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
