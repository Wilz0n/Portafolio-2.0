import React from "react";
import Services from "./services/services";
import Project from "./project/project";
import { PageNavigation } from "../page-navigation/page-navigation";

export default function Project_in_Services() {
  return (
    <>
      <PageNavigation
        currentPage="education"
        showOnPages={["home", "services", "education"]}
      />
      <main className="max-w-7xl mx-auto px-6 space-y-20 pb-20 pt-5">
        <Services />
        <Project />
      </main>
    </>
  );
}
