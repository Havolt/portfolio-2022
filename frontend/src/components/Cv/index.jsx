import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Cv.module.css";

function Cv() {
  return (
    <div className={styles.cv}>
      <button className={styles.cv__button}>
        <FontAwesomeIcon icon="fa-solid fa-file-arrow-down" />
      </button>
      <p className={styles.cv__description}>Download CV</p>
    </div>
  );
}

export default Cv;
