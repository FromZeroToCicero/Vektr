import React from "react";
import { Link } from "react-scroll";

import vektrLogo from "../images/vektr.png";
import styles from "../styles/logo.module.scss";

const Logo = () => {
  return (
    <Link to="home" spy={true} smooth={true} duration={500} offset={-80} className={styles.logoContainer}>
      <img src={vektrLogo} alt="Vektr logo" className={styles.logo} />
      <span>Vektr</span>
    </Link>
  );
};

export default Logo;
