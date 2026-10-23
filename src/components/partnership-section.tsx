import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { assetPath } from "@/content/site";
import { getService, partnershipSlugs } from "@/content/services";

export function PartnershipSection() {
  const featured = partnershipSlugs.flatMap((slug) => {
    const service = getService(slug);
    return service ? [service] : [];
  });

  return (
    <section id="hoteis" className="scroll-mt-24 bg-tide text-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24 lg:px-8">
        <p className="text-xs tracking-[0.22em] text-aqua uppercase">
          Colaborações
        </p>
        <h2 className="mt-3 max-w-3xl font-serif text-5xl leading-[0.95] text-balance md:text-6xl">
          Para Hotéis e Empresas
        </h2>
        <p className="mt-5 max-w-2xl text-lg leading-relaxed text-pretty text-mist">
          Levo o Morning Flow aos hóspedes e o Reset & Recharge às equipas.
          Experiências de movimento, respiração e presença, adaptadas ao lugar
          e ao grupo.
        </p>
        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {featured.map((service) => (
            <article key={service.slug} className="flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={assetPath(service.image.src)}
                  alt={service.image.alt}
                  fill
                  sizes="(min-width: 1024px) 46vw, 100vw"
                  className="object-cover"
                />
              </div>
              <h3 className="mt-6 font-serif text-4xl leading-tight text-balance">
                <Link
                  href={`/servicos/${service.slug}`}
                  className="transition hover:text-aqua"
                >
                  {service.title}
                </Link>
              </h3>
              <p className="mt-3 font-serif text-xl leading-snug text-pretty text-aqua italic">
                {service.lead}
              </p>
              <p className="mt-4 leading-relaxed text-pretty text-mist">
                {service.paragraphs[0]}
              </p>
            </article>
          ))}
        </div>
        <ContactActions
          tone="dark"
          messageLabel="Propor uma colaboração"
          className="mt-12"
        />
        <p className="mt-6 max-w-xl text-sm leading-relaxed text-mist">
          Para grupos privados, retiros e eventos, há também a{" "}
          <Link href="/servicos/inner-glow" className="text-aqua underline underline-offset-4">
            Inner Glow Experience
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
