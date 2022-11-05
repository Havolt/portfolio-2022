import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./Cv.module.css";
import cvPdf from "./mark_fitzpatrick_cv.pdf";

function Cv() {
  return (
    <div className={styles.cv}>
      <a
        href={cvPdf}
        target="_blank"
        rel="noreferrer"
        className={styles.cv__button}
      >
        <FontAwesomeIcon icon="fa-solid fa-file-arrow-down" />
        <span className={styles.cv__button__description}>CV</span>
      </a>
    </div>
  );
}

export default Cv;
