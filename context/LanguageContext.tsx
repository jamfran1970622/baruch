"use client";
import { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { translations, Language } from "@/lib/i18n";

type LanguageContextType = {
  lang: Language;
  t: typeof translations.es;
  toggleLang: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>("es");

  useEffect(() => {
    const stored = localStorage.getItem("lang") as Language;
    if (stored === "es" || stored === "en") setLang(stored);
  }, []);

  const toggleLang = () => {
    const next = lang === "es" ? "en" : "es";
    setLang(next);
    localStorage.setItem("lang", next);
  };

  return (
    <LanguageContext.Provider value={{ lang, t: translations[lang], toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
