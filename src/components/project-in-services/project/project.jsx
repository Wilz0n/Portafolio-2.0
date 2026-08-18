"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project_Card from "./project-card";
import Jobs from "../jobs/jobs.jsx";
import { useLanguage } from "@/context/LanguageContext";

export default function Project() {
  const { t } = useLanguage();

  const projectImages = [
    "/img/project-in-services/project/project-frist-portfolio.avif",
    "/img/project-in-services/project/project-idat.avif",
    "/img/project-in-services/project/project-lazy-vim.avif",
  ];

  const projectLinks = [
    [{ href: "https://github.com/Wilz0n/PortafolioV4", label: "GitHub", icon: FaGithub }],
    [{ href: "https://github.com/Wilz0n/Idat-Examen-Final", label: "GitHub", icon: FaGithub }],
    [{ href: "https://github.com/Wilz0n/test-nvim/tree/lazyvim", label: "GitHub", icon: FaGithub }],
  ];

  return (
    <>
      <article className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-[#d4a574]">
          {t.projects.contactTitle}
        </h2>
        <p className="text-sm text-[#a8a8a8] max-w-2xl mx-auto leading-relaxed">
          {t.projects.contactDescription}
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4"> 
          <a
            className="bg-[#252525] border border-[#3a3a3a] hover:border-[#d4a574] text-[#e8e6e3] px-6 py-3 rounded-lg text-sm transition-colors"
            href="mailto:fishas02@gmail.com"
            target="_blank"
          >
            {t.projects.emailButton}
          </a>

          <a
            className="bg-[#252525] border border-[#3a3a3a] hover:border-[#d4a574] text-[#e8e6e3] px-6 py-3 rounded-lg text-sm transition-colors"
            href={t.projects.cvLink}
            target="_blank"
          >
            {t.projects.portfolioButton}
          </a>
        </div>
      </article>

      <article className="space-y-8 pt-12">
        <h2 className="text-3xl font-bold text-center text-[#d4a574]">
          {t.projects.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.projects.items.map((item, index) => (
            <Project_Card
              key={index}
              image={projectImages[index]}
              title={item.title}
              description={item.description}
              links={projectLinks[index]}
            />
          ))}
        </div>
        <Jobs/>
      </article>
    </>
  );
}
