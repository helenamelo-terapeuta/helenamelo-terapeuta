import { pageUrl, site } from "@/content/site";
import { services, type Service } from "@/content/services";

export function practiceJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    description: site.description,
    url: pageUrl("/"),
    telephone: "+351910298644",
    email: site.email,
    image: pageUrl("/images/feira-alternativa-bem-estar-2024.jpeg"),
    areaServed: {
      "@type": "Country",
      name: "Portugal",
    },
    availableLanguage: ["pt-PT"],
    sameAs: [site.instagramUrl],
    knowsAbout: services.map((service) => service.shortTitle),
  };
}

export function serviceJsonLd(service: Service) {
  const url = pageUrl(`/servicos/${service.slug}`);

  return [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: service.title,
      serviceType: service.title,
      description: service.seoDescription,
      url,
      provider: {
        "@type": "Person",
        name: site.name,
        telephone: "+351910298644",
        url: pageUrl("/"),
        sameAs: [site.instagramUrl],
      },
      areaServed: "PT",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: service.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: pageUrl("/"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Serviços",
          item: pageUrl("/servicos"),
        },
        {
          "@type": "ListItem",
          position: 3,
          name: service.title,
          item: url,
        },
      ],
    },
  ];
}
