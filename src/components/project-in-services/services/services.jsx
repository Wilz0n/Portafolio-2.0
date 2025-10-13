import React from "react";

export default function Services() {
  return (
    <>
      <div className="pt-12 pb-1">
        <h1 className="text-4xl md:text-5xl text-center">SERVICES</h1>
      </div>
      <article className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start ">
          <div className="relative bg-white/5 border border-[#3a3a3a] rounded-lg overflow-hidden p-4 transform -rotate-2">
            <img
              src="/img/discord_pixel_art_completo.png"
              alt="discord-icon"
              className="w-full h-auto rounded"
            />
          </div>
          <div className="space-y-6">
            <div className="border border-[#3a3a3a] rounded-lg p-6 bg-[#252525]">
              <h2 className="text-3xl font-bold text-[#d4a574] mb-4">
                texto titulo
              </h2>
              <p className="text-xl leading-relaxed">
                Description ligera de todo el contenido expresado
              </p>
              <p className="text-[#a8a8a8]">Informacion mas precesisa</p>
            </div>
            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-[#252525] border border-[#3a3a3a] rounded-lg p-3 text-center hover:border-[#d4a574] transition-colors">
                  <h1>colocar icono</h1>
                  <p>Titulo de icono</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <article className="space-y-8">
        <div className="grid md:grid-cols-2 gap-8 items-start md:grid-flow-dense">
          <div className="md:col-start-2">
            <div className="relative bg-white/5 border border-[#3a3a3a] rounded-lg overflow-hidden p-4 transform -rotate-2">
              <img
                src="/img/discord_pixel_art_completo.png"
                alt="discord-icon"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
          <div className="space-y-6">
            <div className="border border-[#3a3a3a] rounded-lg p-6 bg-[#252525]">
              <h2 className="text-3xl font-bold text-[#d4a574] mb-4">
                texto titulo
              </h2>
              <p className="text-xl leading-relaxed">
                Description ligera de todo el contenido expresado
              </p>
              <p className="text-[#a8a8a8]">Informacion mas precesisa</p>
            </div>

            <div className="space-y-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                <div className="bg-[#252525] border border-[#3a3a3a] rounded-lg p-3 text-center hover:border-[#d4a574] transition-colors">
                  <h1>colocar icono</h1>
                  <p>Titulo de icono</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
