import { LanguageContext } from "@/container/Language";
import { languageOptions } from "@/languages";
import { useContext } from "react";

export default function LanguageSelector() {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext);

  // set selected language by calling context method
  const handleLanguageChange = (e: any) => {
    if (userLanguageChange) userLanguageChange(e.target.value);
  };

  return (
    <select
      className="rounded-md bg-orange-10 px-10 py-2 font-MyFont text-black focus:ring-0"
      onChange={handleLanguageChange}
      value={userLanguage}
    >
      {Object.entries(languageOptions).map(([id, name]) => (
        <option key={id} value={id}>
          {name}
        </option>
      ))}
    </select>
  );
}
