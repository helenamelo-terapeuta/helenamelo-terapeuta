const basePath = (process.env.NEXT_PUBLIC_BASE_PATH ?? "").replace(/\/$/, "");

export const site = {
  name: "Helena Melo",
  role: "Terapeuta holística",
  description:
    "Terapias individuais, yoga, Tai Chi e experiências de bem-estar para hotéis, empresas e grupos. Online e presencialmente.",
  url: (process.env.NEXT_PUBLIC_SITE_URL ?? "https://helenamelo.pt").replace(
    /\/$/,
    "",
  ),
  basePath,
  locale: "pt-PT",
  phoneDisplay: "+351 910 298 644",
  phoneHref: "tel:+351910298644",
  email: "helenampmelo@gmail.com",
  instagramHandle: "@helenamelo.pt",
  instagramUrl: "https://www.instagram.com/helenamelo.pt/",
  instagramMessages: "https://ig.me/m/helenamelo.pt",
} as const;

export function assetPath(path: string) {
  if (!path.startsWith("/")) {
    return path;
  }

  return `${site.basePath}${path}`;
}

export function pageUrl(path: string) {
  if (path === "/") {
    return `${site.url}${site.basePath}/`;
  }

  const clean = path.replace(/\/$/, "");
  const isFile = /\.[a-z0-9]+$/i.test(clean);

  return `${site.url}${site.basePath}${clean}${isFile ? "" : "/"}`;
}

export const nav = [
  { href: "/#sobre", label: "Sobre" },
  { href: "/#servicos", label: "Serviços" },
  { href: "/#hoteis", label: "Hotéis e empresas" },
  { href: "/#instagram", label: "Instagram" },
  { href: "/#contacto", label: "Contacto" },
] as const;
