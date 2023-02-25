import React, { useContext } from "react";

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
      className={`${styles.container}  ${
        !context.bioTitleFinished
          ? styles["container--hidden"]
          : styles["container--display"]
      }`}
    >
      {navJSX}
    </nav>
  );
};

export default Nav;
