"use client";

import React from "react";
import Description_Education from "./description-education/description-education";
import { PageNavigation } from "../page-navigation/page-navigation";
import { useLanguage } from "@/context/LanguageContext";

export default function Education() {
  const { t } = useLanguage();

  return (
    <>
      <PageNavigation
        currentPage="education"
        showOnPages={["home", "services", "education"]}
      />

      <article>
        <h1 className="text-4xl md:text-5xl text-center mt-15">{t.education.title}</h1>
      </article>

      <main className="container mx-auto px-4 py-16">
        <Description_Education />
      </main>
    </>
  );
}
