"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project_Card from "./project-card";

export default function Project() {
  return (
    <>
      <article className="text-center space-y-6 py-12">
        <h2 className="text-2xl font-bold text-[#d4a574]">
          Do you have any other questions?
        </h2>
        <p className="text-sm text-[#a8a8a8] max-w-2xl mx-auto leading-relaxed">
          If you have a problem with Web Development, Software maintenance,
          Systems Programming, or any software-related consultation, don't
          hesitate to contact me so we can discuss your request.
        </p>
        <button
          className="bg-[#252525] border border-[#3a3a3a] hover:border-[#d4a574] text-[#e8e6e3] px-6 py-3 rounded-lg text-sm transition-colors"
          type=""
        >
          📧 Email me
        </button>
      </article>

      <article className="space-y-8 pt-12">
        <h2 className="text-3xl font-bold text-center text-[#d4a574]">
          Project
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Project_Card
            image="/img/project-in-services/project-portfolio-v2/cap-1.png"
            title="First Portfolio"
            description="Web creator for creating high-quality, fast and high-modular creator."
            links={[
              {
                href: "https://github.com/tuusuario/proyecto",
                label: "GitHub",
                icon: FaGithub,
              },
              {
                href: "https://tuweb.com/proyecto",
                label: "View",
                icon: FaExternalLinkAlt,
              },
            ]}
          />

          <Project_Card
            image="/img/project-in-services/project-IDAT/cap-1.png"
            title="Ecomerce"
            description="Web creator for creating high-quality, fast and high-modular creator."
            links={[
              {
                href: "https://github.com/tuusuario/proyecto",
                label: "GitHub",
                icon: FaGithub,
              },
              {
                href: "https://tuweb.com/proyecto",
                label: "View",
                icon: FaExternalLinkAlt,
              },
            ]}
          />
        </div>
      </article>
    </>
  );
}
