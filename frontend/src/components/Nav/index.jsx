import React from "react";

import styles from "./Nav.module.css";

const Nav = () => {
  return (
    <nav>
      <button className={`${styles.nav__link}`}>About</button>
      <button className={`${styles.nav__link}`}>Companies</button>
      <button className={`${styles.nav__link}`}>Contact</button>
    </nav>
  );
};

export default Nav;
