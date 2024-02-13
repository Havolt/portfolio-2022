import { createContext, useState } from "react";

export const SectionContext = createContext();

export const SectionProvider = (props) => {
  const navData = [
    {
      name: "LinkedIn",
      selected: false,
      link: "https://www.linkedin.com/in/mark-fitzpatrick-491419100/",
    },
    {
      name: "Durrower",
      selected: false,
      link: "https://durrower.com/",
    },
  ]

  const [bioTitleFinished, setBioTitleFinished] = useState(false);

  return (
    <SectionContext.Provider
      value={{ navData, bioTitleFinished, setBioTitleFinished }}
    >
      {props.children}
    </SectionContext.Provider>
  );
};
