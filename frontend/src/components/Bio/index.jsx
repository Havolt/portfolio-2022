import React, { useEffect, useState } from "react";

import styles from "./Bio.module.css";
import bioProfilePic from "./port-bio-main.jpg";

const Bio = () => {
  const name = "Mark Fitzpatrick";
  const bioFull = ["Hi, I'm ", name, ". A front end Wed Developer."];
  const [bioTitleStart, setBioTitleStart] = useState("");
  const [bioTitleEnd, setBioTitleEnd] = useState("");
  const [hideFull, setHideFull] = useState(false);

  const writeBio = (hidingName) => {
    if (!hidingName) {
      console.log(bioFull);
    }
  };

  useEffect(() => {
    writeBio(hideFull);
  }, [hideFull]);

  return (
    <div className={styles.bio}>
      <img
        className={styles.bio__picture}
        src={bioProfilePic}
        alt="Mark sitting smiling."
        srcSet=""
      />
      <div className={styles.bio__title}>
        <span className="bio__title__start">{bioTitleStart}</span>
        <span className={styles.bio__title__name}>{name}</span>
        <span className="bio__title__end">{bioTitleEnd}</span>
      </div>
    </div>
  );
};

export default Bio;
