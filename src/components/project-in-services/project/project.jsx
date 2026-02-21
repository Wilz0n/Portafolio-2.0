"use client";

import React from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Project_Card from "./project-card";
import Jobs from "../jobs/jobs.jsx";

export default function Project() {
  return (
    <>
      <article className="text-center space-y-6">
        <h2 className="text-2xl font-bold text-[#d4a574]">
          Do you have any other questions?
        </h2>
        <p className="text-sm text-[#a8a8a8] max-w-2xl mx-auto leading-relaxed">
        If you have any issues with web development, software maintenance, systems programming, or any
        software-related query, please feel free to contact me so we can discuss your problem. I've also
        included my CV, which showcases the experience I've gained over time.
        </p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-4"> 
        <a
          className="bg-[#252525] border border-[#3a3a3a] hover:border-[#d4a574] text-[#e8e6e3] px-6 py-3 rounded-lg text-sm transition-colors"
          href="mailto:fishas02@gmail.com"
          type=""
          target="_blank"
        >
          📧 Email me
        </a>

        <a
          className="bg-[#252525] border border-[#3a3a3a] hover:border-[#d4a574] text-[#e8e6e3] px-6 py-3 rounded-lg text-sm transition-colors"
          href="/documents/javier-bernal-acosta.pdf"
          type=""
          target="_blank"
        >
          💼 Portfolio
        </a>
        </div>
      </article>

      <article className="space-y-8 pt-12">
        <h2 className="text-3xl font-bold text-center text-[#d4a574]">
          Project
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Project_Card
            image="/img/project-in-services/project/project-frist-portfolio.avif"
            title="First Portfolio"
            description="First portfolio created to demonstrate my web development skills."
            links={[
              {
                href: "https://github.com/Wilz0n/PortafolioV4",
                label: "GitHub",
                icon: FaGithub,
              },
            ]}
          />

          <Project_Card
            image="/img/project-in-services/project/project-idat.avif"
            title="Ecomerce"
            description="Ecommerce website created for a high school project to test skills in React.js."
            links={[
              {
                href: "https://github.com/Wilz0n/Idat-Examen-Final",
                label: "GitHub",
                icon: FaGithub,
              },
            ]}
          />

          <Project_Card
            image="/img/project-in-services/project/project-lazy-vim.avif"
            title="Config-Neovim (Lazyvim)"
            description="Personal configuration of Neovim along with Lazy-vim and various configurations according to one's needs."
            links={[
              {
                href: "https://github.com/Wilz0n/test-nvim/tree/lazyvim",
                label: "GitHub",
                icon: FaGithub,
              },
            ]}
          />
        </div>
        <Jobs/>
      </article>
    </>
  );
}
