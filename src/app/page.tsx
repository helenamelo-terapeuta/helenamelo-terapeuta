import Image from "next/image";
import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";
import { InstagramGrid } from "@/components/instagram-grid";
import { JsonLd } from "@/components/json-ld";
import { assetPath, site } from "@/content/site";
import { services } from "@/content/services";
import { practiceJsonLd } from "@/lib/structured-data";

const steps = [
  {
    title: "Escreves ou ligas",
    text: "Uma mensagem no Instagram ou uma chamada chegam ao mesmo lugar.",
  },
  {
    title: "Combinamos o formato",
    text: "Online ou presencial, conforme o que fizer sentido para ti.",
  },
  {
    title: "Chegas como estás",
    text: "Não precisas do nome certo para o que sentes. Basta trazer o tema.",
  },
];

export default function Home() {
  return (
    <>
      <JsonLd data={practiceJsonLd()} />
      <section className="overflow-hidden">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-14 md:grid-cols-12 md:py-20 lg:px-8">
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.22em] text-teal uppercase">
              Terapeuta holística · desde 2015
            </p>
            <h1 className="mt-4 font-serif text-[clamp(3.3rem,6.5vw,5.5rem)] leading-[0.9] font-medium tracking-tight text-ink">
              <span className="block">Com amor e</span>
              <span className="mt-1 block font-script text-[1.22em] leading-[0.75] font-normal text-teal">
                consciência,
              </span>
              <span className="mt-2 block">podes ser quem</span>
              <span className="block">queres ser.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-pretty text-muted">
              Acompanho-te em consultas de hipnoterapia, astrologia e tarot.
              Online ou presencialmente.
            </p>
            <ContactActions className="mt-8" />
          </div>
          <div className="relative hidden md:col-span-5 md:block">
            <div
              className="absolute -top-6 -right-3 -bottom-6 left-8 hidden bg-tide md:block"
              aria-hidden="true"
            />
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={assetPath("/images/forest-meditation.jpg")}
                alt="Mulher em meditação sobre uma rocha, num pinhal com luz filtrada"
                fill
                priority
                sizes="(min-width: 768px) 38vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section aria-label="Práticas" className="border-y border-line">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-8 gap-y-3 px-5 py-5 text-sm tracking-[0.16em] text-teal uppercase lg:px-8">
          {services.map((service) => (
            <li key={service.slug}>
              <Link href={`/servicos/${service.slug}`} className="hover:text-ink">
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section id="sobre" className="scroll-mt-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 md:grid-cols-12 md:py-24 lg:px-8">
          <div className="md:col-span-5">
            <div className="relative aspect-[3/4] overflow-hidden">
              <Image
                src={assetPath("/images/morning-light.jpg")}
                alt="Mulher em perfil, de manhã, junto a uma janela"
                fill
                sizes="(min-width: 768px) 36vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="text-xs tracking-[0.22em] text-teal uppercase">
              Sobre
            </p>
            <h2 className="mt-3 font-serif text-5xl leading-[0.95] text-balance text-ink md:text-6xl">
              Uma prática de presença, desde 2015.
            </h2>
            <div className="mt-6 space-y-4 text-lg leading-relaxed text-pretty text-muted">
              <p>
                Sempre me interessou o propósito de estarmos aqui, e a forma
                como a vida, tantas vezes, nos afasta dele. Acompanho pessoas
                que querem voltar a esse lugar com mais verdade.
              </p>
              <p>
                Hipnoterapia, astrologia e tarot são linguagens diferentes
                para a mesma intenção: recordar que podes ser quem queres ser.
              </p>
              <p>
                As consultas acontecem online ou presencialmente. Não precisas
                de chegar com as palavras certas. Chega trazeres o que te
                ocupa.
              </p>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-6xl gap-3 px-5 pb-16 md:grid-cols-2 md:pb-24 lg:px-8">
          <figure className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={assetPath("/images/beach-sit.jpg")}
              alt="Mulher sentada na areia, de frente para o mar"
              fill
              sizes="(min-width: 768px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>
          <figure className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={assetPath("/images/yoga-hill.jpg")}
              alt="Mulher em posição de yoga num monte, com um vale e um rio ao fundo"
              fill
              sizes="(min-width: 768px) 48vw, 100vw"
              className="object-cover"
            />
          </figure>
        </div>
      </section>

      <section id="servicos" className="scroll-mt-24 border-t border-line">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs tracking-[0.22em] text-teal uppercase">
              Serviços
            </p>
            <h2 className="mt-3 font-serif text-5xl leading-[0.95] text-balance text-ink md:text-6xl">
              Três caminhos, a mesma intenção.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-pretty text-muted">
              Cada área tem a sua página, com o essencial da prática e as
              perguntas que costumam chegar antes da primeira sessão.
            </p>
          </div>
          <ol className="mt-10 border-b border-line">
            {services.map((service, index) => (
              <li key={service.slug}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="group grid gap-3 border-t border-line py-7 md:grid-cols-12 md:items-baseline md:gap-6"
                >
                  <span className="font-script text-4xl leading-none text-lagoon md:col-span-2">
                    0{index + 1}
                  </span>
                  <h3 className="font-serif text-4xl text-ink transition group-hover:text-teal md:col-span-4">
                    {service.title}
                  </h3>
                  <p className="text-pretty text-muted md:col-span-5">
                    {service.summary}
                  </p>
                  <span className="text-sm tracking-wide text-teal md:col-span-1 md:text-right">
                    Ver
                  </span>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-foam">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-20 lg:px-8">
          <h2 className="font-serif text-4xl text-ink md:text-5xl">
            Como começamos
          </h2>
          <ol className="mt-8 grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title}>
                <p className="font-script text-4xl text-lagoon">0{index + 1}</p>
                <h3 className="mt-2 font-serif text-3xl text-ink">{step.title}</h3>
                <p className="mt-2 leading-relaxed text-pretty text-muted">
                  {step.text}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <InstagramGrid />

      <section id="contacto" className="scroll-mt-24 bg-tide text-paper">
        <div className="mx-auto max-w-6xl px-5 py-16 md:py-24 lg:px-8">
          <p className="font-script text-5xl leading-none text-aqua md:text-6xl">
            fala comigo
          </p>
          <h2 className="mt-4 max-w-xl font-serif text-5xl leading-[0.95] text-balance md:text-6xl">
            Quando quiseres começar, estou do outro lado.
          </h2>
          <a
            href={site.phoneHref}
            className="mt-8 block font-serif text-4xl tracking-tight text-paper hover:text-aqua md:text-6xl"
          >
            {site.phoneDisplay}
          </a>
          <ContactActions tone="dark" className="mt-8" />
          <p className="mt-8 text-sm text-mist">
            Também podes escrever para{" "}
            <a
              href={`mailto:${site.email}`}
              className="underline decoration-aqua/70 underline-offset-4"
            >
              {site.email}
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
