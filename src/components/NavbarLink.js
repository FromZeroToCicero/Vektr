import React from "react";
import { Link } from "react-scroll";

import styles from "../styles/navbar.module.scss";

const NavbarLink = ({ title, scrollTo, onClick }) => {
  return (
    <li className={styles.navListItem}>
      <Link onClick={onClick} to={scrollTo} spy={true} smooth={true} duration={500} offset={-80} className={styles.navListItemLink}>
        {title}
      </Link>
    </li>
  );
};

export default NavbarLink;
