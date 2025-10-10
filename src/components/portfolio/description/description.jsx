import React from "react";
import { FaEnvelope, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Description_Portfolio() {
  return (
    <>
      <article className="flex flex-col items-center mt-10">
        <img
          src="/img/Pixilart-avatar-profile.png"
          alt="discord-icon"
          className="rounded-full aspect-square w-50 border-5 border-[#8b7355]"
        />
        <h1 className="text-center text-3xl mt-5">Hi! I'm Javier Bernal</h1>
        <div className="flex gap-6 mt-4 group">
          <FaEnvelope className="w-8 h-8 " />
          <FaInstagram className="w-8 h-8 " />
          <FaGithub className="w-8 h-8 " />
          <FaLinkedin className="w-8 h-8 " />
        </div>
      </article>
      <article className="border-2 border-[#8b7355] rounded-lg p-6 mb-8 backdrop-blur mt-10">
        <h1 className="">
          I'm Jezer Mejía, a software developer specialized in web development
          and systems programming. I love to create things that everyone could
          benefit of, investing my time in open source development. I also love
          physics, science fiction and science related stuff in general. And, if
          not noticed already, I love coffee.
        </h1>
      </article>

      <article className="grid md:grid-cols-2 gap-6 mb-12">
        <div className="border-2 border-[#8b7355] rounded-lg p-6">
          <h1 className="text-2xl mb-4">Work</h1>
          <p>Actualmente trabajando como Desarrollador Front-end</p>
        </div>
        <div className="border-2 border-[#8b7355] rounded-lg p-6">
          <h1 className="text-2xl mb-4">Datos Extras</h1>
          <ul className="space-y-2">
            <li>- Peru</li>
            <li>- 22 años de edad</li>
            <li>- nro: 922-094-521</li>
          </ul>
        </div>
      </article>
    </>
  );
}
