import { createContext, useState } from "react";

export const SectionContext = createContext();

export const SectionProvider = (props) => {
  const [navData, setNavData] = useState([
    { name: "About", selected: false },
    { name: "Companies", selected: false },
    { name: "Contact", selected: false },
  ]);
  return (
    <SectionContext.Provider value={navData}>
      {props.children}
    </SectionContext.Provider>
  );
};
