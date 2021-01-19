import React from "react";

import styles from "../styles/footer.module.scss";

const FooterLinks = ({ title, links }) => {
  return (
    <div className={styles.linksList}>
      <h2 className={styles.linkTitle}>{title}</h2>
      {links.map((link, index) => {
        return (
          <a key={index} className={styles.link} href={link.href}>
            {link.text}
          </a>
        );
      })}
    </div>
  );
};

export default FooterLinks;
