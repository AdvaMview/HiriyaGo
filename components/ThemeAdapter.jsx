import React, { createContext, useState, useMemo } from "react";
import { AppTheme } from "@/config/theme";
import i18n from "@/config/language";

export const LanguageContext = createContext({
  language: "he",
  setLanguage: () => {},
  theme: AppTheme,
  texts: i18n.translations["he"],
});

export const ThemeAdapter = ({ children }) => {
  const [language, setLanguage] = useState(i18n.locale || "he");

  const value = useMemo(() => {
    i18n.locale = language;

    return {
      language,
      setLanguage,
      theme: AppTheme,
      texts: i18n.translations[language] || i18n.translations["he"],
    };
  }, [language]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};
