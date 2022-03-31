import React, { useState } from "react";

import styles from "./Bio.module.css";

const Bio = () => {
  const [bioTitleStart, setBioTitleStart] = useState("Hi, I'm ");
  const [bioTitleEnd, setBioTitleEnd] = useState(
    ". A front end Wed Developer."
  );

  const name = "Mark Fitzpatrick";
  const whiteSpace = " ";

  return (
    <div className="bio">
      <div className={styles.bio__title}>
        <span className="bio__title__start">{bioTitleStart}</span>
        <span className={styles.bio__title__name}>{name}</span>
        <span className="bio__title__end">{bioTitleEnd}</span>
      </div>
    </div>
  );
};

export default Bio;
