import React from "react";
import Link from "next/link";
import ProjectCard from "./description-card";

export default function Description_Blog_Education() {
  return (
    <>
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-[1400px]">
          <ProjectCard
            href="/education/Idat"
            date="Marz 18, 2024 / Jul 17, 2024"
            status="Finalized"
            title="Idat"
            description="I completed a course at Idat specializing in Front-end development, learning
                different frameworks and current practices used by companies to improve performance."
          />

          <ProjectCard
            href="/education/Platzi"
            date="Enero 20, 2022"
            status="I keep improving"
            title="Platzi"
            description="It was within Platzi that I acquired the basic knowledge which
            now allows me to face most of the challenges I have every day in this case.
            Platzi was the beginning of my journey to learn about the entire world of computing."
          />
{/*
          <ProjectCard
            href="/education/3"
            date="Ocubre 10, 2023"
            status="I keep improving"
            title="Udemy"
            description="Realicé un curso en Idat para la especialización en desarrollo Front-end, aprendiendo distintos frameworks y prácticas actuales utilizadas por empresas para mejorar el rendimiento."
          />

          <ProjectCard
            href="/education/4"
            date="Febrero 5, 2025"
            status="Finalized"
            title="Hola Mundo!"
            description="Realicé un curso en Idat para la especialización en desarrollo Front-end, aprendiendo distintos frameworks y prácticas actuales utilizadas por empresas para mejorar el rendimiento."
          />

          <ProjectCard
            href="/education/5"
            date="Abril 12, 2025"
            status="I keep improving"
            title="Roadmap.sh"
            description="Realicé un curso en Idat para la especialización en desarrollo Front-end, aprendiendo distintos frameworks y prácticas actuales utilizadas por empresas para mejorar el rendimiento."
          />
*/}
        </div>
    </>
  );
}
