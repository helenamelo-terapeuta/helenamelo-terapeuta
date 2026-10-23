export type Faq = {
  question: string;
  answer: string;
};

export type ServiceImage = {
  src: string;
  alt: string;
};

export type Offering = {
  name: string;
  price: string;
  description: string;
};

export type ServiceCategoryId = "terapias" | "movimento" | "experiencias";

export type Service = {
  slug: string;
  category: ServiceCategoryId;
  title: string;
  shortTitle: string;
  lead: string;
  paragraphs: string[];
  expects: string[];
  faqs: Faq[];
  offerings?: Offering[];
  seoDescription: string;
  image: ServiceImage;
  gallery?: ServiceImage[];
};

export const categories: {
  id: ServiceCategoryId;
  title: string;
  intro: string;
}[] = [
  {
    id: "terapias",
    title: "Terapias Individuais",
    intro:
      "Sessões a sós, para cuidar do corpo, escutar emoções e conhecer-te com mais clareza.",
  },
  {
    id: "movimento",
    title: "Movimento e Bem-Estar",
    intro:
      "Práticas de movimento para abrandar, ganhar consciência e, com as crianças, crescer a brincar.",
  },
  {
    id: "experiencias",
    title: "Experiências para Hotéis, Empresas e Grupos",
    intro:
      "Propostas para receber grupos: manhãs em hotéis, pausas nas empresas e encontros de autoconhecimento.",
  },
];

const bookSession: Faq = {
  question: "Como marco uma sessão?",
  answer:
    "É muito simples! Basta entrares em contacto comigo através do número de telemóvel ou das minhas redes sociais. Combinamos o melhor horário e explico-te tudo o que precisas de saber.",
};

const priceOnRequest: Faq = {
  question: "Qual é o valor da sessão?",
  answer:
    "O valor depende do formato e da duração. Digo-te antes de marcares, para decidires com clareza.",
};

const onlineOrInPerson: Faq = {
  question: "As consultas são online ou presenciais?",
  answer:
    "As consultas podem ser realizadas online ou presencialmente, mediante marcação. Em ambos os formatos, procuro criar um espaço tranquilo e acolhedor.",
};

const inPerson: Faq = {
  question: "A sessão é presencial?",
  answer:
    "Sim. Quando entrares em contacto, combinamos o local e o horário.",
};

const proposeCollaboration: Faq = {
  question: "Como proponho uma colaboração?",
  answer:
    "Escreve-me pelo Instagram ou liga para o +351 910 298 644. Falamos do espaço, do grupo e do momento que queres criar.",
};

const collaborationPrice: Faq = {
  question: "Qual é o valor?",
  answer:
    "Depende do formato, da duração e do número de pessoas. Digo-te o valor antes de confirmarmos.",
};

