export type Faq = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  title: string;
  summary: string;
  paragraphs: string[];
  expects: string[];
  faqs: Faq[];
  seoDescription: string;
  image: {
    src: string;
    alt: string;
  };
};

const bookingFaqs: Faq[] = [
  {
    question: "As consultas são online ou presenciais?",
    answer:
      "As duas. Quando falamos, combinamos o formato que fizer sentido para ti.",
  },
  {
    question: "Como marco uma sessão?",
    answer:
      "Por mensagem no Instagram ou por telefone, para o +351 910 298 644. A partir daí alinhamos o tema e o formato.",
  },
  {
    question: "Qual é o valor da sessão?",
    answer:
      "O valor depende do formato, online ou presencial. Digo-te antes de marcares, para decidires com clareza.",
  },
];

function withBooking(faqs: Faq[]): Faq[] {
  return [...faqs, ...bookingFaqs];
}

export const services: Service[] = [
  {
    slug: "hipnoterapia",
    title: "Hipnoterapia",
    summary:
      "Uma atenção mais profunda para escutar padrões, hábitos e emoções que se repetem, com a tua consciência presente.",
    paragraphs: [
      "A hipnoterapia é uma conversa em estado de atenção profunda. Permaneces consciente o tempo todo: podes falar, mover-te e interromper a sessão quando quiseres.",
      "É um espaço para olhar com mais calma para o que se repete — um hábito, uma emoção, uma decisão que adias. Muitas pessoas chegam quando a ansiedade ocupa demasiado lugar, ou quando a vida parece acontecer um pouco longe de si.",
      "O acompanhamento é holístico e complementar. Não substitui a avaliação de um médico ou de um psicólogo. Se já tiveres esse cuidado, a sessão pode existir ao lado dele, nunca no lugar dele.",
    ],
    expects: [
      "Uma conversa inicial sobre o que te traz",
      "Relaxamento guiado, sempre com a tua permissão",
      "Tempo para nomear o que surgiu, sem uma resposta imposta",
    ],
    faqs: withBooking([
      {
        question: "Vou perder o controlo durante a sessão?",
        answer:
          "Permaneces consciente durante a sessão. Podes falar, abrir os olhos ou interromper quando quiseres. O ritmo é teu.",
      },
      {
        question: "A hipnoterapia trata a ansiedade?",
        answer:
          "Muitas pessoas procuram a hipnoterapia quando a ansiedade ocupa demasiado espaço. Não é um tratamento médico nem substitui um psicólogo. Pode ser um complemento, se quiseres trabalhar a forma como te relacionas com o que sentes.",
      },
      {
        question: "Preciso de já saber o tema da sessão?",
        answer:
          "Um tema ajuda a focar a conversa. Se ainda não tiveres as palavras, podes chegar com a sensação que te ocupa. Encontramos o fio a partir daí.",
      },
    ]),
    seoDescription:
      "Hipnoterapia com a Helena Melo, online ou presencial. Uma sessão consciente para escutar padrões, hábitos e emoções. Marca pelo Instagram ou pelo +351 910 298 644.",
    image: {
      src: "/images/dark-water.jpg",
      alt: "Superfície calma de água em tons de verde-azulado",
    },
  },
  {
    slug: "astrologia",
    title: "Astrologia",
    summary:
      "O mapa natal como espelho: ciclos, temperamento e temas que regressam, para escolheres com mais clareza.",
    paragraphs: [
      "O mapa natal é uma linguagem para te leres com mais nuance. Fala de temperamento, de ciclos e dos temas que voltam — não de um destino fechado.",
      "Na consulta, a astrologia serve para nomear o que já sentes e para perceberes em que capítulo estás. A partir daí, a escolha continua a ser tua.",
      "Não precisas de conhecer a técnica. Se tiveres a hora e o lugar de nascimento, o mapa fica mais fino. Se não tiveres a hora, diz-mo: trabalhamos com o que existe.",
    ],
    expects: [
      "Data de nascimento e, se a souberes, hora e lugar",
      "Uma leitura do mapa como espelho, não como sentença",
      "Ligação aos temas que queres compreender agora",
    ],
    faqs: withBooking([
      {
        question: "Preciso da hora de nascimento?",
        answer:
          "A hora permite um mapa mais preciso. Se não a souberes, trabalhamos com a data e o lugar, e digo-te até onde a leitura pode ir.",
      },
      {
        question: "A astrologia prevê o que me vai acontecer?",
        answer:
          "Leio o mapa como tendência e como linguagem, não como um futuro escrito. O centro da consulta é a consciência com que escolhes.",
      },
      {
        question: "Serve para compreender uma relação?",
        answer:
          "Pode iluminar a forma como te moves numa ligação. O que fazes com essa ligação continua a ser uma decisão tua.",
      },
    ]),
    seoDescription:
      "Consulta de astrologia com a Helena Melo. O mapa natal como espelho para ciclos e escolhas, online ou presencial. Marca pelo Instagram ou pelo +351 910 298 644.",
    image: {
      src: "/images/ocean-sunset.jpg",
      alt: "Pôr do sol sobre o Atlântico, com uma falésia ao fundo",
    },
  },
  {
    slug: "tarot",
    title: "Tarot",
    summary:
      "As cartas como conversa, não como veredito. Uma forma de iluminar uma pergunta que ainda não tem resposta fácil.",
    paragraphs: [
      "Há muitos mitos à volta do tarot. Nesta prática, as cartas não decidem por ti, não anunciam desgraças e não substituem o teu discernimento.",
      "São uma conversa simbólica, útil quando uma pergunta pede clareza: uma viragem, um padrão, uma relação, um medo que ainda não tem nome.",
      "Podes trazer uma pergunta concreta ou apenas o que te está a ocupar. As imagens abrem ângulos. A escolha fica do teu lado.",
    ],
    expects: [
      "Uma pergunta, ou apenas o tema que te ocupa",
      "Uma leitura das cartas como imagens para pensar",
      "Espaço para tirares as tuas próprias conclusões",
    ],
    faqs: withBooking([
      {
        question: "O tarot diz-me o que fazer?",
        answer:
          "As cartas iluminam ângulos e hipóteses. A decisão continua a ser tua. O tarot não é um veredito.",
      },
      {
        question: "Tenho de trazer uma pergunta?",
        answer:
          "Uma pergunta ajuda a focar a sessão. Se ainda não a tiveres, começamos pelo que estás a sentir.",
      },
      {
        question: "É uma previsão do futuro?",
        answer:
          "A leitura pode falar de tendências. O centro do trabalho é a consciência sobre o momento em que estás, não uma sentença sobre o que vem a seguir.",
      },
    ]),
    seoDescription:
      "Consulta de tarot com a Helena Melo. As cartas como conversa para ganhar clareza, online ou presencial. Marca pelo Instagram ou pelo +351 910 298 644.",
    image: {
      src: "/images/tarot-table.jpg",
      alt: "Cartas ilustradas com lua e folhas, sobre linho verde-azulado",
    },
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
