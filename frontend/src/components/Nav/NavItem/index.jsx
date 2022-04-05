import React from "react";

import styles from "./NavItem.module.css";

const NavItem = ({ children }) => {
  return <button className={`${styles.nav__link}`}>{children}</button>;
};

export default NavItem;
