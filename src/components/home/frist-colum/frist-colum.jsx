import React from "react";
import Link from "next/link";

function Frist_colum() {
  return (
    <>
      <article className="group text-[#E2E2E2] min-h-[200px] blur-effect border-2 border-[#8b7355] relative rounded-[24px] h-full  circle col-span-5">
        <div className="px-8 py-4 flex gap-x-4 items-center justify-center h-full">
          <img
            src="/img/Pixilart-avatar-profile.png"
            alt="profile-photo"
            className="rounded-full aspect-square w-35 border-5 border-[#8b7355]"
          />
          <div>
            <div className="flex flex-row items-center gap-x-2">
              <h2 className="text-4xl font-bold">Hello!</h2>
            </div>
            <p className="text-[20px]">
              Front-end developer looking to improve day by day.
            </p>
          </div>
        </div>
      </article>
      <article className="group text-[#E2E2E2] min-h-[200px] blur-effect border-2 border-[#8b7355] relative rounded-[24px] h-full  circle row col-span-3">
        <Link
          href="/portfolio"
          className="flex flex-col p-6 hover:text-white text-4xl h-full"
        >
          <div className="w-full flex justify-end">
            <img
              src="/img/icons/icons-profile/taza_blanca.png"
              alt="education-icon"
              className="absolute right-0 top-0"
              width={120}
            />
          </div>

          <div className="flex-1 flex items-end">
            <div className="flex gap-x-2 items-center">
              <p>Education</p>
              <div className="text-[#E2E2E2] stroke-[#0F0512] group-hover:stroke-white group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform pt-2">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 128 128"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {" "}
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M64 0C28.6538 0 0 28.6538 0 64C0 99.3462 28.6538 128 64 128C99.3462 128 128 99.3462 128 64C128 28.6538 99.3462 0 64 0ZM40 44C40 46.2091 41.7909 48 44 48H74.3431L41.1716 81.1716C39.6095 82.7337 39.6095 85.2663 41.1716 86.8284C42.7337 88.3905 45.2663 88.3905 46.8284 86.8284L80 53.6569V84C80 86.2091 81.7909 88 84 88C86.2091 88 88 86.2091 88 84V44C88 41.7909 86.2091 40 84 40H44C41.7909 40 40 41.7909 40 44Z"
                    fill="currentColor"
                  ></path>{" "}
                </svg>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </>
  );
}

export default Frist_colum;
