import Link from "next/link";
import EducationTemplate from "@/components/education/info-education/education-template";
import { educationData } from "@/components/education/info-education/education-data";

export default function EducationPostPage({ params }) {
  const { id } = params;
  const post = educationData?.[id];

  if (!post) {
    return (
      <main className="container mx-auto px-4 py-16">
        <p className="text-neutral-200">Post not found.</p>
        <Link href="/education" className="inline-block mt-6 underline text-neutral-300">
          ← Back to Education
        </Link>
      </main>
    );
  }

  return (
    <main className="container mx-auto px-4 py-16">
      <div className="mb-8">
        <Link href="/education" className="underline text-neutral-300">
          ← Back
        </Link>
      </div>

      <EducationTemplate post={post} />
    </main>
  );
}
