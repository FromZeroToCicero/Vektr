import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import NavbarLink from "./NavbarLink";

import navLinks from "../constants/nav-links";
import styles from "../styles/navbar.module.scss";

const Navbar = () => {
  const [mobileMenuOpened, toggleMobileMenu] = useState(true);

  const handleClick = () => toggleMobileMenu(!mobileMenuOpened);

  return (
    <nav className={styles.nav}>
      <div className={styles.navContainer}>
        <Logo />
        <div className={styles.navMobileIcon} onClick={handleClick}>
          {mobileMenuOpened ? <FaBars /> : <FaTimes />}
        </div>
        <ul className={mobileMenuOpened ? `${styles.navList} ${styles.navListOpened}` : `${styles.navList}`} onClick={handleClick}>
          {navLinks.map((link, index) => (
            <NavbarLink key={index} {...link} onClick={handleClick} />
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
