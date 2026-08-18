"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Jobs_Card from "./jobs-card.jsx";
import { useLanguage } from "@/context/LanguageContext";

export default function Jobs() {
  const { t } = useLanguage();

  const jobImages = [
    "/img/project-in-services/jobs/Job-Mined-World.avif",
    "/img/project-in-services/jobs/Job-GV.avif",
    "/img/project-in-services/jobs/Job-FWP.avif",
    "/img/project-in-services/jobs/Job-Equipo-Gen.avif",
    "/img/project-in-services/jobs/Job-Orgaanika.avif",
    "/img/project-in-services/jobs/Job-WB.avif",
    "/img/project-in-services/jobs/Job-Identimax.avif",
    "/img/project-in-services/jobs/Job-UkiyoSteel.avif",
  ];

  const jobLinks = [
    [{ href: "https://mined.world/", label: "View", icon: FaExternalLinkAlt }],
    [{ href: "https://gianvictorcueva.com/", label: "View", icon: FaExternalLinkAlt }],
    [{ href: "https://futureworldproducts.com/", label: "View", icon: FaExternalLinkAlt }],
    [{ href: "https://equipogen.com/inicio", label: "View", icon: FaExternalLinkAlt }],
    [{ href: "https://us.orgaanika.com/", label: "View", icon: FaExternalLinkAlt }],
    [{ href: "https://worldbinary.pro/", label: "View", icon: FaExternalLinkAlt }],
    [{ href: "https://identimax.vercel.app/", label: "View", icon: FaExternalLinkAlt }],
    [{ href: "https://ukiyo-steel-six.vercel.app/", label: "View", icon: FaExternalLinkAlt }],
  ];

  return (
    <div>
      <article className="space-y-8 pt-12">
        <h2 className="text-3xl font-bold text-center text-[#d4a574]">
          {t.jobs.title}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {t.jobs.items.map((item, index) => (
            <Jobs_Card
              key={index}
              image={jobImages[index]}
              title={item.title}
              description={item.description}
              links={jobLinks[index]}
            />
          ))}
        </div>
      </article>
    </div>
  );
}
