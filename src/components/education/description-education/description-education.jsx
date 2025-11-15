import React from "react";
import Link from "next/link";
import ProjectCard from "./description-card";

export default function Description_Blog_Education() {
  return (
    <>
      <Link href="">
        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 max-w-[1400px]">
          <ProjectCard
            href="/info-education/education-info-blog"
            date="Marz 18, 2024 / Jul 17, 2024"
            status="Finalized"
            title="Idat"
            description="Realicé un curso en Idat para la especialización en desarrollo Front-end, aprendiendo distintos frameworks y prácticas actuales utilizadas por empresas para mejorar el rendimiento."
          />

          <ProjectCard
            href="/info-education/education-info-blog"
            date="Enero 20, 2022"
            status="I keep improving"
            title="Platzi"
            description="Dentro de Platzi es donde pude adquiri los conocimientos basicos los cuales ahora me permite poder hacerle frente a la mayoria de retos que tengo dia a dia en este caso Platzi fue el inicio de donde llegue a aprender sobre todo este mundo de la informatica."
          />

          <ProjectCard
            href="/info-education/education-info-blog"
            date="Ocubre 10, 2023"
            status="I keep improving"
            title="Udemy"
            description="Realicé un curso en Idat para la especialización en desarrollo Front-end, aprendiendo distintos frameworks y prácticas actuales utilizadas por empresas para mejorar el rendimiento."
          />

          <ProjectCard
            href="/info-education/education-info-blog"
            date="Febrero 5, 2025"
            status="Finalized"
            title="Hola Mundo!"
            description="Realicé un curso en Idat para la especialización en desarrollo Front-end, aprendiendo distintos frameworks y prácticas actuales utilizadas por empresas para mejorar el rendimiento."
          />

          <ProjectCard
            href="/info-education/education-info-blog"
            date="Abril 12, 2025"
            status="I keep improving"
            title="Roadmap.sh"
            description="Realicé un curso en Idat para la especialización en desarrollo Front-end, aprendiendo distintos frameworks y prácticas actuales utilizadas por empresas para mejorar el rendimiento."
          />
        </div>
      </Link>
    </>
  );
}
