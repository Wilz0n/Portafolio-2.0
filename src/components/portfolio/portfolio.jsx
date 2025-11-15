import React from "react";
import Description_Portfolio from "./description/description";
import Skills_Portfolio from "./skills/skills";
import { PageNavigation } from "../page-navigation/page-navigation";

export default function Portfolio() {
  return (
    <>
      <PageNavigation
        currentPage="education"
        showOnPages={["home", "services", "education"]}
      />
      <article className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        <Description_Portfolio />
        <Skills_Portfolio />
      </article>
    </>
  );
}
