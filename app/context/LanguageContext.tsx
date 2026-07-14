"use client";

import * as React from "react";
import type { Lang } from "@/app/lib/i18n";

type LanguageContextValue = {
  lang: Lang;
  toggleLang: () => void;
};

const LanguageContext = React.createContext<LanguageContextValue>({
  lang: "km",
  toggleLang: () => {},
});

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Lang>("km");

  const toggleLang = React.useCallback(() => {
    setLang((l) => (l === "km" ? "en" : "km"));
  }, []);

  return (
    <LanguageContext.Provider value={{ lang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return React.useContext(LanguageContext);
}
