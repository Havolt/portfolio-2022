import React, { useEffect, useState } from "react";

import styles from "./Bio.module.css";
import bioProfilePic from "./port-bio-main.jpg";

import bioData from "../../data/bio.json";

const Bio = () => {
  const [bioText, setBioText] = useState(["", "", ""]);

  const [bioTextStart, setBioTextStart] = useState("");
  const [bioName, setBioName] = useState(bioData.name);
  const [bioTextEnd, setBioTextEnd] = useState("");

  const [hideFull, setHideFull] = useState(false);

  const writeBio = (hidingIntro) => {
    if (!hidingIntro) {
    } else {
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
        <span className="bio__title__start">{bioTextStart}</span>
        <span className={styles.bio__title__name}>{bioName}</span>
        <span className="bio__title__end">{bioTextEnd}</span>
      </div>
    </div>
  );
};

export default Bio;
