import { site } from "@/content/site";

type ContactActionsProps = {
  className?: string;
  tone?: "light" | "dark";
  messageLabel?: string;
};

export function ContactActions({
  className = "",
  tone = "light",
  messageLabel = "Falar no Instagram",
}: ContactActionsProps) {
  const primary =
    tone === "dark"
      ? "bg-paper text-tide hover:bg-white"
      : "bg-tide text-paper hover:bg-teal";
  const secondary =
    tone === "dark"
      ? "border border-paper/40 text-paper hover:bg-white/10"
      : "border border-tide/15 text-tide hover:border-tide";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[0.95rem] transition ${primary}`}
        href={site.instagramMessages}
        target="_blank"
        rel="noopener noreferrer"
      >
        {messageLabel}
        <span className="sr-only">, abre as mensagens do Instagram</span>
      </a>
      <a
        className={`inline-flex min-h-12 items-center justify-center rounded-full px-6 text-[0.95rem] transition ${secondary}`}
        href={site.phoneHref}
      >
        {site.phoneDisplay}
      </a>
    </div>
  );
}
