import React from "react";
import Link from "next/link";

export default function ProjectCard({
  href = "#",
  date,
  status,
  title,
  description,
}) {
  return (
    <Link href="">
      <article className="border-2 border-[#8b7355] rounded-xl p-4 hover:border-[#4a4a4a] bg-[#252525] transition-colors cursor-pointer">
        <div className="flex justify-between items-center mb-3 text-xs text-[#8a8a8a]">
          <h3>{date}</h3>
          <h3>{status}</h3>
        </div>

        <h2 className="text-base mb-2 text-[#f5e6d3]">{title}</h2>

        <p className="text-sm text-[#a8a8a8] leading-relaxed line-clamp-3">
          {description}
        </p>
      </article>
    </Link>
  );
}
