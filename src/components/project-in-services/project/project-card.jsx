"use client";
import Link from "next/link";

export default function Project_Card({
  image,
  title,
  description,
  links = [], // Array de botones (cada uno con href, label, icon)
}) {
  return (
    <div className="bg-[#252525] border border-[#d4a574] rounded-lg overflow-hidden hover:border-[#8b7355] transition-colors">
      <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
        {image ? (
          <img src={image} alt={title} className="w-full h-full object-cover" />
        ) : (
          <div className="text-[#d4a574] text-4xl">🧩</div> // fallback sin imagen
        )}
      </div>

      <div className="p-4 space-y-3">
        <h3 className="text-lg font-bold text-[#e8e6e3]">{title}</h3>
        <p className="text-xs text-[#a8a8a8] leading-relaxed">{description}</p>

        {links.length > 0 && (
          <div className="flex flex-wrap gap-3 pt-2">
            {links.map(({ href, label, icon: Icon }, i) => (
              <Link
                key={i}
                href={href}
                className="flex items-center gap-2 px-4 py-2 border-2 border-[#8b7355] bg-[#2a2a2a] text-[#e8e6e3] rounded-lg hover:bg-[#d4a574] hover:text-[#1a1a1a] transition-all duration-200 text-xs font-semibold"
              >
                {Icon && <Icon className="w-5 h-5" />}
                <p>{label}</p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
