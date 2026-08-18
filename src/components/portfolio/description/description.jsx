"use client";

import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDiscord,
  FaBriefcase,
} from "react-icons/fa";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Description_Portfolio() {
  const { t } = useLanguage();

  return (
    <>
      <article className="flex flex-col items-center mt-10">
        <img
          src="/img/profile-pixel.avif"
          alt="discord-icon"
          className="rounded-full aspect-square w-50 border-4 border-[#8b7355]"
        />
        <h1 className="text-center text-3xl mt-5">
          {t.portfolio.title}
        </h1>
        <div className="flex gap-3 mt-6 group">
          <Link
            href="mailto:fishas02@gmail.com"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaEnvelope className="w-6 h-6" />
          </Link>

          <Link
            href="https://www.instagram.com/wils0nnn/"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaInstagram className="w-6 h-6" />
          </Link>

          <Link
            href="https://github.com/Wilz0n"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaGithub className="w-6 h-6" />
          </Link>

          <Link
            href="https://www.linkedin.com/in/javier-bernal-913133256/"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>

          <Link
            href="https://discord.gg/BgUQcN9dzU"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaDiscord className="w-6 h-6" />
          </Link>

          <Link
            href={t.portfolio.cvLink}
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaBriefcase className="w-6 h-6" />
          </Link>
        </div>
      </article>

      <article className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6 mb-8 backdrop-blur mt-10">
        <h1 className="">
          {t.portfolio.description}
        </h1>
      </article>

      <article className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">{t.portfolio.work}</h1>
          <p className="mb-6">{t.portfolio.workDescription}</p>
          <a
            className="flex items-center gap-2 px-4 py-2 w-fit border-2 border-[#8b7355] bg-[#2a2a2a] text-[#e8e6e3] rounded-lg hover:bg-[#d4a574] hover:text-[#1a1a1a] transition-all duration-200 text-sm font-semibold"
            href={t.portfolio.cvLink}
            target="_blank"
          >
            <FaBriefcase className="w-5 h-5" /> {t.portfolio.portfolioButton}
          </a>
        </div>
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">{t.portfolio.extraData}</h1>
          <ul className="space-y-2">
            {t.portfolio.extraDataList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}
