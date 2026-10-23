import Link from "next/link";
import { ContactActions } from "@/components/contact-actions";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-3xl px-5 py-24 lg:px-8">
      <p className="text-xs tracking-[0.22em] text-teal uppercase">404</p>
      <h1 className="mt-3 font-serif text-5xl leading-[0.95] text-ink md:text-6xl">
        Esta página não existe.
      </h1>
      <p className="mt-5 text-lg text-muted">
        Podes voltar ao início ou falar comigo diretamente.
      </p>
      <div className="mt-8">
        <ContactActions />
      </div>
      <p className="mt-6">
        <Link href="/" className="text-teal underline underline-offset-4">
          Voltar ao início
        </Link>
      </p>
    </div>
  );
}
