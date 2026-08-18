"use client";

import React from "react";
import Link from "next/link";
import ProjectCard from "./description-card";
import { useLanguage } from "@/context/LanguageContext";

export default function Description_Blog_Education() {
  const { t } = useLanguage();

  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-[1400px]">
          <ProjectCard
            href="/education/Idat"
            date={t.education.cards.idat.date}
            status={t.education.cards.idat.status}
            title={t.education.cards.idat.title}
            description={t.education.cards.idat.description}
          />

          <ProjectCard
            href="/education/Platzi"
            date={t.education.cards.platzi.date}
            status={t.education.cards.platzi.status}
            title={t.education.cards.platzi.title}
            description={t.education.cards.platzi.description}
          />

          <ProjectCard
            href="/education/Cibertec"
            date={t.education.cards.cibertec.date}
            status={t.education.cards.cibertec.status}
            title={t.education.cards.cibertec.title}
            description={t.education.cards.cibertec.description}
          />
          <ProjectCard
            href="/education/Coursera"
            date={t.education.cards.coursera.date}
            status={t.education.cards.coursera.status}
            title={t.education.cards.coursera.title}
            description={t.education.cards.coursera.description}
          />
        </div>
    </>
  );
}
