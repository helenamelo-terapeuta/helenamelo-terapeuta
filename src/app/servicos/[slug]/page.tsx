import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ContactActions } from "@/components/contact-actions";
import { FaqList } from "@/components/faq-list";
import { JsonLd } from "@/components/json-ld";
import { getService, services } from "@/content/services";
import { serviceJsonLd } from "@/lib/structured-data";

type ServicePageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.seoDescription,
    alternates: { canonical: `/servicos/${service.slug}` },
    openGraph: {
      title: `${service.title} · Helena Melo`,
      description: service.seoDescription,
      url: `/servicos/${service.slug}`,
    },
  };
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = getService(slug);

  if (!service) {
    notFound();
  }

  const others = services.filter((item) => item.slug !== service.slug);

  return (
    <article>
      <JsonLd data={serviceJsonLd(service)} />
      <header className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-14 md:grid-cols-12 md:py-20 lg:px-8">
        <div className="md:col-span-7">
          <p className="text-sm text-muted">
            <Link href="/" className="hover:text-teal">
              Início
            </Link>
            <span aria-hidden="true"> / </span>
            <Link href="/servicos" className="hover:text-teal">
              Serviços
            </Link>
            <span aria-hidden="true"> / </span>
            <span className="text-ink">{service.title}</span>
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-[0.95] text-balance text-ink md:text-7xl">
            {service.title}
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-muted">
            {service.summary}
          </p>
          <ContactActions className="mt-8" />
        </div>
        <div className="relative aspect-square overflow-hidden md:col-span-5">
          <Image
            src={service.image.src}
            alt={service.image.alt}
            fill
            priority
            sizes="(min-width: 768px) 38vw, 100vw"
            className="object-cover"
          />
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-12 px-5 pb-16 md:grid-cols-12 md:pb-24 lg:px-8">
        <div className="space-y-5 text-lg leading-relaxed text-pretty text-ink md:col-span-7">
          {service.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
        <aside className="h-fit bg-foam p-6 md:col-span-5">
          <h2 className="font-serif text-3xl text-ink">O que podes esperar</h2>
          <ul className="mt-4 space-y-3 text-muted">
            {service.expects.map((item) => (
              <li key={item} className="border-t border-line pt-3">
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:pb-24 lg:px-8">
        <h2 className="font-serif text-4xl text-ink md:text-5xl">
          Perguntas frequentes
        </h2>
        <div className="mt-6">
          <FaqList faqs={service.faqs} />
        </div>
      </section>

      <section className="border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
          <h2 className="font-serif text-3xl text-ink">Outros caminhos</h2>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {others.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/servicos/${item.slug}`}
                  className="block border border-line p-5 transition hover:border-teal"
                >
                  <span className="font-serif text-2xl text-ink">{item.title}</span>
                  <span className="mt-2 block text-sm text-teal">Ver página</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </article>
  );
}
