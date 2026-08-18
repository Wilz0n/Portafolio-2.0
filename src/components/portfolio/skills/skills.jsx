"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

export default function Skills_Portfolio() {
  const { t } = useLanguage();

  return (
    <>
      <h1 className="text-3xl text-center mb-8">{t.skills.title}</h1>
      <article className="grid md:grid-cols-2 gap-6 mb-6">
        
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">{t.skills.frontend.title}</h1>
          <ul>
            {t.skills.frontend.items.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>

        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">{t.skills.automation.title}</h1>
          <ul>
            {t.skills.automation.items.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>

      </article>
      <article className="grid md:grid-cols-3 gap-6">
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">{t.skills.webOps.title}</h1>
          <ul>
            {t.skills.webOps.items.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>

        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">{t.skills.mobile.title}</h1>
          <ul className="text-2xl">
            {t.skills.mobile.items.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
        <div className="border-2 border-[#8b7355] bg-[#252525] rounded-lg p-6">
          <h1 className="text-2xl mb-4 font-bold">{t.skills.design.title}</h1>
          <ul>
            {t.skills.design.items.map((item, index) => (
              <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
          </ul>
        </div>
      </article>
    </>
  );
}
