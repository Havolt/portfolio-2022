import React, { useEffect, useState, useContext } from "react";

import styles from "./Bio.module.css";
import bioProfilePic from "./port-bio-main.jpg";
import bioProfilePicWebp from "./port-bio-main.webp";

import { SectionContext } from "../../context";

import bioData from "../../data/bio.json";

const Bio = () => {
  // State for the bioText
  const [bioTextStart, setBioTextStart] = useState("");
  const [bioName, setBioName] = useState("");
  const [bioTextEnd, setBioTextEnd] = useState("");

  const context = useContext(SectionContext);

  const textRefreshTime = 22;

  // State for what is to be displayed
  const [hideFull, setHideFull] = useState(false);

  const writeBio = (stateText, comparisonText, textSetter) => {
    if (stateText !== comparisonText) {
      textSetter(
        (prevState) => (prevState += comparisonText.split("")[stateText.length])
      );
      return true;
    }
    return false;
  };

  useEffect(() => {
    // Set Delay on intro text to make text appearing fluid
    const delayBio = setTimeout(() => {
      if (hideFull) {
        writeBio(bioName, bioData.name, setBioName);
      } else {
        const foundIntroChange = writeBio(
          bioTextStart,
          bioData.start,
          setBioTextStart
        );
        if (foundIntroChange) return;
        const foundNameChange = writeBio(bioName, bioData.name, setBioName);
        if (foundNameChange) return;
        const foundEndChange = writeBio(bioTextEnd, bioData.end, setBioTextEnd);
        if (foundEndChange) return;
        return context.setBioTitleFinished(true);
      }
    }, textRefreshTime);

    return () => {
      clearTimeout(delayBio);
    };
  }, [hideFull, bioTextStart, bioTextEnd, bioName, context]);

  return (
    <div className={styles.container}>
      <picture>
        <source srcSet={bioProfilePicWebp} type="image/webp" />
        <source srcSet={bioProfilePic} type="image/webp" />
        <img
          className={styles.picture}
          src={bioProfilePic}
          alt="Mark having a cuppa."
        />
      </picture>
      <div className={styles.title}>
        <span>{bioTextStart}</span>
        <span className={styles["title-name"]}>{bioName}</span>
        <span>{bioTextEnd}</span>
      </div>
    </div>
  );
};

export default Bio;
