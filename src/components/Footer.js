import React from "react";

import Logo from "./Logo";
import FooterLinksWrapper from "./FooterLinksWrapper";
import SocialIcons from "./SocialIcons";
import WebsiteRights from "./WebsiteRights";

import footerLinks from "../constants/footer-links";
import styles from "../styles/footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.linksContainer}>
        <FooterLinksWrapper links={footerLinks.firstRow} />
        <FooterLinksWrapper links={footerLinks.secondRow} />
      </div>
      <section className={styles.socialMedia}>
        <div className={styles.socialMediaContainer}>
          <Logo />
          <WebsiteRights />
          <SocialIcons />
        </div>
      </section>
    </div>
  );
};

export default Footer;
