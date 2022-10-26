import React from "react";

import styles from "./Clients.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Clients() {
  return (
    <div>
      <FontAwesomeIcon
        className={styles.clients__expand}
        icon="fa-solid fa-angle-down"
      />
    </div>
  );
}

export default Clients;
