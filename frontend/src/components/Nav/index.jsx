import React, { useContext, useState } from "react";

import { SectionContext } from "../../context";

import NavItem from "./NavItem/index";

import styles from "./Nav.module.css";

const Nav = () => {
  const navData = useContext(SectionContext);

  const navJSX = navData.map((item) => (
    <NavItem key={item.name} selected={item.selected}>
      {item.name}
    </NavItem>
  ));

  return <nav className={styles.nav}>{navJSX}</nav>;
};

export default Nav;