export const services: Service[] = [
  {
    slug: "massagem-terapeutica",
    category: "terapias",
    title: "Massagem Terapêutica",
    shortTitle: "Massagem Terapêutica",
    lead: "Um momento para o corpo abrandar e receber cuidado.",
    paragraphs: [
      "Acredito que o toque é uma das formas mais bonitas de cuidar de alguém. Nas minhas massagens, procuro escutar o que o teu corpo precisa, adaptando as técnicas às tuas tensões, ao teu estado físico e ao momento que estás a viver. Mais do que aliviar o desconforto muscular, quero proporcionar-te um espaço onde te possas sentir verdadeiramente cuidada, acolhida e revitalizada.",
    ],
    expects: [
      "Técnicas adaptadas às tuas tensões e ao momento que estás a viver",
      "Um espaço para te sentires cuidada, acolhida e revitalizada",
      "Mais do que alívio muscular: tempo para o corpo abrandar",
    ],
    faqs: [inPerson, bookSession, priceOnRequest],
    seoDescription:
      "Massagem terapêutica com a Helena Melo. Um momento para o corpo abrandar e receber cuidado, com técnicas adaptadas a ti. Marca pelo Instagram ou pelo +351 910 298 644.",
    image: {
      src: "/images/botanicals.jpg",
      alt: "Plantas e flores secas sobre linho, em luz suave",
    },
  },
  {
    slug: "medicina-tradicional-chinesa",
    category: "terapias",
    title: "Consulta de Medicina Tradicional Chinesa e Acupuntura",
    shortTitle: "Medicina Chinesa e Acupuntura",
    lead: "Olhar para o corpo como um todo.",
    paragraphs: [
      "Na Medicina Tradicional Chinesa, procuro compreender a pessoa para além do sintoma que a trouxe até mim. Através de uma avaliação individualizada, utilizo a acupuntura e outras técnicas da Medicina Tradicional Chinesa, quando adequadas, para acompanhar diferentes necessidades de saúde e bem-estar. Cada sessão é adaptada a ti, ao teu corpo e à fase da vida em que te encontras.",
    ],
    expects: [
      "Uma avaliação individualizada, para além do sintoma",
      "Acupuntura e outras técnicas da Medicina Tradicional Chinesa, quando adequadas",
      "Uma sessão adaptada ao teu corpo e à fase da vida em que estás",
    ],
    faqs: [inPerson, bookSession, priceOnRequest],
    seoDescription:
      "Consulta de Medicina Tradicional Chinesa e acupuntura com a Helena Melo. Uma avaliação individualizada, adaptada a ti e à fase da vida em que estás.",
    image: {
      src: "/images/dark-water.jpg",
      alt: "Superfície calma de água em tons de verde-azulado",
    },
  },
  {
    slug: "hipnoterapia",
    category: "terapias",
    title: "Hipnose Terapêutica — Um Encontro com o Teu Mundo Interior",
    shortTitle: "Hipnose Terapêutica",
    lead: "Explorar padrões, compreender emoções e abrir espaço à transformação.",
    paragraphs: [
      "Acredito que muitas das nossas dificuldades estão relacionadas com padrões, crenças e experiências que fomos acumulando ao longo da vida. Através da Hipnose Terapêutica, convido-te a explorar o teu mundo inconsciente num ambiente seguro e acolhedor, onde podemos trabalhar emoções, compreender comportamentos e descobrir novas possibilidades. O meu objetivo é ajudar-te a desenvolver uma relação mais consciente contigo, com mais liberdade, confiança e autonomia.",
    ],
    expects: [
      "Um ambiente seguro e acolhedor para explorar o teu mundo interior",
      "Espaço para trabalhar emoções e compreender comportamentos",
      "Uma relação mais consciente contigo, com mais liberdade e autonomia",
    ],
    faqs: [onlineOrInPerson, bookSession, priceOnRequest],
    seoDescription:
      "Hipnose terapêutica com a Helena Melo. Um encontro para explorar padrões, compreender emoções e abrir espaço à transformação. Online ou presencial.",
    image: {
      src: "/images/helena-significado-da-vida.jpeg",
      alt: "Helena Melo de perfil, à entrada de uma gruta com vegetação",
    },
  },
  {
    slug: "astrologia",
    category: "terapias",
    title: "Astrologia — Um Mapa para o Autoconhecimento",
    shortTitle: "Astrologia",
    lead: "Descobrir quem és, reconhecer os teus talentos e compreender os teus ciclos.",
    paragraphs: [
      "Para mim, a Astrologia é uma linguagem simbólica maravilhosa para explorarmos quem somos. Através do teu mapa astral, convido-te a olhar para as tuas características, necessidades, talentos, desafios e padrões, trazendo consciência às diferentes dimensões da tua personalidade. Não acredito que um mapa defina o teu destino, mas que pode ajudar-te a conhecer melhor as tuas possibilidades e a fazer escolhas mais conscientes e alinhadas contigo.",
    ],
    expects: [
      "O mapa astral como linguagem para o autoconhecimento",
      "Um olhar sobre características, talentos, desafios e ciclos",
      "Mais consciência para escolheres, com livre-arbítrio",
    ],
    offerings: [
      {
        name: "Leitura Completa do Mapa Astral",
        price: "50€",
        description:
          "Uma exploração aprofundada do teu mapa natal, onde vamos conhecer as tuas características, necessidades emocionais, talentos, desafios e padrões, numa perspetiva de autoconhecimento e desenvolvimento pessoal.",
      },
      {
        name: "Consulta de Trânsitos Astrológicos",
        price: "35€",
        description:
          "Uma leitura focada na fase que estás a atravessar, explorando os movimentos planetários atuais em relação ao teu mapa natal e os temas que podem convidar-te à reflexão e ao crescimento.",
      },
    ],
    faqs: [
      {
        question: "Preciso da hora de nascimento?",
        answer:
          "Idealmente, sim! A hora de nascimento permite calcular o teu Ascendente e as casas astrológicas, tornando a leitura do mapa mais completa e personalizada. Se não souberes a hora exata, podemos realizar a consulta na mesma, e calculamos a hora através de algumas perguntas chave!",
      },
      {
        question: "A astrologia prevê o que me vai acontecer?",
        answer:
          "Para mim, a Astrologia não serve para prever um destino inevitável, mas para nos ajudar a compreender melhor os nossos padrões, potencialidades e ciclos de vida. Através da análise dos trânsitos planetários, podemos explorar os temas e desafios de determinada fase, trazendo mais consciência às nossas escolhas. Acredito que o autoconhecimento nos dá mais liberdade, no entanto temos sempre livre-arbítrio para construir o nosso próprio caminho.",
      },
      {
        question: "Serve para compreender uma relação?",
        answer:
          "Sim! Através da Sinastria, podemos comparar dois mapas astrais e explorar as dinâmicas de uma relação: os pontos de afinidade, as diferenças, as necessidades emocionais e os possíveis desafios. É uma ferramenta de reflexão que pode ajudar-nos a compreender melhor a forma como nos relacionamos, seja numa relação amorosa, familiar ou de amizade.",
      },
      {
        question: "As consultas são online ou presenciais?",
        answer:
          "As consultas podem ser realizadas online ou presencialmente, mediante marcação. Em ambos os formatos, procuro criar um espaço tranquilo e acolhedor, onde possamos explorar o teu mapa com tempo e profundidade.",
      },
      {
        question: "Como marco uma sessão?",
        answer:
          "É muito simples! Basta entrares em contacto comigo através do número de telemóvel ou das minhas redes sociais. Combinamos o melhor horário e explico-te tudo o que precisas de saber para a nossa consulta.",
      },
      {
        question: "Qual é o valor da sessão?",
        answer:
          "Disponibilizo duas modalidades de consulta.\n\nLeitura Completa do Mapa Astral — 50€. Uma exploração aprofundada do teu mapa natal, onde vamos conhecer as tuas características, necessidades emocionais, talentos, desafios e padrões, numa perspetiva de autoconhecimento e desenvolvimento pessoal.\n\nConsulta de Trânsitos Astrológicos — 35€. Uma leitura focada na fase que estás a atravessar, explorando os movimentos planetários atuais em relação ao teu mapa natal e os temas que podem convidar-te à reflexão e ao crescimento.",
      },
    ],
    seoDescription:
      "Leitura do mapa astral e trânsitos astrológicos com a Helena Melo. Autoconhecimento, online ou presencial. Mapa completo 50€, trânsitos 35€.",
    image: {
      src: "/images/ocean-sunset.jpg",
      alt: "Pôr do sol sobre o Atlântico, com uma falésia ao fundo",
    },
  },
  {
    slug: "tarot",
    category: "terapias",
    title: "Leitura de Tarot",
    shortTitle: "Leitura de Tarot",
    lead: "As cartas como conversa, para iluminar uma pergunta que ainda não tem resposta fácil.",
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
    faqs: [
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
      onlineOrInPerson,
      bookSession,
      priceOnRequest,
    ],
    seoDescription:
      "Leitura de tarot com a Helena Melo. As cartas como conversa para ganhar clareza, online ou presencial. Marca pelo Instagram ou pelo +351 910 298 644.",
    image: {
      src: "/images/tarot.jpeg",
      alt: "Mão a segurar a carta A Estrela, entre folhas de hera",
    },
  },
  {
    slug: "reiki",
    category: "terapias",
    title: "Reiki",
    shortTitle: "Reiki",
    lead: "Um momento de quietude para te sentires acolhida.",
    paragraphs: [
      "O Reiki, na minha prática, é um espaço de pausa e presença. A sessão decorre num ambiente calmo, com toque suave, para quem quer abrandar e cuidar de si. Não substitui acompanhamento médico nem psicológico. É um complemento, um tempo para te sentires mais presente e acolhida.",
    ],
    expects: [
      "Um ambiente calmo e respeitoso",
      "Tempo para abrandar e cuidar de ti",
      "Um acompanhamento complementar, ao lado de outros cuidados se já os tiveres",
    ],
    faqs: [inPerson, bookSession, priceOnRequest],
    seoDescription:
      "Sessão de Reiki com a Helena Melo. Um momento de pausa e presença, presencial. Marca pelo Instagram ou pelo +351 910 298 644.",
    image: {
      src: "/images/reiki.jpeg",
      alt: "Helena Melo de perfil, de mãos juntas, num espaço aberto com árvores",
    },
  },
  {
    slug: "yoga",
    category: "movimento",
    title: "Yoga — Movimento com Consciência",
    shortTitle: "Yoga",
    lead: "Um encontro entre o corpo, a respiração e a presença.",
    paragraphs: [
      "Nas minhas aulas de Yoga, convido-te a abrandar e a escutar o teu corpo através do movimento, da respiração e do relaxamento. Não se trata de executar posturas perfeitas, mas de encontrar um espaço onde possas desenvolver consciência corporal, flexibilidade e equilíbrio, respeitando sempre o teu ritmo. As aulas podem acontecer individualmente ou em grupo.",
    ],
    expects: [
      "Movimento, respiração e relaxamento ao teu ritmo",
      "Consciência corporal, flexibilidade e equilíbrio",
      "Aulas individuais ou em grupo",
    ],
    faqs: [
      {
        question: "Preciso de experiência ou de ser flexível?",
        answer:
          "Não. As aulas respeitam o teu ritmo. Não se trata de executar posturas perfeitas, mas de escutar o corpo.",
      },
      {
        question: "As aulas são individuais ou em grupo?",
        answer:
          "Podem acontecer das duas formas. Quando falamos, combinamos o formato que fizer sentido.",
      },
      inPerson,
      bookSession,
      priceOnRequest,
    ],
    seoDescription:
      "Aulas de yoga com a Helena Melo. Movimento com consciência, respiração e relaxamento, individualmente ou em grupo.",
    image: {
      src: "/images/yoga-hero.jpeg",
      alt: "Helena Melo em posição de yoga, num miradouro sobre um rio e colinas",
    },
  },
  {
    slug: "tai-chi",
    category: "movimento",
    title: "Tai Chi — A Arte de Abrandar",
    shortTitle: "Tai Chi",
    lead: "Movimento suave, presença e equilíbrio.",
    paragraphs: [
      "O Tai Chi é uma prática que adoro partilhar pela leveza e tranquilidade que pode trazer ao nosso dia. Através de movimentos fluidos, respiração e atenção ao corpo, convido-te a sair do ritmo acelerado do quotidiano e a regressar ao momento presente. As sessões são adaptadas ao grupo, tornando esta prática acessível mesmo a quem nunca experimentou.",
    ],
    expects: [
      "Movimentos fluidos, respiração e atenção ao corpo",
      "Uma prática acessível, mesmo sem experiência",
      "Sessões adaptadas ao grupo",
    ],
    faqs: [
      {
        question: "Nunca experimentei. Posso participar?",
        answer:
          "Sim. As sessões são adaptadas ao grupo e a prática é acessível mesmo a quem nunca experimentou.",
      },
      inPerson,
      bookSession,
      priceOnRequest,
    ],
    seoDescription:
      "Tai Chi com a Helena Melo. Movimento suave, presença e equilíbrio, em sessões adaptadas ao grupo.",
    image: {
      src: "/images/tai-chi-em-grupo-2.jpeg",
      alt: "Helena Melo a orientar um grupo de Tai Chi num jardim",
    },
    gallery: [
      {
        src: "/images/tai-chi-em-grupo.jpeg",
        alt: "Grupo de Tai Chi num jardim, debaixo de uma árvore",
      },
      {
        src: "/images/tai-chi-em-grupo-3.jpeg",
        alt: "Grupo alargado de Tai Chi à sombra das árvores, num jardim",
      },
    ],
  },
  {
    slug: "yoga-bebes-criancas",
    category: "movimento",
    title: "Yoga para Bebés e Crianças — Crescer a Brincar",
    shortTitle: "Yoga para Bebés e Crianças",
    lead: "Descobrir o corpo, as emoções e o mundo através do movimento.",
    paragraphs: [
      "Adoro trabalhar com crianças e criar momentos em que podem aprender enquanto brincam. Através de histórias, jogos, música, movimento e exercícios de relaxamento, desenvolvo atividades adaptadas às diferentes idades, incluindo Baby Yoga e Yoga Infantil. Procuro criar um ambiente alegre e seguro, onde cada criança possa explorar o corpo, expressar-se e descobrir novas formas de estar consigo e com os outros.",
    ],
    expects: [
      "Histórias, jogos, música, movimento e relaxamento",
      "Atividades adaptadas às diferentes idades, incluindo Baby Yoga e Yoga Infantil",
      "Um ambiente alegre e seguro para explorar e expressar",
    ],
    faqs: [
      {
        question: "Para que idades é?",
        answer:
          "As atividades são adaptadas às diferentes idades, incluindo Baby Yoga e Yoga Infantil. Quando entrares em contacto, diz-me as idades do grupo para eu preparar a sessão.",
      },
      inPerson,
      bookSession,
      priceOnRequest,
    ],
    seoDescription:
      "Yoga para bebés e crianças com a Helena Melo. Histórias, jogos, música e movimento, em Baby Yoga e Yoga Infantil.",
    image: {
      src: "/images/yoga-para-criancas.jpeg",
      alt: "Aula de yoga com crianças e adultos, em tapetes no jardim",
    },
    gallery: [
      {
        src: "/images/yoga-para-criancas-3.jpeg",
        alt: "Helena Melo e uma criança sentadas num tapete, de braços erguidos",
      },
      {
        src: "/images/yoga-para-criancas-2.jpeg",
        alt: "Adulto e criança numa brincadeira de yoga, deitados num tapete no jardim",
      },
      {
        src: "/images/atividades-para-criancas.jpeg",
        alt: "Helena Melo com um grupo de crianças à porta de uma escola primária",
      },
      {
        src: "/images/atividaders-para-criancas-2.jpeg",
        alt: "Helena Melo a abraçar duas crianças à entrada de uma escola",
      },
    ],
  },
  {
    slug: "morning-flow",
    category: "experiencias",
    title: "Morning Flow — Experiências de Bem-Estar para Hotéis",
    shortTitle: "Morning Flow",
    lead: "Começar o dia com presença, movimento e leveza.",
    paragraphs: [
      "Imagino poucas formas mais bonitas de começar o dia do que dedicar algum tempo ao corpo, à respiração e ao momento presente. O Morning Flow é uma experiência de Yoga ou Tai Chi pensada para hóspedes de hotéis e espaços de turismo, adaptada ao ambiente e ao grupo. Uma oportunidade para começar o dia com tranquilidade, desfrutar do lugar e levar consigo uma sensação de bem-estar.",
    ],
    expects: [
      "Yoga ou Tai Chi para hóspedes de hotéis e espaços de turismo",
      "Uma experiência adaptada ao ambiente e ao grupo",
      "Um início de dia com tranquilidade e presença",
    ],
    faqs: [
      {
        question: "O que inclui o Morning Flow?",
        answer:
          "É uma experiência de Yoga ou Tai Chi para hóspedes, adaptada ao ambiente do hotel e ao grupo. Começamos o dia com movimento, respiração e presença.",
      },
      proposeCollaboration,
      collaborationPrice,
    ],
    seoDescription:
      "Morning Flow da Helena Melo: yoga ou Tai Chi para hóspedes de hotéis e espaços de turismo. Propõe uma colaboração.",
    image: {
      src: "/images/yoga-hero.jpeg",
      alt: "Helena Melo em posição de yoga, num miradouro sobre um rio e colinas",
    },
  },
  {
    slug: "reset-recharge",
    category: "experiencias",
    title: "Reset & Recharge — Bem-Estar nas Empresas",
    shortTitle: "Reset & Recharge",
    lead: "Uma pausa para respirar, recuperar energia e voltar ao essencial.",
    paragraphs: [
      "Acredito que o bem-estar também precisa de ter lugar durante o horário de trabalho. Criei esta proposta para levar às equipas momentos de movimento consciente, Tai Chi, respiração e relaxamento, oferecendo uma pausa no ritmo exigente do dia a dia. As sessões são adaptadas ao contexto de cada empresa e procuram proporcionar aos colaboradores mais conforto físico, leveza e espaço para cuidar de si.",
    ],
    expects: [
      "Movimento consciente, Tai Chi, respiração e relaxamento",
      "Uma pausa no ritmo do dia de trabalho",
      "Sessões adaptadas ao contexto de cada empresa",
    ],
    faqs: [
      {
        question: "Como funciona numa empresa?",
        answer:
          "Levo à equipa uma pausa de movimento consciente, Tai Chi, respiração e relaxamento. A sessão adapta-se ao espaço e ao ritmo da empresa.",
      },
      proposeCollaboration,
      collaborationPrice,
    ],
    seoDescription:
      "Reset & Recharge da Helena Melo: bem-estar nas empresas, com movimento consciente, Tai Chi, respiração e relaxamento.",
    image: {
      src: "/images/tai-chi-em-grupo.jpeg",
      alt: "Grupo em prática de movimento num jardim, debaixo de uma árvore",
    },
  },
  {
    slug: "inner-glow",
    category: "experiencias",
    title: "Inner Glow Experience — Encontros de Autoconhecimento",
    shortTitle: "Inner Glow Experience",
    lead: "Um espaço para parar, sentir e reconectar.",
    paragraphs: [
      "Há algo muito especial quando nos reunimos em pequenos grupos com tempo e disponibilidade para olhar para dentro. Nas experiências Inner Glow, combino práticas de relaxamento, meditação, movimento suave e exercícios de autoconhecimento, criando um ambiente acolhedor onde cada pessoa pode escutar-se, partilhar e simplesmente ser. Estes encontros podem ser organizados para grupos privados, retiros e eventos especiais.",
    ],
    expects: [
      "Relaxamento, meditação, movimento suave e autoconhecimento",
      "Um ambiente acolhedor para escutar, partilhar e simplesmente ser",
      "Encontros para grupos privados, retiros e eventos especiais",
    ],
    faqs: [
      {
        question: "Para quem é a Inner Glow Experience?",
        answer:
          "Para pequenos grupos, retiros e eventos especiais. É um encontro para parar, sentir e reconectar, com tempo para olhar para dentro.",
      },
      proposeCollaboration,
      collaborationPrice,
    ],
    seoDescription:
      "Inner Glow Experience da Helena Melo: encontros de autoconhecimento para grupos privados, retiros e eventos especiais.",
    image: {
      src: "/images/forest-meditation.jpg",
      alt: "Meditação sobre uma rocha, num pinhal com luz filtrada",
    },
  },
];

export const partnershipSlugs = ["morning-flow", "reset-recharge"] as const;

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}

export function servicesIn(category: ServiceCategoryId) {
  return services.filter((service) => service.category === category);
}
