import type { Faq } from "@/content/services";

export function FaqList({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-line border-y border-line">
      {faqs.map((faq) => (
        <details key={faq.question} className="group py-5">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-serif text-2xl leading-snug text-ink md:text-[1.7rem] [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span
              aria-hidden="true"
              className="mt-1 text-3xl leading-none text-lagoon transition group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="max-w-2xl pt-3 text-base leading-relaxed text-pretty text-muted">
            {faq.answer}
          </p>
        </details>
      ))}
    </div>
  );
}
