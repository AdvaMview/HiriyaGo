import { useContext } from "react";
import { LanguageContext } from "@/components/ThemeAdapter";
import i18n from "@/config/language";
import { AppTheme } from "@/config/theme";

type Translations = Record<string, any>;

interface Settings {
  i18n: any; 
  language: string;
  setLanguage: (lang: string) => void;
  texts: Translations;
  theme: typeof AppTheme;
}


export function useSettings(): Settings {
  const { language, setLanguage, theme } = useContext(LanguageContext);

  const texts: Translations =
    (i18n as any).translations?.[language] ||
    (i18n as any).translations?.["he"] ||
    {};

  return {
    i18n,
    language,
    setLanguage,
    texts,
    theme,
  };
}
