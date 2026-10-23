import { site } from "@/content/site";

export function MobileDock() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 backdrop-blur-md md:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 pt-2 pb-[max(0.6rem,env(safe-area-inset-bottom))]">
        <a
          href={site.phoneHref}
          className="inline-flex min-h-12 items-center justify-center rounded-full border border-tide/20 text-sm text-tide"
        >
          Ligar
        </a>
        <a
          href={site.instagramMessages}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex min-h-12 items-center justify-center rounded-full bg-tide text-sm text-paper"
        >
          Mensagem
          <span className="sr-only"> no Instagram</span>
        </a>
      </div>
    </div>
  );
}
