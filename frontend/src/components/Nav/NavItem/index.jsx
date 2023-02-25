import React from "react";

import styles from "./NavItem.module.css";

const NavItem = ({ children }) => {
  return (
    <a
      href={children.link}
      rel="noreferrer"
      target="_blank"
      className={`${styles.link}`}
    >
      {children.name}
    </a>
  );
};

export default NavItem;
