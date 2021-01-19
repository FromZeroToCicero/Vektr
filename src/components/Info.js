import React from "react";

import styles from "../styles/info.module.scss";

const Section = ({ lightMode, topLine, headline, description, image, imageAlt, imgLeftSide }) => {
  return (
    <div className={lightMode ? `${styles.info}` : `${styles.info} ${styles.infoDark}`}>
      <div className={styles.infoContainer}>
        <div className={imgLeftSide ? `${styles.infoRow} ${styles.infoRowReverse}` : `${styles.infoRow}`}>
          <div className={styles.infoColumn}>
            <div className={styles.infoText}>
              <div className={lightMode ? `${styles.infoTopLine} ${styles.infoTopLineDark}` : `${styles.infoTopLine}`}>{topLine}</div>
              <h1 className={lightMode ? `${styles.infoHeadline} ${styles.infoHeadlineDark}` : `${styles.infoHeadline}`}>{headline}</h1>
              <p className={lightMode ? `${styles.infoDescription} ${styles.infoDescriptionDark}` : `${styles.infoDescription}`}>{description}</p>
            </div>
          </div>
          <div className={styles.infoColumn}>
            <div className={imgLeftSide ? `${styles.infoImageContainer} ${styles.infoImageContainerEnd}` : `${styles.infoImageContainer}`}>
              <img className={styles.infoImage} src={image} alt={imageAlt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
