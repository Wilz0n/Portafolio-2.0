"use client";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import Jobs_Card from "./jobs-card.jsx";

export default function Jobs () {
    return (
      <div>
      <article className="space-y-8 pt-12">
        <h2 className="text-3xl font-bold text-center text-[#d4a574]">
         Jobs 
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Jobs_Card
            image="/img/project-in-services/jobs/Job-Mined-World.avif"
            title="Mined-World"
            description="Page developed within the work to display information about it (blog)."
            links={[
              {
                href: "https://mined.world/",
                label: "View",
                icon: FaExternalLinkAlt,
              },
            ]}
          />

          <Jobs_Card
            image="/img/project-in-services/jobs/Job-GV.avif"
            title="Gianvictor"
            description="Ecommerce website developed with WordPress (WP) for selling books and learning subscriptions."
            links={[
              {
                href: "https://gianvictorcueva.com/",
                label: "View",
                icon: FaExternalLinkAlt,
              },
            ]}
          />

          <Jobs_Card
            image="/img/project-in-services/jobs/Job-FWP.avif"
            title="FWP"
            description="Blog page showcasing natural products, developed in WordPress."
            links={[
              {
                href: "https://futureworldproducts.com/",
                label: "View",
                icon: FaExternalLinkAlt,
              },
            ]}
          />

          <Jobs_Card
            image="/img/project-in-services/jobs/Job-Equipo-Gen.avif"
            title="Equipo-gen"
            description="Website for **Equipo GEN** showcasing a community that offers training, mentorship, and tools for entrepreneurship, network marketing, and personal development."
            links={[
              {
                href: "https://equipogen.com/inicio",
                label: "View",
                icon: FaExternalLinkAlt,
              },
            ]}
          />

          <Jobs_Card
            image="/img/project-in-services/jobs/Job-Orgaanika.avif"
            title="Orgaanika"
            description="WordPress-developed ecommerce platform for selling coffee in the USA."
            links={[
              {
                href: "https://us.orgaanika.com/",
                label: "View",
                icon: FaExternalLinkAlt,
              },
            ]}
          />

          <Jobs_Card
            image="/img/project-in-services/jobs/Job-WB.avif"
            title="Worldbinary"
            description="Blog page to demonstrate how an app for selling cryptocurrencies works."
            links={[
              {
                href: "https://worldbinary.pro/",
                label: "View",
                icon: FaExternalLinkAlt,
              },
            ]}
          />
        </div>
      </article>
      </div>
    )
  }




