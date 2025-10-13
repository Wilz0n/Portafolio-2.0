import React from "react";

export default function Project() {
  return (
    <>
      <article className="text-center space-y-6 py-12">
        <h2 className="text-2xl font-bold text-[#d4a574]">titulo para email</h2>
        <p className="text-sm text-[#a8a8a8] max-w-2xl mx-auto leading-relaxed">
          If you have a problem with Web Development, Software maintenance,
          Systems Programming, or any software-related consultation, don't
          hesitate to contact me so we can discuss your request.
        </p>
        <button
          className="bg-[#252525] border border-[#3a3a3a] hover:border-[#d4a574] text-[#e8e6e3] px-6 py-3 rounded-lg text-sm transition-colors"
          type=""
        >
          📧 Email me
        </button>
      </article>

      <article className="space-y-8 pt-12">
        <h2 className="text-3xl font-bold text-center text-[#d4a574]">
          Project
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-[#252525] border border-[#3a3a3a] rounded-lg overflow-hidden hover:border-[#d4a574] transition-colors">
            <div className="h-40 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
              <img
                src="/img/discord_pixel_art_completo.png"
                alt="discord-icon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-3">
              <h3 className="text-lg font-bold text-[#e8e6e3]">Web Creator</h3>
              <p className="text-xs text-[#a8a8a8] leading-relaxed">
                Web creator for creating high-quality, fast and high-modular
                creator
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
