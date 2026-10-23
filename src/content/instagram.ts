import { site } from "@/content/site";

export type FeedLine = {
  text: string;
  variant: "numeral" | "kicker" | "script" | "mark" | "quote" | "whisper";
};

export type FeedPost = {
  id: string;
  label: string;
  href: string;
  theme: "paper" | "tide" | "aqua" | "foam";
  image?: string;
  overlay?: "dark" | "light";
  lines: FeedLine[];
};

const profile = site.instagramUrl;

export const feedPosts: FeedPost[] = [
  {
    id: "livros",
    label: "3 livros que mudaram a minha vida. Abrir o Instagram de Helena Melo.",
    href: profile,
    theme: "paper",
    lines: [
      { text: "3", variant: "numeral" },
      { text: "livros", variant: "kicker" },
      { text: "que mudaram", variant: "kicker" },
      { text: "a minha vida", variant: "mark" },
    ],
  },
  {
    id: "mitos-tarot",
    label: "4 mitos sobre tarot. Abrir o Instagram de Helena Melo.",
    href: profile,
    theme: "tide",
    lines: [
      { text: "4", variant: "numeral" },
      { text: "mitos sobre", variant: "kicker" },
      { text: "Tarot", variant: "script" },
    ],
  },
  {
    id: "espiritual",
    label: "Agora sou espiritual. Abrir o Instagram de Helena Melo.",
    href: profile,
    theme: "foam",
    image: "/images/botanicals.jpg",
    overlay: "light",
    lines: [
      { text: "“agora sou", variant: "whisper" },
      { text: "espiritual!”", variant: "script" },
    ],
  },
  {
    id: "ansiedade",
    label: "5 frases poderosas contra a ansiedade. Abrir o Instagram de Helena Melo.",
    href: profile,
    theme: "paper",
    lines: [
      { text: "5 frases", variant: "kicker" },
      { text: "poderosas", variant: "kicker" },
      { text: "contra a", variant: "whisper" },
      { text: "ansiedade", variant: "mark" },
    ],
  },
  {
    id: "buda",
    label:
      "No que pensas, tornas-te. O que sentes, atrais. O que imaginas, crias. Abrir o Instagram de Helena Melo.",
    href: profile,
    theme: "tide",
    image: "/images/dark-water.jpg",
    overlay: "dark",
    lines: [
      { text: "No que pensas, tornas-te.", variant: "quote" },
      { text: "O que sentes, atrais.", variant: "quote" },
      { text: "O que imaginas, crias.", variant: "quote" },
      { text: "Buda", variant: "script" },
    ],
  },
  {
    id: "yoga-criancas",
    label: "Yoga para crianças. Abrir o Instagram de Helena Melo.",
    href: profile,
    theme: "aqua",
    lines: [
      { text: "Yoga", variant: "kicker" },
      { text: "para", variant: "whisper" },
      { text: "Crianças", variant: "script" },
    ],
  },
  {
    id: "amor-medo",
    label:
      "O contrário de amor não é ódio, é medo. Abrir o Instagram de Helena Melo.",
    href: profile,
    theme: "foam",
    lines: [
      { text: "o contrário de", variant: "whisper" },
      { text: "Amor", variant: "kicker" },
      { text: "não é ódio", variant: "whisper" },
      { text: "é medo", variant: "script" },
    ],
  },
  {
    id: "gratidao",
    label: "O poder da gratidão. Abrir o Instagram de Helena Melo.",
    href: profile,
    theme: "tide",
    image: "/images/ocean-sunset.jpg",
    overlay: "dark",
    lines: [
      { text: "O poder", variant: "kicker" },
      { text: "da", variant: "whisper" },
      { text: "gratidão", variant: "script" },
    ],
  },
];
