"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitcher() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 flex items-center justify-center bg-[#252525] border-2 border-[#8b7355] rounded-lg text-[#e8e6e3] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200 text-sm font-bold shadow-lg cursor-pointer"
      aria-label={`Switch language to ${language === "en" ? "Spanish" : "English"}`}
      title={language === "en" ? "Cambiar a Español" : "Switch to English"}
    >
      {language === "en" ? "ES" : "EN"}
    </button>
  );
}
