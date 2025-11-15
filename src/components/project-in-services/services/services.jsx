import React from "react";
import {
  FaLaptopCode,
  FaRocket,
  FaMobileAlt,
  FaCode,
  FaTerminal,
  FaGithub,
  FaShieldAlt,
} from "react-icons/fa";

import {
  FaWordpress,
  FaPalette,
  FaPuzzlePiece,
  FaDatabase,
} from "react-icons/fa";

export default function Services() {
  return (
    <>
      {/* First part of Services */}
      <div className="pt-12 pb-1">
        <h1 className="text-4xl md:text-5xl text-center">SERVICES</h1>
      </div>
      <article className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start ">
          <div className="relative bg-white/5 border border-[#d4a574] rounded-lg overflow-hidden p-4 transform">
            <img
              src="/img/project-in-services/services/code-time.png"
              alt="code-time-custom-web"
              className="w-full h-full rounded"
            />
          </div>
          <div className="space-y-6">
            <div className="border border-[#d4a574] rounded-lg p-6 bg-[#252525]">
              <h2 className="text-3xl font-bold text-[#d4a574] mb-4">
                Custom Web Solutions
              </h2>
              <p className="text-xl leading-relaxed">
                I create fast, modern, and responsive web experiences using
                React, Next.js, or Astro — from landing pages to full business
                platforms, built to match your goals and style.
              </p>
              <p className="text-[#a8a8a8]">
                With semantic HTML5, TailwindCSS, and clean JavaScript, I build
                optimized and scalable interfaces. I also manage basic Linux
                terminal setups for smooth and secure app deployment.
              </p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaLaptopCode className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Modern web design</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaRocket className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Performance velocidad</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaMobileAlt className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Responsive adaptable</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaCode className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Clean code escalabilidad</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-4 text-center transition-colors">
                  <FaTerminal className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Server terminal</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-4 text-center transition-colors">
                  <FaGithub className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Version control GitHub</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      {/* Second part of Services */}

      <article className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start md:grid-flow-dense">
          <div className="md:col-start-2">
            <div className="relative bg-white/5 border border-[#d4a574] rounded-lg overflow-hidden p-4 transform">
              <img
                src="/img/project-in-services/services/sketch.png"
                alt="sketch-cms-custom"
                className="w-full h-full rounded"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="border border-[#d4a574] rounded-lg p-6 bg-[#252525]">
              <h2 className="text-3xl font-bold text-[#d4a574] mb-4">
                WordPress & CMS Development
              </h2>
              <p className="text-xl leading-relaxed">
                I build flexible and modern WordPress websites with custom
                design and functionality — ideal for blogs, businesses, and
                content-driven platforms.
              </p>
              <p className="text-[#a8a8a8]">
                I craft clean themes, integrate plugins, and manage MySQL
                databases using Git/GitHub for scalability. I also handle basic
                Linux terminal tasks to keep your site stable and secure.
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center hover:border-[#d4a574] transition-colors">
                  <FaWordpress className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>WordPress CMS</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaPalette className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Custom design themes</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaPuzzlePiece className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Plugins integracion</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                  <FaDatabase className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Database MySQL</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-4 text-center transition-colors">
                  <FaTerminal className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Linux terminal hosting</p>
                </div>

                <div className="bg-[#252525] border border-[#d4a574] rounded-lg p-4 text-center transition-colors">
                  <FaShieldAlt className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                  <p>Security maintenance</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
