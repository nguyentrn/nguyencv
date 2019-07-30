import React, { createContext } from "react";
import { useToggle } from "react-use";

export const LanguageContext = createContext();

export const LanguageProvider = props => {
  const localState = JSON.parse(localStorage.getItem("language"));
  const [isVietnamese, toggleIsVietnamese] = useToggle(localState || false);

  React.useEffect(() => {
    localStorage.setItem("language", isVietnamese);
  }, [isVietnamese]);

  return (
    <LanguageContext.Provider value={{ isVietnamese, toggleIsVietnamese }}>
      {props.children}
    </LanguageContext.Provider>
  );
};
