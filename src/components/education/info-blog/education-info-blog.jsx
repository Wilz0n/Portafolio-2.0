import React from "react";
import Link from "next/link";

export default function Education_Info_Blog() {
  return (
    <>
      <Link href="">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-[1400px]">
          <article className="border-2 border-[#8b7355] rounded-xl p-4 hover:border-[#4a4a4a] transition-colors cursor-pointer">
            <div className="flex justify-between items-center mb-3 text-xs text-[#8a8a8a]">
              <h3>Colocar mes, dia y año</h3>
              <h3>colocar hora</h3>
            </div>
            <h2 className="text-base mb-2 text-[#f5e6d3]">
              Colocar nombre de Curso
            </h2>
            <p className="text-sm text-[#a8a8a8] leading-relaxed line-clamp-3">
              My reluctance to AI and how I'm embracing it today on my
              day-to-day life and work
            </p>
          </article>
        </div>
      </Link>
    </>
  );
}
