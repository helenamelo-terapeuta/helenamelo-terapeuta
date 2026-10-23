import Image from "next/image";
import type { FeedLine, FeedPost } from "@/content/instagram";
import { feedPosts } from "@/content/instagram";
import { assetPath, site } from "@/content/site";

const themes: Record<FeedPost["theme"], string> = {
  paper: "bg-[#f7f4ee] text-ink",
  tide: "bg-tide text-paper",
  aqua: "bg-[#d7efe8] text-tide",
  foam: "bg-[#e5f2f3] text-tide",
};

function lineClass(line: FeedLine, theme: FeedPost["theme"]) {
  const onDark = theme === "tide";

  switch (line.variant) {
    case "numeral":
      return "font-serif text-6xl leading-none";
    case "kicker":
      return "font-serif text-[1.65rem] leading-none tracking-[0.12em] uppercase";
    case "script":
      return `font-script text-[3.1rem] leading-[0.85] ${onDark ? "text-aqua" : "text-teal"}`;
    case "mark":
      return "bg-[linear-gradient(transparent_58%,#c5e6de_58%,#c5e6de_92%,transparent_92%)] font-script text-[2.7rem] leading-none text-teal";
    case "quote":
      return "font-serif text-[1.05rem] leading-snug";
    case "whisper":
      return "text-[0.72rem] tracking-[0.22em] uppercase";
  }
}

function FeedCard({ post }: { post: FeedPost }) {
  return (
    <li className="aspect-square">
      <a
        href={post.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={post.label}
        className={`group relative flex h-full w-full flex-col items-center justify-center gap-1 overflow-hidden p-5 text-center ${themes[post.theme]}`}
      >
        {post.image ? (
          <Image
            src={assetPath(post.image)}
            alt=""
            fill
            sizes="(min-width: 1024px) 22vw, 50vw"
            className="object-cover motion-safe:transition motion-safe:duration-700 motion-safe:group-hover:scale-[1.04]"
          />
        ) : null}
        {post.overlay === "dark" ? (
          <span className="absolute inset-0 bg-tide/55" aria-hidden="true" />
        ) : null}
        {post.overlay === "light" ? (
          <span className="absolute inset-0 bg-paper/55" aria-hidden="true" />
        ) : null}
        <span className="relative z-10 flex flex-col items-center gap-1">
          {post.lines.map((line) => (
            <span key={line.text} className={lineClass(line, post.theme)}>
              {line.text}
            </span>
          ))}
        </span>
      </a>
    </li>
  );
}

export function InstagramGrid() {
  return (
    <section id="instagram" className="scroll-mt-24 bg-paper">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-24 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-xs tracking-[0.22em] text-teal uppercase">
              Instagram
            </p>
            <h2 className="mt-3 font-serif text-5xl leading-[0.95] text-balance text-ink md:text-6xl">
              O que tenho partilhado
            </h2>
          </div>
          <a
            href={site.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-teal underline decoration-aqua decoration-2 underline-offset-4"
          >
            {site.instagramHandle}
          </a>
        </div>
        <ul className="mt-8 grid grid-cols-2 gap-2 sm:gap-3 lg:grid-cols-4">
          {feedPosts.map((post) => (
            <FeedCard key={post.id} post={post} />
          ))}
        </ul>
        <p className="mt-5 max-w-2xl text-sm leading-relaxed text-muted">
          Uma seleção do perfil. Cada imagem abre o Instagram, onde está o
          feed completo.
        </p>
      </div>
    </section>
  );
}
