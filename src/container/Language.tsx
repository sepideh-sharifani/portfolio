import { dictionaryList, languageOptions } from "@/languages";
import React, { createContext, useContext, useState } from "react";

interface LanguageProviderProps extends React.PropsWithChildren {}
interface props extends React.PropsWithChildren {
  tid: string;
}

export type GlobalContent = {
  userLanguage: string;
  dictionary: Object;
  userLanguageChange?: (_value: string) => void;
};

// create the language context with default selected language
export const LanguageContext = createContext<GlobalContent>({
  userLanguage: "en",
  dictionary: dictionaryList.en,
});
// it provides the language context to app
export const LanguageProvider: React.FunctionComponent<
  LanguageProviderProps
> = ({ children }): JSX.Element => {
  const [userLanguage, setUserLanguage] = useState("en");
  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage as keyof typeof dictionaryList],
    userLanguageChange: (selected: string) => {
      const newLanguage = languageOptions[
        selected as keyof typeof languageOptions
      ]
        ? selected
        : "en";
      setUserLanguage(newLanguage);
      window.localStorage.setItem("rcml-lang", newLanguage);
    },
  };
  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  );
};

// get text according to id & current language
export const Text = ({ tid }: props) => {
  const languageContext = useContext(LanguageContext);
  return (
    <>
      {languageContext.dictionary[
        tid as keyof typeof languageContext.dictionary
      ] || tid}
    </>
  );
};
