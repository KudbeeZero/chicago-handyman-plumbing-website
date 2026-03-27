import { BUSINESS_ADDRESS, BUSINESS_NAME, PHONE } from "./routes";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: BUSINESS_NAME,
    telephone: PHONE,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Chicago",
      addressRegion: "IL",
      addressCountry: "US",
      streetAddress: BUSINESS_ADDRESS,
    },
    areaServed: [
      "Dunning",
      "Portage Park",
      "Irving Park",
      "Jefferson Park",
      "Norwood Park",
      "Norridge",
      "Belmont Cragin",
      "Elmwood Park",
      "Chicago",
    ],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "07:00",
        closes: "18:00",
      },
    ],
    description:
      "24/7 emergency plumbing and handyman services in Chicago. Based in Dunning with 15+ years of hands-on experience. Transparent pricing, fast response.",
    priceRange: "$$",
  };
}

export function getServiceSchema(
  serviceName: string,
  description: string,
  url: string,
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: serviceName,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: BUSINESS_NAME,
      telephone: PHONE,
    },
    areaServed: "Chicago, IL",
    url,
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function getReviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "5",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Chicago Homeowner",
    },
    reviewBody:
      "Fast response, honest pricing, and quality work. Highly recommend for any plumbing or handyman needs in Chicago.",
  };
}
