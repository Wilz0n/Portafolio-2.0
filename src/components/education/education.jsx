import React from "react";
import Description_Education from "./description-blog/description-blog";
import Education_Info_Blog from "./info-blog/education-info-blog";

export default function Education() {
  return (
    <>
      <main className="container mx-auto px-4 py-16">
        <Description_Education />
        <Education_Info_Blog />
      </main>
    </>
  );
}
