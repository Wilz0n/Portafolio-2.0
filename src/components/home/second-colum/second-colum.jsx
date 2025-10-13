import React from "react";
import Link from "next/link";

function Second_colum() {
  return (
    <>
      {/* Discord Card */}
      <article className="group text-[#E2E2E2] min-h-[200px] blur-effect border-2 border-[#8b7355] relative rounded-[24px] h-full circle row-span-2 col-span-3 p-6">
        <Link href="https://discord.gg/4eChXbNm" className="hover:text-white">
          <div className="absolute top-0 right-0 w-full h-full rounded-[24px] overflow-hidden">
            <img
              src="/img/discord_pixel_art_completo.png"
              alt="discord-icon"
              className="absolute right-0 top-0"
              width={200}
            />
          </div>
          <div className="relative group z-20 flex h-full items-end">
            <div className="flex gap-x-2 items-center">
              <h2 className="text-4xl font-bold">Wilson</h2>
              <div className="text-[#E2E2E2] stroke-[#0F0512] group-hover:stroke-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform pt-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 128 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0ZM40 44C40 46.2091 41.7909 48 44 48H74.3431L41.1716 81.1716C39.6095 82.7337 39.6095 85.2663 41.1716 86.8284C42.7337 88.3905 45.2663 88.3905 46.8284 86.8284L80 53.6569V84C80 86.2091 81.7909 88 84 88C86.2091 88 88 86.2091 88 84V44C88 41.7909 86.2091 40 84 40H44C41.7909 40 40 41.7909 40 44Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </article>

      {/* Portfolio Card */}
      <article className="group text-[#E2E2E2] min-h-[200px] blur-effect border-2 border-[#8b7355] relative rounded-[24px] h-full circle col-span-5">
        <div className="flex items-center p-6">
          <Link href="/portfolio" className="hover:text-white">
            <div className="flex flex-col h-full justify-center gap-4">
              <h2 className="text-4xl font-bold">My portfolio</h2>
              <div className="flex items-center gap-x-2">
                <p className="text-xl">More information about me</p>
                <div className="text-[#E2E2E2] stroke-[#0F0512] group-hover:stroke-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform pt-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0ZM40 44C40 46.2091 41.7909 48 44 48H74.3431L41.1716 81.1716C39.6095 82.7337 39.6095 85.2663 41.1716 86.8284C42.7337 88.3905 45.2663 88.3905 46.8284 86.8284L80 53.6569V84C80 86.2091 81.7909 88 84 88C86.2091 88 88 86.2091 88 84V44C88 41.7909 86.2091 40 84 40H44C41.7909 40 40 41.7909 40 44Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </article>

      {/* Projects in Progress Card */}
      <article className="group text-[#E2E2E2] min-h-[200px] blur-effect border-2 border-[#8b7355] relative rounded-[24px] h-full circle col-span-5">
        <div className="flex items-center p-6">
          <Link href="/projects-in-services" className="hover:text-white">
            <div className="flex flex-col h-full justify-center gap-4">
              <h2 className="text-4xl font-bold">Projects in Services</h2>
              <div className="flex items-center gap-x-2">
                <p className="text-xl">Projects in progress for deployment</p>
                <div className="text-[#E2E2E2] stroke-[#0F0512] group-hover:stroke-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform pt-2">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 128 128"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0ZM40 44C40 46.2091 41.7909 48 44 48H74.3431L41.1716 81.1716C39.6095 82.7337 39.6095 85.2663 41.1716 86.8284C42.7337 88.3905 45.2663 88.3905 46.8284 86.8284L80 53.6569V84C80 86.2091 81.7909 88 84 88C86.2091 88 88 86.2091 88 84V44C88 41.7909 86.2091 40 84 40H44C41.7909 40 40 41.7909 40 44Z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </article>
    </>
  );
}

export default Second_colum;
