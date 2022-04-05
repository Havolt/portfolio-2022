import React, { useState } from "react";

import NavItem from "./NavItem/index";

import styles from "./Nav.module.css";

const Nav = () => {
  const [navData, setNavData] = useState([
    { name: "About", selected: false },
    { name: "Companies", selected: false },
    { name: "Contact", selected: false },
  ]);

  const navJSX = navData.map((item) => (
    <NavItem selected={item.selected}>{item.name}</NavItem>
  ));

  return <nav className={styles.nav}>{navJSX}</nav>;
};

export default Nav;
