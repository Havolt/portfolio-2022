import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Cv.module.css";

function Cv() {
  return (
    <div className={styles.cv}>
      <button className={styles.cv__button}>
        <FontAwesomeIcon icon="fa-solid fa-file-arrow-down" />
        <span className={styles.cv__button__description}>Download CV</span>
      </button>
    </div>
  );
}

export default Cv;
