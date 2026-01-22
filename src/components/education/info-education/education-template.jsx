import Image from "next/image";

export default function EducationTemplate({ post }) {
  if (!post) return null;

  const { title, date, language, description, content, certificates } = post;

  // convierte "texto\n\ntexto" a párrafos
  const paragraphs = typeof content === "string"
    ? content.split("\n\n").filter(Boolean)
    : [];

  return (
    <article className="w-full max-w-4xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-neutral-100">
          {title}
        </h2>

        <div className="mt-3 text-sm text-neutral-400 space-y-1">
          {date && <p>Posted on: {date}</p>}
          {language && <p>Language: {language}</p>}
          {description && <p className="text-neutral-300">{description}</p>}
        </div>

        <div className="mt-6 h-px w-full bg-neutral-800" />
      </header>

      {/* Body text */}
      <div className="space-y-6 leading-relaxed text-neutral-200">
        {paragraphs.map((p, idx) => (
          <p key={idx} className="text-[15px] sm:text-base">
            {p}
          </p>
        ))}
      </div>

      {/* Mosaic */}
      {Array.isArray(certificates) && certificates.length > 0 && (
        <div className="mt-12">
          <div className="mb-4 flex items-center gap-3">
            <h3 className="text-lg font-semibold text-neutral-100">
              Certificates
            </h3>
            <div className="h-px flex-1 bg-neutral-800" />
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {certificates.map((c) => (
              <div
                key={c.id}
                className="relative aspect-square overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900"
                title={c.title}
              >
                <Image
                  src={c.image}
                  alt={c.title || "certificate"}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-[1.03]"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
}
