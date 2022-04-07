import React, { useEffect, useState } from "react";

import styles from "./Bio.module.css";
import bioProfilePic from "./port-bio-main.jpg";

import bioData from "../../data/bio.json";

const Bio = () => {
  // State for the bioText
  const [bioTextStart, setBioTextStart] = useState("");
  const [bioName, setBioName] = useState("");
  const [bioTextEnd, setBioTextEnd] = useState("");

  // State for what is to be displayed
  const [hideFull, setHideFull] = useState(true);

  const writeBio = (stateText, comparisonText, textSetter) => {
    if (stateText !== comparisonText) {
      textSetter(
        (prevState) => (prevState += comparisonText.split("")[stateText.length])
      );
    }
  };

  useEffect(() => {
    console.log(1);
    const delayBio = setTimeout(() => {
      if (hideFull) {
        writeBio(bioName, bioData.name, setBioName);
      }
    }, 50);

    return () => {
      clearTimeout(delayBio);
    };
  }, [hideFull, bioTextStart, bioTextEnd, bioName]);

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
