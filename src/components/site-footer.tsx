import Link from "next/link";
import { site } from "@/content/site";
import { services } from "@/content/services";

export function SiteFooter() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3 lg:px-8">
        <div>
          <p className="font-serif text-3xl text-ink">
            Helena <span className="italic">Melo</span>
          </p>
          <p className="mt-2 text-sm tracking-[0.18em] text-muted uppercase">
            Terapeuta holística
          </p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted">
            Consultas online e presenciais, desde 2015.
          </p>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-teal uppercase">Serviços</p>
          <ul className="mt-4 space-y-2">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/servicos/${service.slug}`}
                  className="text-sm text-ink hover:text-teal"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="text-xs tracking-[0.2em] text-teal uppercase">Contacto</p>
          <address className="mt-4 space-y-2 text-sm not-italic text-ink">
            <p>
              <a href={site.phoneHref} className="hover:text-teal">
                {site.phoneDisplay}
              </a>
            </p>
            <p>
              <a
                href={site.instagramMessages}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal"
              >
                Mensagem no Instagram
              </a>
            </p>
            <p>
              <a
                href={site.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-teal"
              >
                {site.instagramHandle}
              </a>
            </p>
            <p>
              <a href={`mailto:${site.email}`} className="hover:text-teal">
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-5 text-xs leading-relaxed text-muted sm:flex-row sm:justify-between lg:px-8">
          <p>© 2026 Helena Melo</p>
          <p className="max-w-xl">
            Acompanhamento holístico e complementar. Não substitui cuidados
            médicos ou psicológicos. As fotografias desta página são
            provisórias.
          </p>
        </div>
      </div>
    </footer>
  );
}
