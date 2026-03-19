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

export default function Description_Portfolio() {
  return (
    <>
      <article className="flex flex-col items-center mt-10">
        <img
          src="/img/profile-pixel.avif"
          alt="discord-icon"
          className="rounded-full aspect-square w-50 border-4 border-[#8b7355]"
        />
        <h1 className="text-center text-3xl mt-5">"I'm Javier Bernal Acosta. Fullstack Developer & Automation Specialist."</h1>
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
            href="/documents/javier-bernal-acosta.pdf"
            target="_blank"
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaBriefcase className="w-6 h-6" />
          </Link>
        </div>
      </article>

      <article className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6 mb-8 backdrop-blur mt-10">

        <h1 className="">
          Fullstack Developer & Automation Specialist with nearly 4 years of experience building high-performance 
          digital ecosystems. I specialize in developing modern interfaces with Next.js and Astro, while optimizing 
          backend efficiency through n8n automation and Docker deployments. My expertise spans from managing secure 
          cloud infrastructures in Cloudflare to resolving critical security issues and malware. I don't just build 
          websites; I engineer scalable solutions that automate workflows and drive business growth.
        </h1>
      </article>

      <article className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Work</h1>
          <p className="mb-6">I currently work as a Front-end developer</p>
          <a
            className="flex items-center gap-2 px-4 py-2 w-fit border-2 border-[#8b7355] bg-[#2a2a2a] text-[#e8e6e3] rounded-lg hover:bg-[#d4a574] hover:text-[#1a1a1a] transition-all duration-200 text-sm font-semibold"
            href="/documents/javier-bernal-acosta.pdf"
            target="_blank"
          >
          <FaBriefcase className="w-5 h-5" /> Portfolio
          </a>
        </div>
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Extra data</h1>
          <ul className="space-y-2">
            <li>- Perú</li>
            <li>- 22 years old</li>
            <li>- nro: 922-094-521</li>
          </ul>
        </div>
      </article>
    </>
  );
}
