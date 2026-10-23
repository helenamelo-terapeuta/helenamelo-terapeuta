import type { Metadata } from "next";
import Link from "next/link";
import { services } from "@/content/services";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Hipnoterapia, astrologia e tarot com a Helena Melo. Consultas online e presenciais.",
  alternates: { canonical: "/servicos" },
};

export default function ServicesPage() {
  return (
    <div className="mx-auto max-w-6xl px-5 py-14 md:py-20 lg:px-8">
      <p className="text-xs tracking-[0.22em] text-teal uppercase">Serviços</p>
      <h1 className="mt-3 max-w-3xl font-serif text-5xl leading-[0.95] text-balance text-ink md:text-7xl">
        Escolhe o caminho, ou deixa que a conversa o escolha.
      </h1>
      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-pretty text-muted">
        Três formas de acompanhamento. Em cada página encontras o que é a
        prática, o que podes esperar e as perguntas mais comuns antes de
        marcar.
      </p>
      <ol className="mt-12 border-b border-line">
        {services.map((service, index) => (
          <li key={service.slug}>
            <Link
              href={`/servicos/${service.slug}`}
              className="group grid gap-3 border-t border-line py-8 md:grid-cols-12 md:gap-6"
            >
              <span className="font-script text-4xl text-lagoon md:col-span-2">
                0{index + 1}
              </span>
              <div className="md:col-span-8">
                <h2 className="font-serif text-4xl text-ink transition group-hover:text-teal">
                  {service.title}
                </h2>
                <p className="mt-3 max-w-xl text-pretty text-muted">
                  {service.summary}
                </p>
              </div>
              <span className="text-sm text-teal md:col-span-2 md:pt-3 md:text-right">
                Abrir página
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </div>
  );
}
