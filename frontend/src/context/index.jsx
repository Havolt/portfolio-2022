import { createContext, useState } from "react";

export const SectionContext = createContext();

export const SectionProvider = (props) => {
  const [navData, setNavData] = useState([
    // { name: "About", selected: false },
    // { name: "Companies", selected: false },
    {
      name: "Contact",
      selected: false,
      link: "https://www.linkedin.com/in/mark-fitzpatrick-491419100/",
    },
  ]);

  const [bioTitleFinished, setBioTitleFinished] = useState(false);

  return (
    <SectionContext.Provider
      value={{ navData, bioTitleFinished, setBioTitleFinished }}
    >
      {props.children}
    </SectionContext.Provider>
  );
};
