"use client";

import { createContext, useContext, useState, useEffect } from "react";

// Importar JSONs fragmentados por sección - EN
import homeEn from "@/locales/home/en.json";
import educationEn from "@/locales/education/en.json";
import portfolioEn from "@/locales/portfolio/en.json";
import projectsInServicesEn from "@/locales/projects-in-services/en.json";
import commonEn from "@/locales/common/en.json";

// Importar JSONs fragmentados por sección - ES
import homeEs from "@/locales/home/es.json";
import educationEs from "@/locales/education/es.json";
import portfolioEs from "@/locales/portfolio/es.json";
import projectsInServicesEs from "@/locales/projects-in-services/es.json";
import commonEs from "@/locales/common/es.json";

// Combinar todos los fragmentos en un solo objeto por idioma
const translations = {
  en: {
    ...commonEn,
    ...homeEn,
    ...educationEn,
    ...portfolioEn,
    ...projectsInServicesEn,
  },
  es: {
    ...commonEs,
    ...homeEs,
    ...educationEs,
    ...portfolioEs,
    ...projectsInServicesEs,
  },
};

const LanguageContext = createContext();

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  useEffect(() => {
    const saved = localStorage.getItem("language");
    if (saved && translations[saved]) {
      setLanguage(saved);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("language", language);
    document.documentElement.lang = language;
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "en" ? "es" : "en"));
  };

  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
