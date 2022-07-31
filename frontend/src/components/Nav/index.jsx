import React, { useContext, useState } from "react";

import { SectionContext } from "../../context";

import NavItem from "./NavItem/index";

import styles from "./Nav.module.css";

const Nav = () => {
  const context = useContext(SectionContext);

  const navJSX = context.navData.map((item) => (
    <NavItem key={item.name} selected={item.selected}>
      {item}
    </NavItem>
  ));

  return (
    <nav
      className={`${styles.nav}  ${
        !context.bioTitleFinished && styles["nav--hidden"]
      }`}
    >
      {navJSX}
    </nav>
  );
};

export default Nav;
