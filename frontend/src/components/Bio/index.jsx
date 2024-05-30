// import React, { useEffect, useState, useContext } from "react";
import React, { useEffect, useState } from "react";

import styles from "./Bio.module.css";
import bioProfilePic from "./port-bio-small.png";
import bioProfilePicWebp from "./port-bio-small.webp";

// import { SectionContext } from "../../context";

import bioData from "../../data/bio.json";

const Bio = () => {
  // State for the bioText
  // const [bioTextStart, setBioTextStart] = useState(bioData.start);
  // const [bioName, setBioName] = useState(bioData.name);
  // const [bioTextEnd, setBioTextEnd] = useState(bioData.end);
  const [initialiseBio, setInitialiseBio] = useState(false); 
  const bioTextStart = bioData.start;
  const bioName = bioData.name;
  const bioTextEnd = bioData.end;

  useEffect(() => {
    setInitialiseBio(true);
  }, [])

  // const context = useContext(SectionContext);

  // const textRefreshTime = 18;

  // const writeBio = (stateText, comparisonText, textSetter) => {
  //   if (stateText !== comparisonText) {
  //     textSetter(
  //       (prevState) => (prevState += comparisonText.split("")[stateText.length])
  //     );
  //     return true;
  //   }
  //   return false;
  // };

  // useEffect(() => {
  //   // Set Delay on intro text to make text appearing fluid
  //   const delayBio = setTimeout(() => {
  //       const foundIntroChange = writeBio(
  //         bioTextStart,
  //         bioData.start,
  //         setBioTextStart
  //       );
  //       if (foundIntroChange) return;
  //       const foundNameChange = writeBio(bioName, bioData.name, setBioName);
  //       if (foundNameChange) return;
  //       const foundEndChange = writeBio(bioTextEnd, bioData.end, setBioTextEnd);
  //       if (foundEndChange) return;
  //       return context.setBioTitleFinished(true);
  //   }, textRefreshTime);

  //   return () => {
  //     clearTimeout(delayBio);
  //   };
  // }, [ bioTextStart, bioTextEnd, bioName, context]);

  return (
    <div className={`${styles.container} ${initialiseBio ? styles.init : ''}`}>
      <picture>
        <source srcSet={bioProfilePicWebp} type="image/webp" />
        <source srcSet={bioProfilePic} type="image/webp" />
        <img
          className={styles.picture}
          src={bioProfilePic}
          alt="Mark having a cuppa."
          fetchpriority="high"
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
