import React from "react";

import styles from "./Clients.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Clients() {
  return (
    <button className={styles.clients__expand}>
      <FontAwesomeIcon icon="fa-solid fa-angle-down" />
    </button>
  );
}

export default Clients;
