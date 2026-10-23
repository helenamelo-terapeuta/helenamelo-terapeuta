import Link from "next/link";
import { site } from "@/content/site";
import { categories, servicesIn, type Service } from "@/content/services";

function ContactButton({ label = "Contactar" }: { label?: string }) {
  return (
    <a
      href={site.instagramMessages}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex min-h-12 items-center justify-center rounded-full bg-tide px-6 text-[0.95rem] text-paper transition hover:bg-teal"
    >
      {label}
      <span className="sr-only">, abre as mensagens do Instagram</span>
    </a>
  );
}

function ServiceEntry({ service }: { service: Service }) {
  return (
    <article className="flex h-full flex-col border-t border-line py-8">
      <h3 className="font-serif text-3xl leading-tight text-balance text-ink md:text-4xl">
        <Link
          href={`/servicos/${service.slug}`}
          className="transition hover:text-teal"
        >
          {service.title}
        </Link>
      </h3>
      <p className="mt-3 font-serif text-xl leading-snug text-pretty text-teal italic">
        {service.lead}
      </p>
      <div className="mt-4 space-y-3 leading-relaxed text-pretty text-muted">
        {service.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-x-5 gap-y-3">
        <ContactButton />
        <Link
          href={`/servicos/${service.slug}`}
          className="text-sm tracking-wide text-teal underline decoration-teal/30 underline-offset-4 hover:decoration-teal"
        >
          Saber mais
        </Link>
      </div>
    </article>
  );
}

export function ServiceGroups() {
  return (
    <div className="mt-14 space-y-16">
      {categories.map((category) => (
        <section key={category.id} id={category.id} className="scroll-mt-24">
          <h2 className="font-serif text-4xl text-ink md:text-5xl">
            {category.title}
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
            {category.intro}
          </p>
          <div className="mt-4 grid gap-x-12 md:grid-cols-2">
            {servicesIn(category.id).map((service) => (
              <ServiceEntry key={service.slug} service={service} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
