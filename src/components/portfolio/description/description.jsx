import React from "react";
import {
  FaEnvelope,
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaDiscord,
} from "react-icons/fa";
import Link from "next/link";

export default function Description_Portfolio() {
  return (
    <>
      <article className="flex flex-col items-center mt-10">
        <img
          src="/img/Pixilart-avatar-profile.png"
          alt="discord-icon"
          className="rounded-full aspect-square w-50 border-4 border-[#8b7355]"
        />
        <h1 className="text-center text-3xl mt-5">Hi! I'm Javier Bernal</h1>
        <div className="flex gap-3 mt-6 group">
          <Link
            href=""
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaEnvelope className="w-6 h-6" />
          </Link>

          <Link
            href=""
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaInstagram className="w-6 h-6" />
          </Link>

          <Link
            href=""
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaGithub className="w-6 h-6" />
          </Link>

          <Link
            href=""
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaLinkedin className="w-6 h-6" />
          </Link>

          <Link
            href=""
            className="w-12 h-12 flex items-center justify-center border-2 border-[#8b7355] rounded-lg bg-[#2a2a2a] text-[#a8b5a0] hover:bg-[#d4a574] hover:text-[#1a1a1a] hover:border-[#d4a574] transition-all duration-200"
          >
            <FaDiscord className="w-6 h-6" />
          </Link>
        </div>
      </article>
      <article className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6 mb-8 backdrop-blur mt-10">
        <h1 className="">
          Web developer with experience in React.js, Next.js, and Astro, focused
          on building efficient and modern interfaces. Handling layout
          frameworks such as Tailwind CSS and Bootstrap, along with version
          control via Git/GitHub. Solid experience in WordPress, both in
          development and in administration and optimization. Familiar with
          Linux environments (Ubuntu) and server management via terminal,
          focused on clean and automated deployments.
        </h1>
      </article>

      <article className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Work</h1>
          <p>I currently work as a Front-end developer</p>
          <p>Colocar CV en formato PDF</p>
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
