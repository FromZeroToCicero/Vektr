import React from "react";

import socials from "../constants/socials";
import styles from "../styles/socials.module.scss";

const SocialIcons = () => {
  return (
    <div className={styles.socialIcons}>
      {socials.map((social, index) => {
        return (
          <a key={index} className={styles.socialIconLink} href={social.href} aria-label={social.ariaLabel} rel="noopener noreferrer">
            {social.icon}
          </a>
        );
      })}
    </div>
  );
};

export default SocialIcons;
