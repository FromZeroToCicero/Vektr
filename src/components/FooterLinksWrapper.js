import React from "react";

import FooterLinks from "./FooterLinks";

import styles from "../styles/footer.module.scss";

const FooterLinksWrapper = ({ links: footerLinks }) => {
  return (
    <div className={styles.linksWrapper}>
      {footerLinks.map((links) => (
        <FooterLinks key={links.title} {...links} />
      ))}
    </div>
  );
};

export default FooterLinksWrapper;
