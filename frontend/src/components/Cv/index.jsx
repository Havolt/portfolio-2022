import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Cv.module.css";
import cvPdf from "./mark_fitzpatrick_cv.pdf";

function Cv() {
  return (
    <div className={styles.container}>
      <a
        href={cvPdf}
        target="_blank"
        rel="noreferrer"
        className={styles.button}
      >
        <FontAwesomeIcon icon="fa-solid fa-file-arrow-down" />
        <span className={styles.button__description}>CV</span>
      </a>
    </div>
  );
}

export default Cv;
