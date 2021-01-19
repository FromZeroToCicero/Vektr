import React from "react";

import styles from "../styles/footer.module.scss";

const WebsiteRights = () => {
  const currentYear = new Date().getFullYear();

  return <small className={styles.websiteRights}>Vektr &copy; {currentYear}</small>;
};

export default WebsiteRights;
