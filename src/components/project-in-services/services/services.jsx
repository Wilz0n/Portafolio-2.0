"use client";

import React from "react";
import {
  FaLaptopCode,
  FaRocket,
  FaMobileAlt,
  FaCode,
  FaTerminal,
  FaGithub,
  FaShieldAlt,
  FaSitemap,
  FaWordpress,
  FaPalette,
  FaPuzzlePiece,
  FaDatabase,
} from "react-icons/fa";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();

  const section1Icons = [FaLaptopCode, FaRocket, FaMobileAlt, FaCode];
  const section1BottomIcons = [FaTerminal, FaSitemap];
  const section2Icons = [FaWordpress, FaPalette, FaPuzzlePiece, FaDatabase];
  const section2BottomIcons = [FaTerminal, FaShieldAlt];

  return (
    <>
      {/* First part of Services */}
      <div className="pt-12 pb-1">
        <h1 className="text-4xl md:text-5xl text-center">{t.services.title}</h1>
      </div>
      <article className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start ">
          <div className="relative bg-white/5 border border-[#d4a574] rounded-lg overflow-hidden p-4 transform">
            <img
              src="/img/project-in-services/services/code-time.avif"
              alt="code-time-custom-web"
              className="w-full h-full rounded"
            />
          </div>
          <div className="space-y-6">
            <div className="border border-[#d4a574] rounded-lg p-6 bg-[#252525]">
              <h2 className="text-3xl font-bold text-[#d4a574] mb-4">
                {t.services.section1.title}
              </h2>
              <p className="text-xl leading-relaxed">
                {t.services.section1.description}
              </p>
              <p className="text-[#a8a8a8]">
                {t.services.section1.subdescription}
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {t.services.section1.tags.map((tag, index) => {
                  const Icon = section1Icons[index];
                  return (
                    <div key={index} className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                      <Icon className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                      <p>{tag}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.services.section1.bottomTags.map((tag, index) => {
                  const Icon = section1BottomIcons[index];
                  return (
                    <div key={index} className="bg-[#252525] border border-[#d4a574] rounded-lg p-4 text-center transition-colors">
                      <Icon className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                      <p>{tag}</p>
                    </div>
                  );
                })}
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
                src="/img/project-in-services/services/sketch.avif"
                alt="sketch-cms-custom"
                className="w-full h-full rounded"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="border border-[#d4a574] rounded-lg p-6 bg-[#252525]">
              <h2 className="text-3xl font-bold text-[#d4a574] mb-4">
                {t.services.section2.title}
              </h2>
              <p className="text-xl leading-relaxed">
                {t.services.section2.description}
              </p>
              <p className="text-[#a8a8a8]">
                {t.services.section2.subdescription}
              </p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {t.services.section2.tags.map((tag, index) => {
                  const Icon = section2Icons[index];
                  return (
                    <div key={index} className="bg-[#252525] border border-[#d4a574] rounded-lg p-3 text-center transition-colors">
                      <Icon className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                      <p>{tag}</p>
                    </div>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {t.services.section2.bottomTags.map((tag, index) => {
                  const Icon = section2BottomIcons[index];
                  return (
                    <div key={index} className="bg-[#252525] border border-[#d4a574] rounded-lg p-4 text-center transition-colors">
                      <Icon className="w-8 h-8 mx-auto mb-2 text-[#d4a574]" />
                      <p>{tag}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
