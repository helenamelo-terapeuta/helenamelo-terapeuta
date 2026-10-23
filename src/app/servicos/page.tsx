import type { Metadata } from "next";
import { ServiceGroups } from "@/components/service-groups";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Terapias individuais, yoga, Tai Chi e experiências de bem-estar para hotéis, empresas e grupos, com a Helena Melo.",
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
        Terapias individuais, movimento e experiências para grupos. Em cada
        prática encontras a apresentação, a descrição e um contacto direto.
      </p>
      <ServiceGroups />
    </div>
  );
}
