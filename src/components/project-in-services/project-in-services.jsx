import React from "react";
import Services from "./services/services";
import Project from "./project/project";

export default function Project_in_Services() {
  return (
    <>
      <main className="max-w-7xl mx-auto px-6 space-y-20 pb-20">
        <Services />
        <Project />
      </main>
    </>
  );
}
