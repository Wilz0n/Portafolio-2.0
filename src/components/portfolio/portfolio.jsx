import React from "react";
import Description_Portfolio from "./description/description";
import Skills_Portfolio from "./skills/skills";

export default function Portfolio() {
  return (
    <>
      <div className="">
        <h1>Volver</h1>
      </div>
      <article className="relative z-10 container mx-auto px-4 py-12 max-w-5xl">
        <Description_Portfolio />
        <Skills_Portfolio />
      </article>
    </>
  );
}
