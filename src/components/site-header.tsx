"use client";

import Link from "next/link";
import { useState } from "react";
import { nav, site } from "@/content/site";

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line/80 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 lg:px-8">
        <Link href="/" className="block leading-none" onClick={() => setOpen(false)}>
          <span className="block font-serif text-[1.7rem] tracking-tight text-ink">
            Helena <span className="italic">Melo</span>
          </span>
          <span className="mt-1 block text-[0.68rem] tracking-[0.22em] text-muted uppercase">
            Terapeuta holística
          </span>
        </Link>
        <nav className="hidden items-center gap-5 lg:flex" aria-label="Secções">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-ink transition hover:text-teal"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-4 lg:flex">
          <a href={site.phoneHref} className="text-sm text-ink">
            {site.phoneDisplay}
          </a>
          <a
            href={site.instagramMessages}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 items-center rounded-full bg-tide px-4 text-sm text-paper transition hover:bg-teal"
          >
            Mensagem
            <span className="sr-only"> no Instagram</span>
          </a>
        </div>
        <button
          type="button"
          className="min-h-11 rounded-full border border-line px-4 text-sm lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? "Fechar" : "Menu"}
        </button>
      </div>
      {open ? (
        <nav
          id="menu-mobile"
          aria-label="Secções"
          className="border-t border-line px-5 py-2 lg:hidden"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-lg"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </header>
  );
}
