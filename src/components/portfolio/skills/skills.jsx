import React from "react";

export default function Skills_Portfolio() {
  return (
    <>
      <h1 className="text-3xl text-center mb-8">Skills</h1>
      <article className="grid md:grid-cols-2 gap-6 mb-6">
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Web Development</h1>
          <ul>
            <li>- JS</li>
            <li>- React/Next.js/Astro</li>
            <li>- Wordpres</li>
            <li>- Git/Git.hub</li>
          </ul>
        </div>

        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Work System</h1>
          <ul>
            <li>- Window</li>
            <li>- Linux/Arch, Ubuntu</li>
            <li>- MacOS</li>
          </ul>
        </div>
      </article>
      <article className="grid md:grid-cols-3 gap-6">
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Databases</h1>
          <ul>
            <li>- MySQL</li>
          </ul>
        </div>

        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Mobile development</h1>
          <ul>
            <li> In Progress </li>
          </ul>
        </div>
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">Design</h1>
          <ul>
            <li>- Figma</li>
            <li>- Inkscape</li>
            <li>- Ilustrator</li>
          </ul>
        </div>
      </article>
    </>
  );
}
