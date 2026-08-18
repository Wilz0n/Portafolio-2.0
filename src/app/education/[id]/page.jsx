"use client";

import { use } from "react";
import Link from "next/link";
import EducationTemplate from "@/components/education/info-education/education-template";
import { educationData } from "@/components/education/info-education/education-data";
import { useLanguage } from "@/context/LanguageContext";

export default function EducationPostPage({ params }) {
  const { id } = use(params);
  const { t } = useLanguage();

  const staticData = educationData?.[id];
  const translatedData = t.education.data?.[id.toLowerCase()];

  if (!staticData || !translatedData) {
    return (
      <main className="container mx-auto px-4 py-16">
        <p className="text-neutral-200">{t.navigation.back}</p>
        <Link href="/education" className="inline-block mt-6 underline text-neutral-300">
          ← {t.navigation.back}
        </Link>
      </main>
    );
  }

  // Combinar datos traducidos con datos estáticos (certificados)
  const post = {
    ...translatedData,
    certificates: staticData.certificates || [],
  };

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/education" className="underline text-neutral-300">
          ← {t.navigation.back}
        </Link>
      </div>

      <EducationTemplate post={post} />
    </main>
  );
}
